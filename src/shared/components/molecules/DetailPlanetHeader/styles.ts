import styled from "styled-components";

export const DetailsPlanetHeaderContainer = styled.div`
  display: flex;
  gap: 38px;

  .details-planet {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 4px;
    .details-planet {
      margin-left: 80px;
    }
  }
`;
