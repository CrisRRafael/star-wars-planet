import { ReactElement } from "react";
import { DetailPlanetContainer } from "./styles";

interface IDetailPlanet {
  icon: ReactElement;
  title: string;
  value: string | undefined;
}

export const DetailPlanet = ({ icon, title, value }: IDetailPlanet) => {
  console.log(value);
  return (
    <DetailPlanetContainer>
      {icon}
      <div className="text-details">
        <p>{title}:</p>
        <span>{value ? value : "---"}</span>
      </div>
    </DetailPlanetContainer>
  );
};
