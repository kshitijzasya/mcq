// import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
// import Image from "next/image";
import { Metadata } from "next";
import GuestLayout from "@/components/Layouts/GuestLayout";
// import DefaultLayout from "@/components/Layouts/DefaultLayout";
import McqForm from "./Form"

export const metadata: Metadata = {
  title: "Mock Test",
  description:
    "This page is basically a portal to test your knowledge.",
};


const McqsPage: React.FC = () => {
  return (
    <GuestLayout>
      <div className="mx-auto max-w-270">

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-5">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Choose your arena for battle
                </h3>
              </div>
              <div className="p-7">
                <McqForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

McqsPage.displayName = "McqsPage"; // Add displayName property

export default McqsPage;
