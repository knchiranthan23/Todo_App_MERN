import React, { useState } from 'react'
import { useEffect } from 'react';
export const DuplicateTodoApp = () => {
    const [data, setData] = useState('');
    const [tasks, setTasks] = useState([])
    const [editid, setEditid] = useState(null)
    const [edittext, setEdittext] = useState('')

    const handleSumit =(e)=>{
      e.preventDefault();
      setTasks(prev=>[...prev,{
        id:Date.now(),
        text:data,
        completed:false
      }])
      setData('');
    }

    const deleteTasks = (del)=>{
      setTasks(tasks.filter((curr) => curr.id !== del.id));
    }

    const handleEdit = (ed)=>{
        setEditid(ed.id);
        setEdittext(ed.text)  
    }

    const handleSave = ()=>{
      setTasks(tasks.map(task=>task.id === editid
        ?{...task,text:edittext}
        : task
      ))
      setEditid(null)
      setEdittext("");
  }

  const handleComplete = (val)=>{
     setTasks(tasks.map(obj=>obj.id === val.id ?{...obj,completed:!obj.completed}:obj))
  }
    useEffect(() => {
    console.log(tasks);
     }, [tasks]);
  return (
    <div className='min-h-screen bg-black text-white'>
        <h1 className='text-6xl font-extrabold border-b-2 flex flex-col items-center'>TODO LIST</h1>
        <form onSubmit={handleSumit} className='p-5 flex flex-col items-center w-full'>
            <input className='p-3 border-2 mt-2 w-1/2' 
            type="text" 
            placeholder='add item....'
            value={data}
            onChange={(e)=>{setData(e.target.value)}}
            />
            <button className='bg-green-700 rounded border-2 border-white px-7 py-3 mt-4'>Add</button>
        </form>
        <div className='min-h-screen p-5 flex flex-col items-center gap-5'>
            <p className='text-white  text-3xl font-bold'>Tasks : {tasks.length}</p>
            <p className='font-semibold text-xl'>Active :{tasks.filter(obj=>(obj.completed===false)).length}</p>
            <p className='font-semibold text-xl'>Finished :{tasks.filter(obj=>(obj.completed===true)).length}</p>
            {tasks.map((val)=>{
               return <div key={val.id} className='h-25 w-1/2 rounded-2xl border-1 border-white bg-gray-300 p-5 flex justify-between'>
                {editid === val.id?(
                  <> 
                   <input className='text-black bg-gray-300 rounded p-5' value={edittext} 
                   onChange={(e)=>setEdittext(e.target.value)}/>
                   <div className=' px-5 py-3 flex items-start gap-4'>
                     <button onClick={handleSave} className='bg-blue-900 rounded border-1 h-10 w-20 '>Save</button>
                     <button onClick={()=>{deleteTasks(val)}} className='bg-red-800 px-6 rounded h-10 border-1 border-white'>Delete</button>
                 </div>
                  </>
                ):(
                <>
                  <div>
                    <input type="checkbox" checked={val.completed} onChange={()=>{handleComplete(val)}}/>
                    <p className='font-medium text-m text-black'>{val.text}</p>
                    <p className='text-sm font-semibold text-black'>{val.completed ? "Complete":"Incomplete"}</p>
                  </div>
                  <div className=' px-5 py-3 flex items-start gap-4'>
                    <button onClick={()=>{handleEdit(val)}} className='bg-blue-900 rounded border-1 h-10 w-20 '>Edit</button>
                    <button onClick={()=>{deleteTasks(val)}} className='bg-red-800 px-6 rounded h-10 border-1 border-white'>Delete</button>
                  </div> 
                </>
                )}
              </div>
            })}
        </div>
    </div>
  )
}
export default DuplicateTodoApp;