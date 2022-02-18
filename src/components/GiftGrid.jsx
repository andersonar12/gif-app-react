import { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs.js";

import GifGridItem from "./GifGridItem.jsx";

const GiftGrid = ({ category }) => {
  const { data: images, laoding } = useFetchGifs(category);

  return (
    <div>
      <h2>{category}</h2>
      {laoding && <p>Cargando...</p>}
      <div className="row">
        {images.map((img, i) => (
          <GifGridItem key={img.id} img={img} />
        ))}
      </div>
    </div>
  );
};

export default GiftGrid;
