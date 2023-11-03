import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Arsen");
  const [age, setAge] = useState(30);

  const handleClick = () => {
    setName("Sen");
    setAge(25 + 1);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} old.
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
