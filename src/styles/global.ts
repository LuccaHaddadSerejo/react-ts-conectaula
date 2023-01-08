import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary:#66bce6;
    --color-secondary:#a995e8;
    --color-tertiary:#e6828b;
    --color-gray1000:#000000;
    --color-gray900:#191919;
    --color-gray700:#4C4C4C
    --color-gray600:#333333;
    --color-gray500:#7F7F7F;
    --color-gray400:#999999;
    --color-gray300:#64748b;
    --color-gray200:#CCCCCC;
    --color-gray100:#D9D9D9;
    --color-gray0:#F5F5F5;
    --color-white:#FFFFFF;

    --color-success: #3FE864;
    --color-error: #E83F5B;
    --color-warning: #FFCD07;
    
    --weight1: 700;
    --weight2: 600;
    --weight3: 500;
    --weight4: 400;

    --title-size1: 2.5rem; /*40px*/
    --title-size2: 2.375rem; /*38px*/
    --title-size3: 2.25rem; /*36px*/
    --title-size4: 2.125rem; /*34px*/
    --title-size5: 2rem; /*32px*/
    --title-size6: 1.875rem; /*30px*/

    --text-size1: 1.625rem; /*26px*/
    --text-size2: 1.5rem; /*24px*/
    --text-size3: 1.375rem; /*22px*/
    --text-size4: 1.25rem; /*20px*/
    --text-size5: 1.125rem; /*18px*/
    --text-size6: 1rem; /*16px*/
    --text-size7: 0.875rem; /*14px*/
    --text-size8: 0.75rem; /*12px*/
    --text-size9: 0.625rem; /*10px*/
    --text-size10: 0.5rem; /*8px*/

    --radius1: 16px;
    --radius2: 12px;
    --radius3: 10px;

    --font-family1: "Nunito", sans-serif;
    --font-family2: "Roboto slab", sans-serif;
    --font-family3: "Open sans", sans-serif;
  }  

  * {
    margin:0;
    padding: 0;       
    box-sizing: border-box;
    font-family: var(--font-family1)
  }

  ul, ol, li{
    list-style: none;
  } 

  body,html{
    width: 100%;
    min-height: 100vh;
  }

  a{
    color: unset;
    text-decoration: none;
  }
  
  button, a{
    cursor: pointer;
  }

  #root{
    min-height: 100vh;
  }
`;
