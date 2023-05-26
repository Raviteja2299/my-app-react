import { useState } from "react";

const Toggle = () => {
    const [showdata, setshowdata] = useState(false);
    const dataHandler = ()=>{
        setshowdata(!showdata)
    }
  return (
    <center>
      <div >
        <button className="showbtn" onClick={dataHandler}>{showdata?"Hide":'Show'}</button>
        <br />
    {
        showdata &&   (
            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi nostrum perferendis 
                aspernatur obcaecati in veniam sint, iste molestiae deserunt Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Voluptatem cum laudantium temporibus eum corrupti itaque 
                modi perspiciatis! Quia, totam dolorum.
            </div>
        )    
        

       }
      </div>
    </center>
  );
};

export default Toggle;
