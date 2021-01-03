import bbq from "../assets/bbq.svg";

const JokeContainer = ({ joke, loaded }) => (
  <div className="joke-container">
    <div className={`joke__content ${loaded ? "joke" : ""}`}>{joke}</div>
    <div className="bbq">
      <img src={bbq} alt="" />
    </div>
  </div>
);

export default JokeContainer;
