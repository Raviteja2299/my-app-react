const Welcome = () => {
  const student = {
    name: "Ravi",
    age: 20,
    college: "Alts",
  };

  function details(std) {
    return `Hello i'm ${std.name}, my age is ${std.age} , i'm form ${std.college} college`;
  }
  return (
    <section>
      <header>
        <h1>Hello</h1>
      </header>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit . Doloremque
        provident voluptatum odio. Sint molestiae aspernatur ipsum deserunt
        accusantium delectus neque.
      </div>
      <h1>Details : {details(student)}</h1>
      <label > User name : </label>
      {/* <input type="text" id="name" placeholder="Enter Name"/> */}
      
    </section>
  );
};

export default Welcome;
