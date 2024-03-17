"use client"
import React from "react";
import {  useSearchParams } from 'next/navigation';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from "@/app/dashboard";
import Ecommerce from "@/components/Dashboard/E-commerce";
import AuthForm from "@/app/auth/signin/form"
import GuestLayout from "@/components/Layouts/GuestLayout";
import IsAuthenticated from "./IsAuthenticated"
import routes from "@/helpers/routes"

function Entry({children}) {
    const searchParams = useSearchParams(); 
    const type: string|null = searchParams.get('type')

    const Authenticated = IsAuthenticated()

    //Cases for authenticated routes
    if(!Authenticated){
        //Check if routes are in valid unprotected routes
        if (routes.inProtecedRoutes(window.location.pathname)) {
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
            <GuestLayout>
                <Dashboard />
            </GuestLayout>
        )
    }
    
}

export default Entry;
