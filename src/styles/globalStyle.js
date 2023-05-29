import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }


  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: var(--gray1) ;


    .container{
      width: 80%;
      margin: 0 auto;
    }
    .cadaster{
      color: var(--gray3);
      font-size: 33px;
      text-transform: capitalize;
    }
  }



  :root{
    --primary-color:#9747FF;
    --gray1: #15171A;
    --gray2: #212529;
    --gray3: #868E96;

  }
`;

export default GlobalStyle;
