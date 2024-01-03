import Image from 'next/image'
import Word from '@/components/Word'
import { allClues } from '@/assets/constants'
const sampword:string = "DREIDELBARTOTALAMO"
export default function Home() {
  return (
    <main>
      <Word word={sampword} clueList={allClues}/>
    </main>
  )
}
