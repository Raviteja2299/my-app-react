const user = {
    name :"ravi",
    age:20
}

const Demo = () =>{
    return (
        <section>
            <NestComp/>
            <NestComp/>
            <NestComp/>
        </section>
    )
}

const NestComp = () =>{
    return(
        <section>
        <h1>Nested component </h1>
        <h1>Hello i'm {user.name}</h1>
        </section>
    )
}


export default Demo;