


let data = [
  {
    title: "Manifest",
    img_url:
      "https://occ-0-4619-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbMrQ93yuhpL5LITyev8yVgyRiqdF8maKzQbk4CX7tOPN_tidEVSgriNku_RON0maXtrwK8nkIraybeNCdvYQViNFWGi8K_fjszvjC7_PqbZAfPUkibY38tdgEXVSpqWbKqI.jpg?r=2f1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad commodi voluptate doloribus earum maxime, vero eius illum vitae quidem vel praesentium magnam debitis iusto adipisci hic ut aspernatur sapiente nemo.",
  },
  {
    title: "The Worst Witch",
    img_url:
      "https://occ-0-4619-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeDJwxtCkx2x4Qnq4pkETr-1xKLoG8EPslqLD4Q0ANgq4RLX5uYGugMi3vKSiQ5JBORdaWOjpMHqHHJNZtOco899vwg0oFvdOW7vY_byUuR8dibTIzvXqNdN8PKpKWvubzCt.jpg?r=208",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad commodi voluptate doloribus earum maxime, vero eius illum vitae quidem vel praesentium magnam debitis iusto adipisci hic ut aspernatur sapiente nemo.",
  },

  {
    title: "Manifest",
    img_url:
      "https://occ-0-4619-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbMrQ93yuhpL5LITyev8yVgyRiqdF8maKzQbk4CX7tOPN_tidEVSgriNku_RON0maXtrwK8nkIraybeNCdvYQViNFWGi8K_fjszvjC7_PqbZAfPUkibY38tdgEXVSpqWbKqI.jpg?r=2f1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad commodi voluptate doloribus earum maxime, vero eius illum vitae quidem vel praesentium magnam debitis iusto adipisci hic ut aspernatur sapiente nemo.",
  },
];

const Movies = () => {
  // let new_data = data.map((obj)=>{
  //     return <article>
  //         <h1>{obj.title}</h1>
  //         <img src={obj.img_url} alt= {obj.title} />
  //         <p>
  //             {obj.description}
  //         </p>
  //     </article>
  // })

  return (
    <section>
      {data.map((obj , index) => {
     
        return (
          <Movie
            key={index}
            title={obj.title}
            img_url={obj.img_url}
            description={obj.description}
          />
        );
      })}
    </section>  
  );
};

const Movie = ({ title, img_url, description }) => {
  return (
    <article>
      <img src={img_url || "NO Image"} alt="Manifest" />
      <h1 >{title || "Default title"} </h1>
      <p>{description || "No description"}</p>
    </article>
  );
};

export default Movies;
