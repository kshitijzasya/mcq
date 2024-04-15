"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

type CardDataProp = {
  news: Array<{author: string, content: string, description: string, title: string, url: string, urlToImage: string}>
}


const Card: React.FC<CardDataProp> = (props) => {
    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
        <div className="mb-3 justify-between gap-4 sm:flex">
          <div>
            <h5 className="text-xl font-semibold text-black dark:text-white underline underline-offset-1">
              Top News
            </h5>
          </div>
        </div>
  
        <div className="mb-2 grid max-h-96 overflow-auto">
          
            {
              props.news.map(function(val, key) {
                return (
                  <Link key={key} href={val.url} className="grid grid-cols-3" target="_blank">
                    <img className="" alt={`news-${key}`} src={val.urlToImage} width={200} height={130}/>
                    <h5 className="col-span-2 pl-2" title={val.title}><b>{val.title.substring(0, 70)}...</b></h5>
                  </Link>
                )
              })
            }
        </div>
      </div>
    )
}

export default Card;