import styled from 'styled-components';
export const StyledContactList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 20px 0;
`;
export const StyledContactsItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  border: 1px solid #196f3d;
  border-radius: 5px;
  padding: 5px 5px;
  width: 430px;
`;

export const StyledDeleteBtn = styled.button`
  width: 50px;
  background-color: transparent;
  border: none;
  svg {
    color: #e74c3c;
    width: 25px;
    height: 25px;
  }
`;
export const StyledNumber = styled.p`
  flex: 1 1 0%;
  svg {
    margin-right: 5px;
  }
`;
export const StyledContactText = styled.p`
  flex: 1 1 0%;
`;
