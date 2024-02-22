import React from "react";

import { Metadata } from "next";
import BasicLayout from "@/components/Layouts/BasicLayout";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};



const Mcqs:React.FC = () => {
    return (
        <BasicLayout>
        <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">
            <div className="flex flex-col items-start w-full">
                <h4 className="mt-10 text-xl text-white/60">Question 1 of 5</h4>
                <div className="mt-4 text-2xl text-white">
                    What type of framework is Next.js?
                </div>
            </div>
        </div>
        </BasicLayout>
    );
}

export default Mcqs;