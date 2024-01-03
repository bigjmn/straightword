'use client'

import { useState, useEffect } from 'react'
import { useGuess } from '@/hooks/useGuess'
import { useHints } from '@/hooks/useHints'
import HintLine from './HintLine'
interface WordProps{
    word: string;
    clueList: Clue[]
}

const getClueLabels = (idx:number, clueList:Clue[]):string => {
    const cl = clueList.filter(x => x.startPos-1 === idx).map(t => `${t.clueNumber}`)
    if (cl.length === 0){
        return ""
    }
    if (cl.length === 1){
        return cl[0]
    }
    return cl.join(',')
}
export default function Word({word, clueList}: WordProps){
    const { wordParts, currIndex, setCurrIndex, handleKeyUp, gameOver } = useGuess(word)
    const { gameHints, showHint } = useHints(clueList)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)
        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])

    

    return (
        <div className='flex flex-col w-screen items-center p-4'>
            <div className='flex w-full'>
                <div className='ml-6 mr-6 mb-6'>
                    <h1 className='text-3xl'>STRAIGHTWORD</h1>
                    <h2>Answers can overlap</h2>
                </div>
                {gameOver && <h1 className='text-green-600 text-3xl bold'>COMPLETE!</h1>}
            </div>
            <div className='flex w-full justify-center mb-6'>
                {wordParts.map((x, i) => (
                    <div key={i} className='flex flex-col items-center'>
                    <div onClick={() => setCurrIndex(i)} style={{border: i === currIndex ? "2px solid blue" : "1px solid"}} className='w-8 aspect-square relative m-1 cursor-pointer flex justify-center items-center'>
                        <h2>{x}</h2>
                    </div>
                    <div>{getClueLabels(i,clueList)}</div>
                    </div>

                ))}
            </div>
            <div className='flex w-full justify-center'>
                <ul>
                    {gameHints.map((gh) => (
                        <HintLine key={gh.clueNumber} hint={gh} showHint={showHint} />
                    ))}
                </ul>
            </div>
        </div>
    )
}