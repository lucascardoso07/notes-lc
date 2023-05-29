import styled from "styled-components";

export const StyledNoteNumber = styled.div`
  width: 90%;
  height: 60px;
  border-radius: 8px;
  background-color: var(--gray2);
  filter: drop-shadow(0px 7px 8px rgba(0, 0, 0, 0.25));
  transition: all 0.6s;
  :hover {
    width: 91%;
    height: 65px;
  }

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  span {
    font-size: 18px;
    font-weight: bold;
    color: var(--gray3);
  }
`;
