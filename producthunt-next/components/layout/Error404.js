import React from "react";
import { Titulo } from "../misc/styledComponents";
import Layout from "./Layout";

const Error404 = ({ mensaje }) => {
  return (
    <Layout>
      <Titulo>{mensaje}</Titulo>
    </Layout>
  );
};

export default Error404;
