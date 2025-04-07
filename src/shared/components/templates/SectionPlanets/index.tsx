import { StarWarsPlanetSearchLogo } from "../../atoms/StarWarsPlanetSearchLogo";
import { SectionPlanetsContainer } from "./styles";
import { ReactNode } from "react";
type SectionPlanetsProps = {
  children: ReactNode;
};

const SectionPlanets = ({ children }: SectionPlanetsProps) => {
  return (
    <SectionPlanetsContainer>
      <StarWarsPlanetSearchLogo />

      {children}
    </SectionPlanetsContainer>
  );
};

export default SectionPlanets;
