"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer/index";

 function GuestLayout({
  children,
  showHeader = true
}: {
  children: React.ReactNode;
  showHeader: boolean
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          {
            showHeader && <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          }
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>

          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>

      <Footer />
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}

export default GuestLayout;
