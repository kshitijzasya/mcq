"use client"
import React, { useEffect, useState } from "react";
import {  useSearchParams } from 'next/navigation';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from "@/app/dashboard";
import GuestLayout from "@/components/Layouts/GuestLayout";
import Ecommerce from "@/components/Dashboard/E-commerce";
import AuthForm from "@/app/auth/signin/form"

import IsAuthenticated from "./IsAuthenticated"
import routes from "@/helpers/routes"

function Entry({children}) {
    const searchParams = useSearchParams(); 
    const type: string|null = searchParams.get('type')

    const [pathname, setPathname] = useState<string>("");

    const Authenticated = IsAuthenticated();

    useEffect(() => {
        // Perform any side-effects that depend on the window object here
        // Example: fetching data, interacting with DOM elements, etc.
        if (typeof window !== "undefined") {
            setPathname(window.location.pathname)
        }
    }, []);

    //Cases for authenticated routes
    if(!Authenticated){
        //Check if routes are in valid unprotected routes
        if (routes.inProtecedRoutes(pathname)) {
            return (
                <>
                {children}
                </>
            )
        }
        return <AuthForm />
    }


    //Cases for authenticated users
    if (children) {
        return <>{children}</>
    }

    if (type === 'full'){
        return (
            <DefaultLayout>
                <Ecommerce />
            </DefaultLayout>
        )
    } else {
        return (
            <GuestLayout showHeader={true}>
                <Dashboard />
            </GuestLayout>
        )
    }
    
}

export default Entry;
