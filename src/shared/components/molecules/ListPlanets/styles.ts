import styled from "styled-components";

export const ContainerListPlanets = styled.div`
  position: absolute;

  width: 301px;
  max-height: 180px;
  height: fit-content;

  background: #fff;
  margin: 45px 0 0;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c8c8c8;
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  .circular-loader {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .not-found {
    margin: 1rem;
    font: 600 16px/100% Montserrat;
  }

  @media (max-width: 900px) {
    width: 204px;
    max-height: 100px;
  }
`;
