import { useEffect, useState } from "react";

import JokeContainer from "./components/JokeContainer";
import Error from "./components/Error";
import Button from "./components/Button";
// let myHeaders = new Headers();
// myHeaders.append("Accept", "application/json");
// fetch("https://icanhazdadjoke.com/", { headers: myHeaders })
//   .then((resp) => resp.json())
//   .then((json) => console.log(json));

function App() {
  const [joke, setJoke] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
        .then((response) => response.json())
        .then((jsonResponse) => {
          console.log(jsonResponse);
          setLoaded(true);
          setJoke(jsonResponse);
        });
    }
  }, [isLoaded]);

  const handleClick = () => {
    setLoaded(false);
  };

  return (
    <div className="App">
      <div>
        <JokeContainer joke={joke.joke} loaded={isLoaded} />
        <Button onClick={handleClick}>New Joke</Button>
        <cite>Data pulled from https://icanhazdadjoke.com/api</cite>
      </div>
    </div>
  );
}

export default App;
