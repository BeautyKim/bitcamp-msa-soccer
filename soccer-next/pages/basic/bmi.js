import React, {useState} from "react";

export default function Bmi(){
    const[inputs, setInputs] = useState({})
    const[result, setResult] = useState('')
    const{ name, height, weight}= inputs;

     const handleChange=(e)=>{
        e.preventDefault()
    
         setInputs({
             ...inputs, [name]: value
         })
     }

        const handleClick = (e)=>{
            e.preventDefault()

        }
        
    return(<>
        <form>
        <h1>BMI 폼</h1>
    

    <div>
        <label htmlFor=""><b>name</b></label>
            <input type="text" name="name" onChange={handleChange}/><br/>

        <label htmlFor=""><b>height</b></label>
            <input type="text" name="height" onChange={handleChange}/><br/>

        <label htmlFor=""><b>weight</b></label>
            <input type="text" name="weight" onChange={handleChange}/><br/>

            <button onClick={handleClick}>BMI체크</button>


    </div>
    </form>
    <div>결과: {result}</div>

    </>)
}