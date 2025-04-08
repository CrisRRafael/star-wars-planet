import styled from "styled-components";

interface IPlanetIdentificationContainerProps {
  isEditable: boolean;
}

export const PlanetIdentificationContainer = styled.div<IPlanetIdentificationContainerProps>`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
  }

  h1 {
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  .section-editable {
    display: flex;
    gap: 4px;
    align-items: flex-end;

    svg {
      width: 15px;
      height: 15px;
    }
  }

  .name-editable {
    font-family: Montserrat;
    font-weight: 900;
    font-size: 16px;
    line-height: 100%;
    text-transform: uppercase;

    border: ${({ isEditable }) => isEditable && "1px solid #909090"};
    padding: ${({ isEditable }) => isEditable && "4px"};
    border-radius: ${({ isEditable }) => isEditable && "4px"};

    max-width: 300px;
    max-height: 80px;
    overflow: ${({ isEditable }) => isEditable && "auto"};

    word-break: break-word;
    white-space: normal;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;

export const PlanetFallbackCircle = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color: #333;
`;
