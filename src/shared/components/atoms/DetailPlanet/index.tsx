import { ReactElement } from "react";
import { DetailPlanetContainer } from "./styles";

interface IDetailPlanet {
  icon: ReactElement;
  title: string;
  value: string | undefined;
}

export const DetailPlanet = ({ icon, title, value }: IDetailPlanet) => {
  return (
    <DetailPlanetContainer>
      {icon}
      <div className="text-details">
        <p>{title}:</p>
        <span>{value}</span>
      </div>
    </DetailPlanetContainer>
  );
};
