import styled from "styled-components";

export const StyledEditProfile = styled.aside`
  width: 250px;
  height: 321px;
  border: 1px solid transparent;
  border-radius: 20px;
  background: #f5f5f5;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  .imgProfile {
    height: 145px;
    width: 140px;
    border-radius: 100px;
  }

  h2 {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: var(--weight1);
    font-size: var(--text-size3);
    line-height: 21px;
    color: var(--color-gray1000);
  }

  p {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: var(--weight3);
    font-size: var(--text-size7);
    line-height: 16px;
    color: var(--color-gray1000);
  }

  .divButton {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
  }

  button:nth-child(1) {
    height: 29px;
    width: 90px;
    background-color: var(--color-white);
    border-radius: 15px;
    color: var(--color-secondary);
    border: 2px solid var(--color-secondary);
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: var(--text-size7);
    font-weight: var(--weight1);
    img {
      vertical-align: middle;
    }
  }

  button:nth-child(2) {
    border: none;
    width: 25px;
    height: 25px;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;
