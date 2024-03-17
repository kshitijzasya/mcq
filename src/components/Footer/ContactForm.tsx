"use client"
import React from "react"

interface ContactFormProps {
    show: boolean,
    css: React.CSSProperties
}
const ContactForm: React.FC<ContactFormProps> = ({show, css}) => {
    return (
        <>
        {
            show
            ?
            <div className="flex flex-col bg:white dark:bg-dark" style={css}>
                <h2>Shit comming soon...</h2>
            </div> 
            :
            ''
        }
        </>
    )
}

ContactForm.displayName = "ContactForm"

export default ContactForm;