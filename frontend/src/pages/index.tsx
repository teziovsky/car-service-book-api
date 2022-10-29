import type { InferGetServerSidePropsType } from "next";
import { useEffect } from "react";

import Seo from "@/components/Seo";
import { useAuth } from "@/context/authContext";
import Layout from "@/layouts/Layout";

const Home = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { user, login, getUser } = useAuth();
  console.log("user: ", user);

  useEffect(() => {
    async function getData() {
      await login({
        email: "mail@example.com",
        password: "password12345",
      });

      await getUser();
    }

    getData();
  }, []);

  return (
    <Layout>
      <Seo title={"Home"} description={"Description of Home"} />
      <div className={"min-h-screen hero bg-base-200"}>
        <div className={"text-center hero-content"}>
          <div className={"max-w-md"}>
            <h1 className={"text-5xl font-bold"}>Hello there</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      email: "teziovsky@gmail.com",
    },
  };
}

export default Home;
