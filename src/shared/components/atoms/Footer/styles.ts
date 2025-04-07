import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #ffffff;
  width: 100%;

  padding: 1.5rem;

  display: flex;
  justify-content: center;
  justify-content: center;

  position: fixed;
  bottom: 0;
  left: 0;

  .copyright {
    display: flex;
    align-items: center;
    padding: 0 59px;
    border-right: 1px solid #000;
  }

  .logo-star-wars {
    padding-left: 64px;
  }

  @media (max-width: 900px) {
    .copyright {
      display: none;
    }

    .logo-star-wars {
      padding-left: 0;
    }
  }
`;
