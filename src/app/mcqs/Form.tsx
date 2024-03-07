"use client"
import React, {useState, useEffect} from "react";
import { useRouter } from 'next/navigation';
import SelectGroupCustom from "@/components/SelectGroup/SelectGroupCustom";
import helpers from "@/helpers/mcq"
import useLocalStorage from "@/hooks/useLocalStorage"

const allLevels:  Array<{name: string}> = [
    {name: "easy"},
    {name: "medium"},
    {name: "hard"}
]

const durations: Array<{name: string}> = [
    {name: "10"},
    {name: "20"},
    {name: "30"}
]

export default function() {
    const router = useRouter();
    const [tags, setTags] = useState([])
    const [selectedTag, setSelectedTag] = useState<string>("")
    const [duration, setDuration] = useState<string>("")
    const [level, setLevel] = useState<string>("")

    const handleSubmit = e => {
        localStorage.clear();
        e.preventDefault();
        // useLocalStorage("tag", selectedTag)
        // useLocalStorage("duration", duration)
        // useLocalStorage("level", level)
        localStorage.setItem("tag", selectedTag)
        localStorage.setItem("duration", duration)
        localStorage.setItem("level", level)
        router.push('/mcqs/test',{
                scroll: false
        })
    }

    useEffect(_ => {
        Promise.allSettled([
            helpers.tags(), 
            // helpers.categories()
        ])
            .then((res) => ({
                'tags':  res[0]
            }))
            .then(result => {
                if (result.tags.status === "fulfilled") {
                    setTags(result.tags.value)
                }
            })
    },[]);

    return (
        <>
            <form action="#" onSubmit={e => handleSubmit(e)}>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                        <SelectGroupCustom label={'Tag'} options={tags} onSelect={v => setSelectedTag(v)}/>
                    </div>
                    {/* <div className="w-full sm:w-1/2">
                        <SelectGroupCustom  label={'category'} options={categories} onSelect={selectCategory}/>
                    </div> */}
                    <div className="w-full sm:w-1/2">
                        <SelectGroupCustom  label={'Difficulty'} options={allLevels} onSelect={v => setLevel(v)}/>
                    </div>
                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                            <SelectGroupCustom  label={'Duration (min)'} options={durations} onSelect={d => setDuration(d)}/>
                        </div>
                  </div>


                  <div className="flex justify-end gap-4.5">
                    {/* <button
                      className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Cancel
                    </button> */}
                    <button
                      className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Proceed
                    </button>
                  </div>
                </form>
        </>
    )
}