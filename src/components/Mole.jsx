import { useEffect } from 'react'
import moleImg from '../images/mole.png'

function Mole({ handleClick, setTheMole }) {
    useEffect( () => {
        let randomSecs = Math.round(Math.random() * 8000)
        let timer = setTimeout(()=>{
            setTheMole(false)
        }, randomSecs)

        return () => clearTimeout(timer)
    })
  return (
    <span>
        <img src={moleImg} alt="Mole Image" style={{'width': '15vw'}} onClick={handleClick} />
    </span>
  )
}

export default Mole