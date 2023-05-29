import styled from "styled-components";

export const StyledForm = styled.div`
  width: 350px;
  background-color: var(--gray2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 16px 18px;
  filter: drop-shadow(0px 7px 8px rgba(0, 0, 0, 0.25));

  h2 {
    color: var(--primary-color);
    text-transform: capitalize;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  input,
  textarea {
    height: 28px;
    background-color: var(--gray1);
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 0 8px;
    color: var(--gray3);
  }

  textarea {
    height: 95px;
    padding: 8px;
  }

  button {
    height: 28px;
    border-radius: 6px;
    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    color: var(--gray1);
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s;
    margin-bottom: 12px;
  }

  button:hover {
    background-color: var(--gray2);
    color: var(--primary-color);
  }
`;
