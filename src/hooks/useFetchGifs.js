import { useEffect, useState } from "react";
import getGifs from "../services/getGifs.js";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    laoding: true,
  });

  /* El useEffect se dispara cada vez que se reenderiza el componente similar al ngOnInit() en Angular y el OnMounted() en Vue*/
  useEffect(() => {
    getGifs(category).then((gifs) =>
      setState({
        data: gifs,
        laoding: false,
      })
    );
  }, [category]); //Debemos usar los [] para que la petición sólo se ejecute cuando el componente se monte. De lo contrario se ejecutaría en cada render. Si ponemos una variable de estado dentro de los [], la petición se ejecutárá cada vez que esa variable cambie.
  /* el useEffect para ser llamdo una sola vez, hay que pasarle un  array vacio de dependencias  */

  return state;
};
