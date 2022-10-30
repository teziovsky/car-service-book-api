import { InferGetServerSidePropsType } from "next";
import React from "react";

import Breadcrumbs from "@/components/Breadcrumbs";
import Layout from "@/layouts/Layout";

const AppIndex = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <Breadcrumbs></Breadcrumbs>
      <h1 className={"text-3xl font-bold"}>App Index</h1>
    </Layout>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default AppIndex;
