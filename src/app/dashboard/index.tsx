"use client";
import React from "react";
import Cards from "./Cards"
import Weather from "../ui/widgets/weather"
import News from "../ui/widgets/news"

const Dashboard: React.FC = () => {
  return (
    <>
    <div className="grid grid-cols-3">
      <div className="grid grid-cols-1 col-span-2 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 h-fit">
          <Cards />
        </div>
        <div className="flex flex-col px-2">
          <Weather />
          <News />
        </div>
    </div>
    </>
  );
};

Dashboard.displayName = "Dashboard"

export default Dashboard;
