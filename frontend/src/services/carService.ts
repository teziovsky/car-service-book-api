import { api } from "plugins/axios";
import { useState } from "react";
import { Car } from "types/car";

export default {
  getCars: () => {
    const [data, setData] = useState<Car[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    async function execute() {
      try {
        const resData = await api.get(`http://localhost:8011/api/cars`);
        setData(resData.data);
      } catch (error: any) {
        setErrorMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    return {
      data,
      isLoading,
      errorMsg,
      execute,
    };
  },
};
