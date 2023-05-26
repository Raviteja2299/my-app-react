

const Items = () =>{
    return (
        <>
        <section>
            <Images/>
            <Title/>
        </section>
        <section>
            <Images/>
            <Title/>
        </section>
        <section>
            <Images/>
            <Title/>
        </section>
        </>
    )
}
// E:\web dev\React\my-app\src\Images\stranger_things.jpg
const Images = () =>{
    return ( 
    <img src="https://occ-0-4619-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbMrQ93yuhpL5LITyev8yVgyRiqdF8maKzQbk4CX7tOPN_tidEVSgriNku_RON0maXtrwK8nkIraybeNCdvYQViNFWGi8K_fjszvjC7_PqbZAfPUkibY38tdgEXVSpqWbKqI.jpg?r=2f1" alt="Stranger Things" />
    );

}

const Title = () =>{
    const styles = {
        heading : {
            color :"red",
            fontFamily:"consolas"
        }

    } 
    return <h1 style={styles.heading}>Stranger Things</h1>
}


export default Items;