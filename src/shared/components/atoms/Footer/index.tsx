import { FooterContainer } from "./styles";
import StarWars from "../../../assets/StarWars.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="copyright">
        <p>
          STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos
          reservados
        </p>
      </div>
      <div className="logo-star-wars">
        <Image src={StarWars} alt="Logo Star Wars" />
      </div>
    </FooterContainer>
  );
};
