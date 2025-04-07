import SectionPlanets from "@/src/shared/components/templates/SectionPlanets";
import { PagePlanetDetailsContainer } from "./styles";
import PlanetInfoDetails from "@/src/shared/components/organisms/PlanetInfoDetails";

const PlanetDetails = () => {
  return (
    <PagePlanetDetailsContainer>
      <SectionPlanets>
        <PlanetInfoDetails />
      </SectionPlanets>
    </PagePlanetDetailsContainer>
  );
};

export default PlanetDetails;
