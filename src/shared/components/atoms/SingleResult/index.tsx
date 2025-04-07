import { ContainerSinglePlanet } from "./styles";
import { Planet } from "../../atoms/InputSearch";
import { useRouter } from "next/router";

type PlanetProps = {
  planet: Planet;
};

const SingleResult = ({ planet }: PlanetProps) => {
  const { push } = useRouter();

  const handleClick = () => {
    push(`/planet/${planet.name}`);
  };

  return (
    <ContainerSinglePlanet onClick={handleClick}>
      <div className="planet-data">
        <span>Planet: </span>
        <p>{planet?.name}</p>
      </div>
      <div className="planet-data">
        <span>Population: </span>
        <p>{planet?.population}</p>
      </div>
    </ContainerSinglePlanet>
  );
};

export default SingleResult;
