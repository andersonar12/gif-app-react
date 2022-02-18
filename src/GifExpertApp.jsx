import React, { useState } from "react";
import AddCategory from "./components/AddCategory.jsx";
import GiftGrid from "./components/GiftGrid.jsx";
import Navbar from "./components/Navbar.jsx";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {categories.map((c) => {
              return <GiftGrid category={c} key={c} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GifExpertApp;
