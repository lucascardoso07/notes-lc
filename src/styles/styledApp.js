import styled from "styled-components";

export const StyledApp = styled.div`
  main {
    display: flex;
    justify-content: space-between;
  }

  .list-section {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: var(--primary-color);
    }

    ul {
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 6px;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media (max-width: 1000px) {
    .container {
      width: 100%;
    }

    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .list-section {
      width: 100%;
    }
  }
`;
