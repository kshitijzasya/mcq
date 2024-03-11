"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ECommerce from "@/components/Dashboard/E-commerce";
import AuthForm from "@/app/auth/signin/form"
import { useSession } from "next-auth/react"

function Entry() {
    // const router = useRouter();
    const { data: session, status } = useSession();
    if (status === "loading"){
        return <p>Hang on there...</p>
    }

    if (status === "authenticated"){
        return (
                <DefaultLayout>
                    <ECommerce />
                </DefaultLayout>
        )
    }
    
    return <AuthForm />
}

export default Entry;
