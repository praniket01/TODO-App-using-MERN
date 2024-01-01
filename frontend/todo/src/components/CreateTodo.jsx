import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

return(
    <div>
        <input style={{
            padding : 10,
            margin : 10
        }} 
        onChange={(e)=>{
            setTitle(e.target.value)
        }}
        placeholder="Title"></input><br />
        <input 
        style={{
            padding : 10,
            margin : 10
        }}
        onChange={(e)=>{
            setDescription(e.target.value)
        }}
        placeholder="Description"></input><br />
        <button 
        style={{
            padding : 10,
            margin : 10
        }} 
        onClick={async()=>{
            await fetch("http://localhost:3000/todo",{
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "content-type" : "application/json"
                }
            })
            .then(async (res) => {
                const json = await res.json();
                alert("Todo Added");
              })
              
            
            
        }}
        >Add Todo</button>
    </div>
)
}