"use client";
import React from "react";
import Link from "next/link"
import GuestLayout from "@/components/Layouts/GuestLayout";
import GameCard from "@/components/Cards/GameCard";
import data from "@/data/games/icons"

const Dashboard: React.FC = () => {
  return (
    <GuestLayout showHeader={true}>
      <div className="grid grid-cols-6 gap-4 md:grid-cols-4 md:gap-6 xl:grid-cols-6 2xl:gap-7.5 px-8 py-8">
        {
            data && 
            data.map(function(val, index) {
                return (
                    <Link href={val.url} key={index}>
                        <GameCard title={val.name} head={val.name} >
                            {val.icon}
                        </GameCard>
                    </Link>
                )
            })
        }
      </div>
    </GuestLayout>
  );
};

Dashboard.displayName = "Dashboard"

export default Dashboard;
