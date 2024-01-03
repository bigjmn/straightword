'use client'
import {useState} from 'react'

export const useGuess = (word:string) => {
    const [wordParts, setWordParts] = useState<string[]>(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""])
    const [currIndex, setCurrIndex] = useState<number|null>(null) 
    const [gameOver, setGameOver] = useState<boolean>(false)

    const handleKeyUp = ({key}:any) => {
        if (currIndex !== null){
            if (key === 'Backspace'){
                const newWordParts = wordParts.map((x, i) => i === currIndex ? "" : x)
                const newIdx = Math.max(currIndex - 1,0)
                setWordParts(newWordParts)
                setCurrIndex(newIdx)

                
            }
            if (/^[A-Za-z]$/.test(key)){
                const newWordParts = wordParts.map((x, i) => i === currIndex ? key.toUpperCase() : x)
                setWordParts(newWordParts)
                if (newWordParts.join('') === word) {
                    setGameOver(true)
                }
                const newFocus = wordParts.findIndex((v, i) => v==="" && i > currIndex)
                const newIdx = newFocus === -1 ? null : newFocus 
                setCurrIndex(newIdx)

            }
            
        }
    }

    return { wordParts, currIndex, setCurrIndex, handleKeyUp, gameOver}

}