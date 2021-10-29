import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Travel Amigo</h1>
      <h3>Find the perfect buddy to travel with!</h3>
      <Link to="/login">
        <button>Log in</button>
      </Link>
    </div>
  );
};

export default Landing;
