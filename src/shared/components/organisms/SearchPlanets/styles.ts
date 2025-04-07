import styled from "styled-components";

export const WrapperSearchPlanet = styled.div`
  width: 800px;
  height: 402px;

  border-radius: 10px;

  background: #000000b2;

  display: grid;
  grid-template-columns: 1fr 1fr;

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
