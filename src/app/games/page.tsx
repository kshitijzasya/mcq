"use client";
import React from "react";
import Link from "next/link"
import CustomCard from "@/components/Cards/CustomCard";
import data from "@/data/games/icons"

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 px-8 py-8">
        {
            data && 
            data.map(function(val, index) {
                return (
                    <Link href={val.url} key={index}>
                        <CustomCard title={val.name} head={val.name} >
                            {val.icon}
                        </CustomCard>
                    </Link>
                )
            })
        }
      </div>
    </>
  );
};

Dashboard.displayName = "Dashboard"

export default Dashboard;
