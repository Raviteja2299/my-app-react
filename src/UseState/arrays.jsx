import { useState } from "react";

const items = [
  { id: 1, productName: "Product 1", price: 10.99 },
  { id: 2, productName: "Product 2", price: 19.99 },
  { id: 3, productName: "Product 3", price: 5.99 },
  { id: 4, productName: "Product 4", price: 7.99 },
  { id: 5, productName: "Product 5", price: 14.99 },
];




const Arrays = () => {
    const [data,setData] = useState(items);

    const DeleteItem = (id) => {
        
        const newList = data.filter((obj)=>{
          return obj.id !== id;
        })
        setData(newList)
        console.log(newList);
      };
    
  return (
    <div>
      <center>
        <ul>
          {data.map((obj) => {
            const {id , productName , price} = obj;
            return (
              <div key={id}
                
                style={{
                  border: "2px solid black",
                  margin: "5px",
                  padding: "10px",
                }}
              > 
                <li >{id}</li>
                <li>Name = {productName} </li>
                <li>Price = {price} </li>
                <button className="showbtn" onClick={() => DeleteItem(id)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </center>
    </div>
  );
};



export default Arrays;
