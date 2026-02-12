import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    const response = await fetch("https://picsum.photos/v2/list?page=2&limit=9");
    const dt = await response.json();
    console.log(dt)
    setdata(dt)
  };

  useEffect(()=>{
    getData()
  },[])
  return (
    <div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginTop: "20px" }}>
        {data.map((item) => (
          <img
            key={item.id}
            src={item.download_url}
            alt={item.author}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
