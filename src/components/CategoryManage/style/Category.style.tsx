import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const CategoryManageView = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10vh;
`;

export const CateogyManageUtilityWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchCateogy = styled.input`
  width: calc(100vw - 60vw);
  height: calc(100vh - 95vh);

  border: 1px solid #e6e6e6;
  border-radius: 15px;

  margin-top: 3vh;
  margin-left: 3vw;

  padding-left: 2vw;

  color: #787878;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
`;

export const CreateCategoryButton = styled.button`
  width: calc(100vw - 93vw);
  height: calc(100vh - 95vh);

  background-color: #000;

  color: #fff;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1rem;

  border: none;
  border-radius: 15px;

  margin-top: 3vh;
  margin-left: 2vw;
`;
