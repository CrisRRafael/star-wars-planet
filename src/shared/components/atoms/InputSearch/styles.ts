import styled from "styled-components";

interface IButtonSearchProps {
  disabled: boolean;
}

export const ContainerInputSearch = styled.div`
  max-width: 301px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContentInputSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 40px;
  width: 100%;

  border: none;
  border-radius: 5px;

  background: #ffffff;

  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;

  font: 400 16px/100% Lato;

  text-align: center;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const ButtonSearch = styled.button<IButtonSearchProps>`
  height: 40px;
  width: 100%;

  font: 700 16px/100% Lato;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  color: #ffffff;

  background: ${({ disabled }) => (disabled ? "#de1212b3" : "#de1212")};

  border: none;

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
