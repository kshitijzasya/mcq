"use client"
import React, {useState, useEffect} from "react";
import { useRouter } from 'next/navigation';
import SelectGroupCustom from "@/components/SelectGroup/SelectGroupCustom";
import helpers from "@/helpers/mcq"
import data from "../../../public/mcqs/data.json"
// import useLocalStorage from "@/hooks/useLocalStorage"

interface TagInterface {
    id: number,
    name: string
  }

const McqForm : React.FC = () => {
    const router = useRouter();
    const [tags, setTags] = useState<TagInterface[]>([])
  

    const [selectedTag, setSelectedTag] = useState<string>("")
    const [duration, setDuration] = useState<number>(0)
    const [level, setLevel] = useState<string>("")

    const handleSubmit = e => {
        localStorage.clear();
        e.preventDefault();
        localStorage.setItem("tag", selectedTag)
        localStorage.setItem("duration", duration.toString())
        localStorage.setItem("level", level)
        router.push('/mcqs/test',{
                scroll: false
        })
    }

    useEffect(() => {
      //Setting tags
      if (data.tags.length) {
          setTags(data.tags)
      }
    },[]);

    return (
        <>
            <form action="#" onSubmit={e => handleSubmit(e)}>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                        <SelectGroupCustom label={'Tag'} options={tags as any[]} onSelect={(v: any) => setSelectedTag(v)}/>
                    </div>
                    {/* <div className="w-full sm:w-1/2">
                        <SelectGroupCustom  label={'category'} options={categories} onSelect={selectCategory}/>
                    </div> */}
                    <div className="w-full sm:w-1/2">
                        <SelectGroupCustom  label={'Difficulty'} options={data.difficulty as any[]} onSelect={(v: any) => setLevel(v)}/>
                    </div>
                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                        <SelectGroupCustom  label={'Duration (min)'} options={data.durations as any[]} onSelect={(d: any) => setDuration(parseInt(d) * 2)}/>
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

McqForm.displayName = 'McqForm';

export default McqForm;