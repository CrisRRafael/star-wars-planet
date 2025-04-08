import styled, { keyframes } from "styled-components";

const floatAndTilt = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(-1.5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

export const WrapperSearchPlanet = styled.div`
  width: 800px;
  height: 402px;

  border-radius: 10px;

  background: #000000b2;

  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;

    max-width: 300px;
    width: 100%;
    height: 501px;

    img {
      width: 300px;
      height: 188px;
    }
  }

  .wrapper-spaceship {
    width: 462;
    height: 328;

    bottom: -150px;
    left: -120px;

    position: absolute;

    animation: ${floatAndTilt} 3.5s ease-in-out infinite;

    @media (max-width: 900px) {
      width: 323px;
      height: 229px;

      bottom: 232px;
      left: 60px;
    }
  }
`;

export const SearchPlanetsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 48px;

  width: 400px;

  gap: 8px;

  .title-planet-search {
    font: 400 20px/100% Montserrat;
    color: #ffffff;
    text-align: center;
  }

  @media (max-width: 900px) {
    max-width: 300px;
    width: 100%;
    height: 500px;
  }
`;
