import { StarWars } from "@/src/shared/assets/StarWars";
import { FooterContainer } from "./styles";

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
        <StarWars />
      </div>
    </FooterContainer>
  );
};
