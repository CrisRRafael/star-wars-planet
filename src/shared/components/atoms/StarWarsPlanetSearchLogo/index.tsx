import StarWarsTitle from "@/src/shared/assets/StarWarsTitle.png";

import { PlanetSearchLogoContainer } from "./styles";
import Image from "next/image";

export const StarWarsPlanetSearchLogo = () => {
  return (
    <PlanetSearchLogoContainer>
      <Image src={StarWarsTitle} alt="logo Star Wars title " />
    </PlanetSearchLogoContainer>
  );
};
