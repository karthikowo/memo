import React,{useState} from "react";

function CreateArea(props) {

  const [note,setNote] = useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const value = event.target.value;
    const name = event.target.name;

    // setNote((prevValue)=>{
    //   if(name==="title"){
    //     return{title:value,content:prevValue.content}
    //   }
    //   else if(name==="content"){
    //     return{title:prevValue.title,content:value}
    //   }
    // });

    setNote((prevValue)=>{
      return{
        ...prevValue,
      [name]:value
      }
    });
  }

  function handleSubmit(event){
    props.onAdd(note);
    event.preventDefault();
    setNote({title:"",content:""});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
        <textarea 
        name="content"
        placeholder="Take a note..."
        rows="3" 
        value={note.content}
        onChange={handleChange} 
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
