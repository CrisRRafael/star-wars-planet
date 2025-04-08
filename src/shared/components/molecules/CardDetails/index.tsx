import { ReactElement } from "react";
import { CardDetailsContainer } from "./styles";
import CircularLoader from "../../atoms/CircularLoader";

interface ICardDetailsProps {
  icon: ReactElement;
  title: string;
  dataCard: string;
}

const CardDetails = ({ icon, title, dataCard }: ICardDetailsProps) => {
  const isLoading = dataCard === "...";

  return (
    <CardDetailsContainer>
      <div className="title-section">
        {icon}
        <p>{title}</p>
      </div>
      <div className="info-section">
        {isLoading ? <CircularLoader /> : <span>{dataCard}</span>}
      </div>
    </CardDetailsContainer>
  );
};

export default CardDetails;
