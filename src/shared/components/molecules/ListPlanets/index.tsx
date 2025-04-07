import { usePlanetSearchContext } from "@/src/hooks/usePlanetsSearchContext";
import { Planet } from "../../atoms/InputSearch";
import SingleResult from "../../atoms/SingleResult";
import { ContainerListPlanets } from "./styles";
import CircularLoader from "../../atoms/CircularLoader";

type PlanetProps = {
  planets: Planet[];
};

const ListPlanets = ({ planets }: PlanetProps) => {
  const { loading } = usePlanetSearchContext();

  return (
    <ContainerListPlanets>
      {loading ? (
        <div className="circular-loader">
          <CircularLoader />
        </div>
      ) : planets.length > 0 ? (
        planets.map((planet) => (
          <SingleResult key={planet.name} planet={planet} />
        ))
      ) : (
        <p className="not-found">Planets not found</p>
      )}
    </ContainerListPlanets>
  );
};

export default ListPlanets;
