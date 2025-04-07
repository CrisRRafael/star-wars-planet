import Image from "next/image";
import { PlanetIdentificationContainer } from "./styles";

export const PlanetIdentification = () => {
  return (
    <PlanetIdentificationContainer>
      <Image
        src="https://cryptospro.com.br/planetas/planeta_0000_tatooine.png"
        alt=""
        width={74}
        height={74}
      />

      <div className="planet-name">
        <p>Planet: </p>
        <h1>Name</h1>
      </div>
    </PlanetIdentificationContainer>
  );
};
