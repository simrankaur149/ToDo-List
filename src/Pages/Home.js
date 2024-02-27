import React, { useState } from 'react'


const Home = () => {
  const[name, setName] = useState(" ");
  const[course, setCourse] = useState(" ");
  const [mainTask, setMainTask] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMainTask([...mainTask,{name,course}]);
    console.log(mainTask);
    setName("");
    setCourse("");
}

const deleteHandle = (i)=>{
  let copyTask = [...mainTask]
  copyTask.splice(i,1)
  setMainTask(copyTask);
}

let renderTask = <h2>No Task Available</h2>

if(mainTask.length > 0){
  renderTask = mainTask.map((t,i)=>{
    return (
    <>
    <li className='flex justify-between items-center'>
      <div className='flex items-center justify-between w-full'>
        <h3 className='text-1xl font-normal capitalize p-2'>{t.name}</h3>
        <p className='text-1xl  font-normal  capitalize'>{t.course}</p>
        <button className='p-2 m-2 bg-red-700 rounded-lg '
        onClick={()=>{
          deleteHandle(i);
        }}
        >Delete</button>
      </div>
    </li>
    </>
    );
});

}


  

  return (
    <>
    <h1 className='text-4xl py-6 text-center'> Organize Your Day with To-Do List Manager</h1>
    
    <div className='flex justify-center flex-col items-center my-1 p-4'>
    <h2 className='text-3xl font-bold py-4 capitalize'>ToDo List </h2>



    <form onSubmit={handleSubmit}>
      <input className='border-black border-2 p-2 rounded-lg mx-4' type='text' 
      value={name}
      onChange={(e)=>{
        setName(e.target.value)
        console.log(name)
      }}
      placeholder='Name'/>
      <input className='border-black border-2 p-2 rounded-lg mx-4' type='text' 
      value={course}
      onChange={(e)=>{
        setCourse(e.target.value);
        console.log(course)
      }}

      placeholder='Description'/>
      <button className='bg-zinc-700 text-white py-2 px-3 rounded-lg '>Add Task</button>
    </form>
    <hr/>
    <h3 className='my-5 bg-zinc-700 w-screen p-5 text-white text-1xl font-bold'>
      {renderTask}
    </h3>
    </div>
    </>
  )
}


export default Home
