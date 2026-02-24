// App.jsx
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingContext } from "./LoadingContext";
import Navbar from "./Navbar";
import Shop from "./pages/Shop";
import About from "./pages/About"

const App = () => {
  const { loading } = useContext(LoadingContext);

  return (
    <>
      <Navbar />

      {loading && <h2>Loading...</h2>}

      {!loading && (
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      )}
    </>
  );
};

export default App;