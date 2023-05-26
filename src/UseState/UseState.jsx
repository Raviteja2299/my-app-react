import React, { useState } from "react";

const UseState = () => {
  // const [coun , setCount] = useState(0);

  // const Incr =  (coun) =>{
  //     setCount((pc)=> pc+1);
  // }

  // const Decr = (coun) =>{
  //     setCount((pc)=> pc-1)
  // }

  const details = {
    fName: "Ravi",
    lName: "Teja",
    age: 21,
  };

  const [data, setData] = useState(details);

  const ChangeFName = () => {
    setData({
       ...data,
      fName: "Ram",
      
    })
    console.log(data);
  };

  const ChangeLName = ()=>{
    setData({
        ...data,
        lName :'Jilkara'
    })
  }

  const ChangeAge = () => {
    setData({
        ...data,
        age:data.age+1
    })
  }
  return (
    // <div className="button-header">
    //     <button onClick={Decr}>Decrement</button>
    //     <span> {coun} </span>
    //     <button onClick={Incr}>Increament</button>
    // </div>

    <div>
      <center style={{borderBottom:"2px solid black" , padding:"20px"}}>
        <h1>Hello my firat name is {data.fName}</h1>
        <button  onClick={ChangeFName}>Change First Name</button>

        <h1>Hello my Lastname is {data.lName}</h1>
        <button  onClick={ChangeLName}>Change Last  Name</button>

        <h1>Hello my Lastname is {data.age}</h1>
        <button  onClick={ChangeAge}>increame Age</button>
      </center>


    </div>
  );
};

export default UseState;
