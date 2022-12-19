import React from 'react'
import { useState } from 'react'
import AddTaskForm from './AddTaskForm'


const Header = ({tasks,setTasks} ) => {
    const [show, setShow] = useState(false)
    const [btnStyle,setBtnStyle] = useState({
        bgColor: "purple",
        name:"Show Add Task Bar"
    })
    
    const handleShow =()=>{
        if (show){
            setBtnStyle({
                bgColor: "purple",
                name:"Show Add Task Bar"
            })
        }else{
            setBtnStyle({
                bgColor: "red",
                name:"Close Add Task Bar"
            })
        }
        setShow(!show)
    }

 
  
  return (
    <div className='header'>
        <h1>TASK TRACKER</h1>
        <button 
        onClick={handleShow}
        className='btn'
        style={{backgroundColor:btnStyle.bgColor}}>{btnStyle.name}</button>
        {show && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
    </div>
  )
}

export default Header