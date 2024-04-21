"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

type CardDataProp = {
  // news: Array<{author: string, content: string, description: string, title: string, url: string, urlToImage: string}>
  news: Array<{Source: string, Title: string, URL: string}>
}


const Card: React.FC<CardDataProp> = (props) => {

    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
        <div className="mb-3 justify-between gap-4 sm:flex">
          <div>
            <h5 className="text-xl font-semibold text-black dark:text-white">
              Top Share News
            </h5>
          </div>
        </div>
  
        <div className="mb-2 grid max-h-96 overflow-auto">
          
            {
              props.news.map(function(val, key) {
                return (
                  <Link key={key} href={val.URL} className="grid grid-cols-3 py-2 border-bottom-y-" target="_blank">
                    {/* <img className="max-h-32" alt={`news-${key}`} src={val.urlToImage} width={200} height={130}/> */}
                    <span><b>({val.Source})</b></span>
                    <h5 className="col-span-2 pl-2" title={val.Title}><b>{val.Title.length > 100 ? `${val.Title.substring(0, 100)}...` : val.Title}</b></h5>
                  </Link>
                )
              })
            }
        </div>
      </div>
    )
}

export default Card;