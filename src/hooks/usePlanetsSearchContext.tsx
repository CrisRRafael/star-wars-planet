import { useContext } from "react";
import { PlanetSearchContext } from "../context/PlanetSearchContext";

export const usePlanetSearchContext = () => useContext(PlanetSearchContext);
