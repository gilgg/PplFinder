import styled from "styled-components";

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 500px;
  height: calc(100vh - 270px);
  margin-block-start: 30px;
  overflow-y: auto;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const UserCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 128px;
  gap: 2px;
  overflow: hidden;
`;

export const UserPicture = styled.img`
  border-radius: 45%;
`;

export const ArrowIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;
