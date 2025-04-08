import { SearchIcon } from "@/src/shared/assets/SearchIcon";
import {
  ButtonSearch,
  ContainerInputSearch,
  ContentInputSearch,
  Input,
} from "./styles";
import { usePlanetSearchContext } from "@/src/hooks/usePlanetsSearchContext";
import ListPlanets from "../../molecules/ListPlanets";

import { usePlanetsService } from "@/src/hooks/usePlanetsService";
import { useState } from "react";
import { CleanSearch } from "@/src/shared/assets/CleanSearch";

export interface Planet {
  name: string;
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export const InputSearch = () => {
  const { search, changeSearch, loading, changeLoading, searchType } =
    usePlanetSearchContext();
  const { searchPlanetsRequest, searchPlanetsByPopulation } =
    usePlanetsService();

  const [results, setResults] = useState<Planet[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSearch(e.target.value);
  };

  const handleSearch = async () => {
    setShowResults(true);
    changeLoading(true);
    try {
      if (searchType === "name") {
        const response = await searchPlanetsRequest(search);
        setResults(response?.results);
      }
      if (searchType === "population") {
        const response = await searchPlanetsByPopulation(search);

        setResults(response);
      }
    } catch (error) {
      console.error("Erro ao buscar planetas:", error);
    } finally {
      changeLoading(false);
    }
  };

  const handleClear = () => {
    setResults([]);
    setShowResults(false);
    changeSearch("");
  };

  return (
    <ContainerInputSearch>
      <ContentInputSearch>
        <Input
          type={searchType === "population" ? "number" : "text"}
          placeholder="Enter the name in the planet"
          onChange={handleChange}
          value={search}
          onFocus={() => {
            setIsFocused(true);
            setShowResults(false);
          }}
          onBlur={() => setIsFocused(false)}
        />
        {!!search && (
          <div className="clear-search" onClick={handleClear}>
            <CleanSearch />
          </div>
        )}
      </ContentInputSearch>
      {isFocused && !searchType && (
        <span className="alert-filter"> Escolha uma opção de filtro</span>
      )}
      {showResults && <ListPlanets planets={results} />}

      <ButtonSearch
        disabled={!search || loading || !searchType}
        onClick={handleSearch}
      >
        <SearchIcon />
        Search
      </ButtonSearch>
    </ContainerInputSearch>
  );
};
