import styled from "styled-components";

export const ContainerSinglePlanet = styled.div`
  padding: 8px;
  cursor: pointer;
  p {
    font: 700 14px/100% Montserrat;
  }

  .planet-data {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &:hover {
    background-color: #c8c8c8;
  }
`;
