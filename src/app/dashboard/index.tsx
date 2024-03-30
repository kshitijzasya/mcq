"use client";
import React from "react";
import Link from "next/link"
import CustomCard from "@/components/Cards/CustomCard";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <Link href="/mcqs">
          <CustomCard title="Test Your skills" total="25" head="MCQS" >
          <svg viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>fundamentals/html/syntax</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="fundamentals/html/syntax" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <rect id="bg" stroke="#DB2334" strokeWidth="2" fill="#F36518" fillRule="nonzero" x="1" y="1" width="71" height="71" rx="14"> </rect> <path d="M16,2 L29.1335992,2 L42.5927842,71 L16,71 C8.2680135,71 2,64.7319865 2,57 L2,16 C2,8.2680135 8.2680135,2 16,2 Z" id="bg" fill="#E64C17" fillRule="nonzero"> </path> <path d="M15,38.0498047 L15,35.375 L27.9012206,28.6396484 L27.9012206,31.5722656 L17.5265399,36.7285156 L27.9012206,41.8364258 L27.9012206,44.7851562 L15,38.0498047 Z M39.8260006,23 L42.1450468,23 L32.5515186,50.1186523 L30.2202668,50.1186523 L39.8260006,23 Z M45.0987794,41.8364258 L55.4734601,36.7285156 L45.0987794,31.5722656 L45.0987794,28.6396484 L58,35.375 L58,38.0498047 L45.0987794,44.7851562 L45.0987794,41.8364258 Z" id="</>" fill="#FFFFFF"> </path> </g> </g></svg>
          </CustomCard>
          
        </Link>
        <Link href="/games">
          <CustomCard  title="Have fun" total="1" head="Games">
            <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M890.88 424.96H189.44c-17.92 0-32 14.08-32 32v318.72c0 17.92 14.08 32 32 32h227.84l11.52-47.36c0-17.92 14.08-32 32-32h175.36c17.92 0 32 14.08 32 32l11.52 47.36h211.2c17.92 0 32-14.08 32-32V456.96c0-16.64-14.08-32-32-32z" fill="#00B2AE"></path><path d="M890.88 821.76H679.68c-6.4 0-11.52-3.84-12.8-10.24l-11.52-47.36v-2.56c0-10.24-8.96-19.2-19.2-19.2H460.8c-10.24 0-19.2 8.96-19.2 19.2v2.56l-11.52 47.36c-1.28 5.12-6.4 10.24-12.8 10.24H189.44c-24.32 0-44.8-20.48-44.8-44.8v-320c0-24.32 20.48-44.8 44.8-44.8h702.72c24.32 0 44.8 20.48 44.8 44.8v318.72c-1.28 25.6-20.48 46.08-46.08 46.08z m-200.96-25.6h200.96c10.24 0 19.2-8.96 19.2-19.2v-320c0-10.24-8.96-19.2-19.2-19.2H189.44c-10.24 0-19.2 8.96-19.2 19.2v318.72c0 10.24 8.96 19.2 19.2 19.2h217.6l8.96-37.12c1.28-24.32 20.48-43.52 44.8-43.52h175.36c24.32 0 43.52 19.2 44.8 43.52l8.96 38.4z" fill="#231C1C"></path><path d="M537.6 422.4h-25.6v-111.36c0-7.68 5.12-12.8 12.8-12.8h83.2v-115.2h25.6v128c0 7.68-5.12 12.8-12.8 12.8H537.6V422.4z" fill="#231C1C"></path><path d="M700.16 552.96m-47.36 0a47.36 47.36 0 1 0 94.72 0 47.36 47.36 0 1 0-94.72 0Z" fill="#D4594C"></path><path d="M700.16 614.4c-33.28 0-60.16-26.88-60.16-60.16s26.88-60.16 60.16-60.16 60.16 26.88 60.16 60.16c0 32-26.88 60.16-60.16 60.16z m0-96c-19.2 0-34.56 15.36-34.56 34.56s15.36 34.56 34.56 34.56 34.56-15.36 34.56-34.56-15.36-34.56-34.56-34.56z" fill="#231C1C"></path><path d="M811.52 648.96m-47.36 0a47.36 47.36 0 1 0 94.72 0 47.36 47.36 0 1 0-94.72 0Z" fill="#B8CA43"></path><path d="M811.52 709.12c-33.28 0-60.16-26.88-60.16-60.16s26.88-60.16 60.16-60.16 60.16 26.88 60.16 60.16-26.88 60.16-60.16 60.16z m0-94.72c-19.2 0-34.56 15.36-34.56 34.56s15.36 34.56 34.56 34.56 34.56-15.36 34.56-34.56-15.36-34.56-34.56-34.56z" fill="#231C1C"></path><path d="M380.16 569.6H332.8v-48.64h-64v48.64h-47.36v64H268.8v47.36h64v-47.36h47.36z" fill="#FAC546"></path><path d="M332.8 693.76h-64c-7.68 0-12.8-5.12-12.8-12.8v-34.56h-34.56c-7.68 0-12.8-5.12-12.8-12.8v-64c0-7.68 5.12-12.8 12.8-12.8H256v-34.56c0-7.68 5.12-12.8 12.8-12.8h64c7.68 0 12.8 5.12 12.8 12.8v34.56h34.56c7.68 0 12.8 5.12 12.8 12.8v64c0 7.68-5.12 12.8-12.8 12.8H345.6v34.56c0 6.4-6.4 12.8-12.8 12.8z m-51.2-25.6h38.4v-34.56c0-7.68 5.12-12.8 12.8-12.8h34.56v-38.4H332.8c-7.68 0-12.8-5.12-12.8-12.8v-34.56h-38.4v34.56c0 7.68-5.12 12.8-12.8 12.8h-34.56v38.4H268.8c7.68 0 12.8 5.12 12.8 12.8v34.56z" fill="#231C1C"></path></g></svg>
          </CustomCard>
        </Link>
      </div>
    </>
  );
};

Dashboard.displayName = "Dashboard"

export default Dashboard;
