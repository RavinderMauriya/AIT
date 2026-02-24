
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "./LoadingContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { setLoading } = useContext(LoadingContext);

  const handleClick = (path) => {
    setLoading(true);

    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <button onClick={() => handleClick("/")}>Home</button>
      <button onClick={() => handleClick("/about")}>About</button>
    </>
  );
};

export default Navbar;