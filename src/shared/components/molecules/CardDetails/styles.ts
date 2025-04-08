import styled from "styled-components";

export const CardDetailsContainer = styled.div`
  background: #f1f1f1;
  padding: 15px;
  border-radius: 8px;

  width: 592px;

  @media (max-width: 900px) {
    width: 355px;
  }

  p {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
  }

  .title-section {
    display: flex;
    align-items: center;
    padding-bottom: 8px;
    gap: 8px;

    border-bottom: 1px solid #909090;
  }
  .info-section {
    padding: 18px 0;
  }
`;
