import Button from "components/Elements/Button/Button";
import ButtonGroup from "components/Elements/ButtonGroup/ButtonGroup";
import Card from "components/Elements/Card/Card";
import Heading from "components/Elements/Heading/Heading";
import Icon from "components/Elements/Icon/Icon";
import React, { useEffect, useState } from "react";
import { api } from "src/plugins";
import { Car } from "src/types";

const AppIndex = () => {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    api
      .get(`http://localhost:8011/api/cars`)
      .then(({ data }) => {
        setCarsList(data);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMsg) {
    return <div>{errorMsg}</div>;
  }

  if (!carsList.length) {
    return <p>Brak samochodów.</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {carsList.map((car) => (
        <Card key={car.id}>
          <Card.Header>
            <div className="card-heading">
              <div className="flex justify-between">
                <Heading level={5} className="self-center">
                  {car.brand} {car.model} {car.generation}
                </Heading>
                <ButtonGroup direction="row">
                  <Button color="accent" status="tertiary" title="Edit" icon="HiOutlinePencilAlt" />
                  <Button color="accent" status="tertiary" title="Delete" icon="HiOutlineTrash" />
                </ButtonGroup>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            {car.type && <p>Type: {car.type}</p>}
            {car.productionYear && <p>Production year: {car.productionYear}</p>}
            {car.engineType && <p>Engine type: {car.engineType}</p>}
            {car.engineCapacity && <p>Engine capacity: {car.engineCapacity}</p>}
            {car.enginePower && <p>Power: {car.enginePower}</p>}
            {car.gearboxType && <p>Gearbox type: {car.gearboxType}</p>}
          </Card.Body>
        </Card>
      ))}
      <Card>
        <Card.Body className="w-full h-full">
          <Button
            className="w-full h-full items-center justify-center"
            color="accent"
            status="tertiary"
            size="large"
            title="Add new car">
            <Icon icon="HiOutlinePlus" />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AppIndex;
