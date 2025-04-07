import styled from "styled-components";

import BgStarWars from "../../../public/background-star-wars.png";
export const WrapperContainerLayout = styled.div`
  position: relative;
  min-height: 100vh;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${BgStarWars.src});

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
