import { Temperature } from "@/src/shared/assets/Temperature";
import { DetailPlanet } from "../../atoms/DetailPlanet";
import { PlanetIdentification } from "../../atoms/PlanetIdentification";
import { DetailsPlanetHeaderContainer } from "./styles";
import { Mountain } from "@/src/shared/assets/Mountain";
import { People } from "@/src/shared/assets/People";

const DetailsPlanetHeader = () => {
  return (
    <DetailsPlanetHeaderContainer>
      <PlanetIdentification />
      <div className="details-planet">
        <DetailPlanet icon={<Temperature />} title="Climate" value="teste" />
        <DetailPlanet icon={<Mountain />} title="Terrain" value="teste" />
        <DetailPlanet icon={<People />} title="Population" value="teste" />
      </div>
    </DetailsPlanetHeaderContainer>
  );
};

export default DetailsPlanetHeader;
