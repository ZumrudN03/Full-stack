import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss"

function AddPage() {
  const [addImg, setAddImg] = useState("");
  const [addName, setAddName] = useState("");
  const [addPrice, setAddPrice] = useState("");
  const navigate = useNavigate()

  function AddFlower() {
    fetch("http://localhost:3100/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
        image: addImg, 
        name: addName, 
        price: addPrice }),
      });
      navigate("/")
  }
  return (
    <div className="addPage">
      <form onSubmit={()=>AddFlower()}>
        <input type="text" placeholder="Add Image URL" onChange={(e)=>setAddImg(e.target.value)} />
        <input type="text" placeholder="Add Name" onChange={(e)=>setAddName(e.target.value)} />
        <input type="text" placeholder="Add Price"  onChange={(e)=>setAddPrice(e.target.value)}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddPage;
