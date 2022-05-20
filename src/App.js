import "./App.css";
import NewPackages from "./components/NewPackages";
import React, { useState } from "react";
import DisributionTeam from "./components/DisributionTeam";

function App() {
  const [page, setPage] = useState(true);

  const changePage = () => {
    page ? setPage(false) : setPage(true);
  };

  return (
    <div style={{ minHeight: "100vh" }} className="App background">
      <div className="d-flex">
        <img src={"./images/dhllogo.jpeg"} alt="" />
        <img
          style={{ height: "50vh" }}
          src={page ? "./images/office.jpg" : "./images/package.jpg"}
          alt=""
        />
      </div>
      {page ? <NewPackages /> : <DisributionTeam />}
      <button onClick={changePage} className="btn btn-danger">
        {page ? "Go Disribution Team" : "Go Package Office"}
      </button>
    </div>
  );
}

export default App;
