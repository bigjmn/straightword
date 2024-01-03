'use client'

import { useState } from 'react'

export const useHints = (hintData: Clue[]) => {
    const [gameHints, setGameHints] = useState(hintData)

    const showHint = (cnum:number):void => {
        const newGH = gameHints.map(gh => gh.clueNumber === cnum ? ({...gh, hintShown: true}) : gh)
        setGameHints(newGH)
    }
    return { gameHints, showHint}


}