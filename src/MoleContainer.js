import Mole from './Mole'
import EmptySlot from './EmptySlot'
 import {useState} from 'react'

function MoleContainer(props){
    let [theMole,setTheMole] = useState(false)

    let handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick}/> : <EmptySlot toggle={setTheMole}/> 

    return(
        <div style={{'display': 'inline-block', 'width': "30vw"}}>
            {displayMole}
        </div>
    )
}
 
export default MoleContainer