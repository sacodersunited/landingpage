import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  : root {
    --yellow: #ffc600;
    --black: #212121;
    --blue: #021626;
  }

  body {
    color: var(--black);
  }

  hr {
    background-color: var(--yellow);
  }

  h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    color: var(--blue);
  }

  .lead-p-hr {
    margin-bottom: -48px;
  }

  .row {
    margin-bottom: 48px;
  }

  section {
    margin-top: 64px;
  }

  .thick-hr {
    border-top: 3px solid rgba(0, 0, 0, 0.1);
  }

  .bronze-hr {
    border-top: 3px solid rgba(241, 111, 35, 1);
  }

  .silver-hr {
    border-top: 3px solid rgba(177, 180, 181, 1);
  }

  .moh-hr {
    border-top: 3px solid rgba(6, 36, 247, 1);
  }
  
  .btn-primary{
    background-color: var(--blue);
    cursor: pointer;
  }
`;

export default GlobalStyles;
