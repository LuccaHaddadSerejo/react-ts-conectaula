import styled from "styled-components";

export const StyledModalContentDelet = styled.div`
    width: 353px;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: var(--color-white);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3{
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: var(--weight4);
        font-size: var(--text-size6);
        line-height: 26px;
    }

    .divButton {
        display: flex;
        justify-content: space-between;
        gap: 15px;
        margin-top: 15px;
    }

    .divButton button:nth-child(1){
          border: none;
          background-color: transparent;
          font-weight: var(--weight1);
          font-size: var(--text-size7);
          gap: 0.5rem;
          color: #64748b;
          background: #e4e4e4;
          border-radius: 10px;
          width: 173px;
          height: 50px;
    }


    .divButton button:nth-child(2){
              width: 173px;
              height: 50px;
              border: none;
              border-radius: 10px;
              background: var(--color-error);
              color: var(--color-white);
              font-size: var(--text-size7);
              font-weight: 700;
              font-family: 'Open Sans'; 
            
    }


`