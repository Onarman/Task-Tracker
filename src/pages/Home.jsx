import React,{useState} from 'react'
import Header from '../components/Header'
import ShowTasks from '../components/ShowTasks'
import data from "../helper/starterData";


const Home = () => {
    const [tasks, setTasks] = useState(data)
    console.log(tasks);
  return (
    <div>
       <Header tasks={tasks} setTasks={setTasks} /> 
       <ShowTasks tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default Home