import { FilterIcon } from "@/src/shared/assets/FilterIcon";
import { ArrowDown } from "@/src/shared/assets/ArrowDown";
import { ButtonFilter, FiltersPlanetsContainer } from "./styles";
import { usePlanetSearchContext } from "@/src/hooks/usePlanetsSearchContext";

const FiltersPlanets = () => {
  const { changeSearchType, searchType } = usePlanetSearchContext();

  return (
    <FiltersPlanetsContainer>
      <div className="title-filters-planet">
        <FilterIcon />
        <p>Filter:</p>
      </div>

      <ButtonFilter
        onClick={() => changeSearchType("name")}
        className={searchType === "name" ? "active" : ""}
      >
        <ArrowDown /> Name
      </ButtonFilter>

      <ButtonFilter
        onClick={() => changeSearchType("population")}
        className={searchType === "population" ? "active" : ""}
      >
        <ArrowDown /> Population
      </ButtonFilter>
    </FiltersPlanetsContainer>
  );
};

export default FiltersPlanets;
