import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AuthComponent from "./form"

export const metadata: Metadata = {
  title: "Assessment Portal Sign In",
  description: "Assessment Portal Sign In",
};

const SignIn: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Sign In" />
      <AuthComponent />
    </DefaultLayout>
  );
};

export default SignIn;
