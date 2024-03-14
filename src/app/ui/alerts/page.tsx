import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Warning from "./Warning"
import Information from "./Information"
import Error from "./Error"

export const metadata: Metadata = {
  title: "Next.js Alerts | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Alerts page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const Alerts = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Alerts" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          {/* <!-- Alerts Item --> */}
          <Warning />
          {/* <!-- Alerts Item --> */}
          <Information />
          {/* <!-- Alerts Item --> */}
          <Error />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Alerts;
