'use client'

import { useRef, forwardRef, useEffect } from 'react'

type IInputProps = {
    label: string;
  };
  
interface LetterBoxProps{
    letter: string;
    idx: number;
    currIndex: number|null;
    setCurrIndex: (ci:number)=>void;
    setLet: (letIdx:number, newVal:string)=>void
}

export default function LetterBox({letter, idx, currIndex, setCurrIndex, setLet}: LetterBoxProps){
    const ref = useRef<HTMLInputElement>(null);

    const handleChange = (e:any) => {
        console.log(e)
        setLet(idx, e.target.value)
        console.log(e.target.value)
    }
    const handleClick = () => {
        setCurrIndex(idx)
    }
    useEffect(() => {
        console.log(currIndex)
        if (!ref.current) return
        if (currIndex === idx){
            console.log(ref.current.value)
            ref.current.focus()
        } else {
            ref.current.blur()
        }
    }, [currIndex])

    return (
        <div onClick={handleClick} className='w-8 aspect-square relative border rounded m-1 cursor-pointer flex justify-center items-center'>
            <input type="text" maxLength={1} className='absolute invisible' ref={ref} value={letter} onChange={handleChange} />
            <h2 className='text-lg'>{letter}</h2>

        </div>
    )
}
