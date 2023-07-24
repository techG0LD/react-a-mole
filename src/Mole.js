import {useEffect} from 'react'
import moleImg from './mole.png'

export default function Mole (props){
    
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() *10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        },randSeconds)
        return (
            function (){
                clearTimeout(timer)
            }
        )
    })
    
    
    
    return (
        <div>
            <img style={{'width':'30vw'}} src={moleImg} onClick={props.handleClick}/>
        </div>
    )
}

