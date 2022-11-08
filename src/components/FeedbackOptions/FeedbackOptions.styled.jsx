import styled from '@emotion/styled';

export const BtnList = styled.ul`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.mainBackground};
  justify-content: space-between;
`;

export const BtnFeedback = styled.button`
  padding: 10px;
  color: ${props => props.theme.colors.dark};
  border-radius: 5px;
  border: 1px solid #000;
  cursor: grab;
  :hover,
  :focus {
    background-color: green;
  }
`;
