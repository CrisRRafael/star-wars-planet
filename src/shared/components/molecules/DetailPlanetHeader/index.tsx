import { Temperature } from "@/src/shared/assets/Temperature";
import { DetailPlanet } from "../../atoms/DetailPlanet";
import { PlanetIdentification } from "../../atoms/PlanetIdentification";
import { DetailsPlanetHeaderContainer } from "./styles";
import { Mountain } from "@/src/shared/assets/Mountain";
import { People } from "@/src/shared/assets/People";
import { usePlanetSearchContext } from "@/src/hooks/usePlanetsSearchContext";

const DetailsPlanetHeader = () => {
  const { planet } = usePlanetSearchContext();

  return (
    <DetailsPlanetHeaderContainer>
      <PlanetIdentification />
      <div className="details-planet">
        <DetailPlanet
          icon={<Temperature />}
          title="Climate"
          value={planet?.climate}
        />
        <DetailPlanet
          icon={<Mountain />}
          title="Terrain"
          value={planet?.terrain}
        />
        <DetailPlanet
          icon={<People />}
          title="Population"
          value={planet?.population}
        />
      </div>
    </DetailsPlanetHeaderContainer>
  );
};

export default DetailsPlanetHeader;
