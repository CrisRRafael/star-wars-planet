import SectionPlanets from "@/src/shared/components/templates/SectionPlanets";
import { BackButton, PagePlanetDetailsContainer } from "./styles";
import PlanetInfoDetails from "@/src/shared/components/organisms/PlanetInfoDetails";
import { ArrowLeft } from "@/src/shared/assets/ArrowLeft";
import { useRouter } from "next/router";
import { usePlanetSearchContext } from "@/src/hooks/usePlanetsSearchContext";

const PlanetDetails = () => {
  const router = useRouter();
  const { clearStates } = usePlanetSearchContext();

  function returnToPrevious() {
    clearStates();
    router.back();
  }

  return (
    <PagePlanetDetailsContainer>
      <SectionPlanets>
        <PlanetInfoDetails />
        <div className="section-go-back">
          <BackButton onClick={returnToPrevious}>
            <ArrowLeft />
            Voltar
          </BackButton>
        </div>
      </SectionPlanets>
    </PagePlanetDetailsContainer>
  );
};

export default PlanetDetails;
