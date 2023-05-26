import data from "./data";

const Comments = () =>{
    return <main className="Container">
        <ul  className="Comment-Container">

            {
                data.map((eachComment)=>{
                    const {id , email , name , body} = eachComment;
                    return <li className="comment">
                    <div className="comment-header">
                        <div className="email">{email}</div>
                        <div className="name" > {name} </div>
                    </div>
                    <div className="message">
                    {body}
                </div>
                    </li>
                }) 
            }




            {/* <li className="comment">
                <div className="comment-header">
                    <div className="email">Email@</div>
                    <div className="name">Ravi teja</div>
                </div>
                <div className="message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aperiam?
                </div>
            </li> */}
        </ul>
    </main>
}

export default Comments;