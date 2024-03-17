"use client"
import React, {useState, useEffect} from "react";
import { useRouter } from 'next/navigation';
import SelectGroupCustom from "@/components/SelectGroup/SelectGroupCustom";
// import helpers from "@/helpers/mcq"
import data from "../../../public/mcqs/data.json"
// import useLocalStorage from "@/hooks/useLocalStorage"
import SimpleModal from "@/components/Modals/Simple";
import Crypto from "@/util/crypto"

interface TagInterface {
    id: number,
    name: string
  }

const McqForm : React.FC = () => {
    const router = useRouter();
    //Test related operations
    const [tags, setTags] = useState<TagInterface[]>([])
    const [selectedTag, setSelectedTag] = useState<string>("")
    const [duration, setDuration] = useState<number>(0)
    const [level, setLevel] = useState<string>("")
    //Link related to operations
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [secretLink, setSecretLink] = useState<string>("")
    const [disableButtons, setDisableButtons] = useState<boolean>(true)

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

    const closeModal = () => {
      setSecretLink('')
      setOpenModal(false)
    }

    const GenerateTestLink = (e) => {
      e.preventDefault()
      let cipherText = (new Crypto).encryptThis(`tags=${selectedTag}&duration=${duration.toString()}&level=${level}`);
      let url = window.location.href;
      url += `/link/?${cipherText}`
      setSecretLink(url)
    }

    const copyToClipboard = () => {
      navigator.clipboard.writeText(secretLink)
        .then(() => {
          closeModal()
          console.log('text copied to clipboard')
        })
    }

    useEffect(() => {
        setOpenModal( secretLink.length >  0)
    }, [secretLink])

    useEffect(() => {
        setDisableButtons((!selectedTag.length || duration === 0 || !level.length))
    },  [selectedTag, duration, level])
    useEffect(() => {
      //Setting tags
      if (data.tags.length) {
          setTags(data.tags)
      }
    },[]);

    return (
        <>
          {
            openModal
                &&
            <SimpleModal onClose={e =>{
              setOpenModal(false)
              setSecretLink('')
            }}>
              <div style={{wordWrap: 'break-word', cursor: 'pointer'}} onClick={e => copyToClipboard()}>
                <h2>Click on link to copy</h2>
                <p>
                  {secretLink}
                </p>
              </div>
            </SimpleModal>
          }
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
                    <button
                      className={
                        `inline-flex items-center justify-center rounded-md border border-meta-3 px-2 py-2 text-center font-medium text-meta-3 hover:bg-opacity-90 lg:px-2 xl:px-2 ${disableButtons ? 'cursor-not-allowed' : ''}`
                      }
                      disabled={disableButtons}
                      onClick={e => GenerateTestLink(e)}
                    >
                      Generate link
                    </button>
                    <button
                      className={
                        `flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90 ${disableButtons ? 'cursor-not-allowed' : ''}`
                      }
                      disabled={disableButtons}
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