import Image from "next/image";
import { SearchPlanetsContent, WrapperSearchPlanet } from "./styles";

import PlanetImageSearch from "../../../assets/PlanetImageSearch.png";
import { InputSearch } from "../../atoms/InputSearch";
import FiltersPlanets from "../../molecules/FiltersPlanets";
import spaceship5 from "../../../assets/spaceship5.png";

export const SearchPlanets = () => {
  return (
    <WrapperSearchPlanet>
      <Image src={PlanetImageSearch} alt="planet" />
      <div className="wrapper-spaceship">
        <Image src={spaceship5} alt="spaceship" />
      </div>
      <SearchPlanetsContent>
        <p className="title-planet-search">
          Discover all the information about Planets of the Star Wars Saga
        </p>
        <InputSearch />
        <FiltersPlanets />
      </SearchPlanetsContent>
    </WrapperSearchPlanet>
  );
};
