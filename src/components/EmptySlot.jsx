import { useEffect } from 'react'
import moleHill from '../images/molehill.png'

function EmptySlot({ setTheMole }) {
    useEffect(() => {
        let randomSecs = Math.round(Math.random() * 3000)
        let timer = setTimeout(()=>{
            setTheMole(true)
        },  randomSecs)

        return () => clearTimeout(timer)
    })
  return (
    <span>
        <img src={moleHill} alt="Mole Image" style={{'width': '15vw'}}/>
    </span>
  )
}

export default EmptySlot