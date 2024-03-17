"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image"
import Donate from "./Donate"
import Love from "./Love"
import ContactForm from "./ContactForm";

const PopUpStyle: React.CSSProperties  =  {position: 'absolute', bottom: '55px', zIndex: 100};

const Footer: React.FC = () => {
    const [showCode, setShowCode] = useState<boolean>(false)
    const [showContactForm, setContactForm]= useState<boolean>(false)
    const handleDonate = e => {
        setShowCode(!showCode)
    }

  return (
    <footer className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none sticky bottom-0">
      <div className="flex flex-grow justify-end items-center px-2 py-2 shadow-2 md:px-2 2xl:px-11">

        <div className="flex items-center gap-3 2xsm:gap-7">
        {
                    showCode
                    ?
                    (
                        <div 
                            className="flex flex-col "
                            style={PopUpStyle}
                            >
                            <span className="flex items-center justify-center"><Love />Thanks </span>
                            <span>Scan and pay for my book</span>
                            <Image
                                width={176}
                                height={32}
                                src={"/images/donate/code.png"}
                                alt="Logo"
                                priority
                            />
                        </div>
                    )
                    :
                    ''
                }
                
          <ul className="flex items-center gap-2 2xsm:gap-4">
          <li >
                <span onClick={handleDonate} className="cursor-pointer"><Donate /></span>
                
            </li>
            <li >
                <ContactForm  show={showContactForm} css={PopUpStyle}/>
                <span onClick={e => setContactForm(true)} className="cursor-pointer">Contact Us</span>
            </li>
            <li>
                <span>All Rights reserved with Kshitij Sharma</span>
            </li>
            <li>
                <span>Created @{(new Date).getFullYear()}</span>
            </li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
