import Image from "next/image";
import { PlanetFallbackCircle, PlanetIdentificationContainer } from "./styles";
import { useState } from "react";
import { Text } from "@/src/shared/assets/Text";
import { Check } from "@/src/shared/assets/Check";
import { usePlanetSearchContext } from "@/src/hooks/usePlanetsSearchContext";

export const PlanetIdentification = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { planet } = usePlanetSearchContext();

  const handleClick = () => {
    setIsEditable(!isEditable);
  };

  const planetImageMap: Record<string, string> = {
    tatooine: "0000",
    naboo: "0001",
    mustafar: "0002",
    kashyyyk: "0003",
    hoth: "0004",
    endor: "0005",
    dagobah: "0006",
    coruscant: "0007",
    bespin: "0008",
    alderaan: "0009",
  };

  const formatPlanetName = (name: string) =>
    name.toLowerCase().replace(/\s+/g, "");

  const planetKey = planet?.name ? formatPlanetName(planet.name) : null;
  const imageNumber = planetKey ? planetImageMap[planetKey] : null;

  const planetImageUrl =
    imageNumber && planetKey
      ? `https://cryptospro.com.br/planetas/planeta_${imageNumber}_${planetKey}.png`
      : "";

  const getPlanetInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <PlanetIdentificationContainer isEditable={isEditable}>
      {planetImageUrl ? (
        <Image
          src={planetImageUrl}
          alt={`Imagem de ${planet?.name}`}
          width={74}
          height={74}
        />
      ) : (
        <PlanetFallbackCircle>
          {planet?.name ? getPlanetInitials(planet.name) : "?"}
        </PlanetFallbackCircle>
      )}

      <div className="planet-name">
        <div className="edit-name">
          <p>Planet: </p>
        </div>
        <div className="section-editable">
          <div className="name-editable" contentEditable={isEditable}>
            {planet?.name}
          </div>
          {isEditable ? (
            <button type="button" onClick={handleClick}>
              <Check />
            </button>
          ) : (
            <button type="button" onClick={handleClick}>
              <Text />
            </button>
          )}
        </div>
      </div>
    </PlanetIdentificationContainer>
  );
};
