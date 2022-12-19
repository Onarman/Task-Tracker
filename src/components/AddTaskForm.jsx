import React,{useState} from 'react'

const AddTaskForm = ({tasks,setTasks}) => {
   const [task, setTask] = useState("")
   const [day, setDay] = useState("")
   
   const handleSubmit =(e)=>{
    e.preventDefault();
    const id = new Date().getTime()
    const newTask = {id:id,task:task,day:day,isDone:false}
    setTasks([...tasks,newTask])
    setDay("")
    setTask("")
   } 
  return (
    <div>
        <form onSubmit={handleSubmit}  >
            <div className='form-control'>
                <label htmlFor="task">Task</label>
                <input 
                type="text"
                id='task'
                name='task'
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                 />
            </div>
            <div className='form-control'>
                <label htmlFor="task">Day&Time</label>
                <input 
                type="date"
                id='day'
                name='day'
                value={day}
                onChange={(e)=>setDay(e.target.value)}
                />
            </div>
            <div >
                <button 
                className='btn btn-submit' type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddTaskForm