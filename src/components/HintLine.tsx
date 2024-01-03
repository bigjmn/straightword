'use client'
import { useState } from 'react'

interface HintLineProps{
    hint: Clue;
    showHint: (cnum: number) => void
}
export default function HintLine({hint, showHint}:HintLineProps){
    const handleClick = () => {
        showHint(hint.clueNumber)
    }

    return (
        <div className='flex mb-2' style={{color: hint.clueColor}}>
            <span className='mr-4'>{hint.clueNumber}</span>
            {hint.hintShown ? (
                <span>{hint.hintString}</span>
            ) : (
                <span className='cursor-pointer' onClick={handleClick}><i>Click to Use Hint </i></span>
            )}
        </div>
    )

}