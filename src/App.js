import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
  const[store,setStore]=useState([])
  const[todoperpage,setToDoPerPage]=useState(10)
  const[currentpage,setcurrentpage]=useState(1)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(res=>res.json())
    .then(data=>setStore(data))
  
  },[])
  console.log(store)

  const noOfTotalPages=Math.ceil(store.length/todoperpage)
  const pages=[...Array(noOfTotalPages+1).keys()].slice(1);

  const indexoflasttodo=currentpage*todoperpage
  const indexoffirsttodo=indexoflasttodo-todoperpage
  const visible=store.slice(indexoffirsttodo,indexoflasttodo)
  
  console.log(pages)

  function HandlePrevious(){
    if(currentpage!==1){
      setcurrentpage(currentpage-1)
    }
  }
  function HandleNext(){
    if(currentpage!==noOfTotalPages){
      setcurrentpage(currentpage+1)
    }
  }
  return (
    <div>
     <div>
       <select onChange={(e)=>setToDoPerPage(e.target.value)}>
         <option value="10">10</option>
         <option value="30">30</option>
         <option value="50">50</option>
       </select>
       </div>
     {visible.map((task)=>(
       <>
       <div key={task.id}>
         <p>{task.id}</p>
         <p>{task.title}</p>
       </div>
      
       </>
     ))}
     <span onClick={HandlePrevious}>pre</span>
     <p>
      {pages.map((page)=>(
        <>
        <span key={page} 
        className={`${currentpage===page?"active":""}`}
        onClick={()=>setcurrentpage(page)}>{`${page} |`}</span>
        </>
      ))}
      </p>
      <span onClick={HandleNext}>next</span>
    </div>
  );
}
