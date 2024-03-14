"use client"
import React from "react";
import { useSearchParams } from 'next/navigation';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from "@/app/dashboard";
import Ecommerce from "@/components/Dashboard/E-commerce";
import AuthForm from "@/app/auth/signin/form"
import { useSession } from "next-auth/react"
import GuestLayout from "@/components/Layouts/GuestLayout";

function Entry() {
    const searchParams = useSearchParams()

    const type: string|null = searchParams.get('type')

    const { data: session, status } = useSession();
    if (status === "loading"){
        return <p>Hang on there...</p>
    }

    if (status === "authenticated"){
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
    
    return <AuthForm />
}

export default Entry;
