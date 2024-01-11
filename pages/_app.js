import React from 'react';
import Layout from "@/components/layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import PropTypes from 'prop-types';
export default function App({ Component }) {
  return (
    <Layout>
      <Component  />
    </Layout>
  );
}
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
