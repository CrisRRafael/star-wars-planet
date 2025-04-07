import styled from "styled-components";

export const FiltersPlanetsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  color: #fff;

  font: 400 14px/100% Lato;

  p {
    font-weight: 900;
  }

  padding: 16px 0;

  .title-filters-planet {
    display: flex;
    gap: 5px;
  }
`;

export const ButtonFilter = styled.button`
  border: none;
  cursor: pointer;
  background: none;

  font-family: Lato;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;

  color: #fff;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 8px;
  border-radius: 5px;

  &.active {
    background-color: #75767a33;

    svg {
      transform: rotate(270deg);
    }
  }

  svg {
    transition: 0.3s ease-in-out;
  }
`;
