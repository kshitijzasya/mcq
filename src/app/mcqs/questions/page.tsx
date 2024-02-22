"use client"
import React, {useEffect} from "react"
import BasicLayout from "@/components/Layouts/BasicLayout";
import mcquest from "../../../../public/mcqs/nextjs.json"
import fsPromises from 'fs/promises';
import path from 'path'


const Questions = () => {
    return (
        <BasicLayout>
                {
                    mcquest
                }
        </BasicLayout>
    )
}


export default Questions;