import { InferGetServerSidePropsType } from "next";
import React from "react";

import Layout from "@/layouts/Layout";

const AppIndex = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <div className={"container py-6"}>
        <h1 className={"text-3xl font-bold"}>App Index</h1>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      car: [],
    },
  };
}

export default AppIndex;
