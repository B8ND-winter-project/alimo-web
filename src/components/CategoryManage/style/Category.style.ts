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
export const CategorySearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 100%;

  img{
    display: flex;
  width: 25px;
  height: 25px;
  cursor: pointer;
  }
`

export const CateogyManageUtilityWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

export const SearchCateogy = styled.input`
  width: calc(100vw - 80vw);
  height: calc(100vh - 95vh);
  margin-left: 5px;
  border: 1px solid #e6e6e6;
  border-radius: 15px;
  padding-left: 2vw;


  color: #787878;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;

  &:focus {
    outline: none;
  }
`;

export const CreateCategoryButton = styled.button`
  min-width: 100px;
  height: calc(100vh - 95vh);

  background-color: #000;

  color: #fff;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1rem;

  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const CategoryInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2vh;
`;

export const CategoryNameInfo = styled.span`
  color: #aaaaaa;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1rem;
  margin-left: 5vw;
`;

export const CategoryMemberInfo = styled.span`
  color: #aaaaaa;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1rem;
  margin-left: 16vw;
`;

export const CategoryInfo = styled.div<{ isClicked: boolean }>`
  width: calc(100vw - 65vw);
  height: calc(100vh - 90vh);

  background: ${(props) => (props.isClicked ? "#f4f5f9" : "#fff")};
  border: none;
  border-radius: 15px;

  display: flex;
  flex-direction: row;

  justify-content: space-evenly;

  align-items: center;
  align-self: center;

  /* margin-left: 3vw; */
  margin-top: 1vh;

  overflow: scroll;

  cursor: pointer;

  & > img {
    margin-left: 10vw;
    cursor: pointer;
  }

  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  &::-webkit-scrollbar {
    display: none;
  }

  /* 파이어폭스 */
  scrollbar-width: none;
`;

export const CategoryName = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: 400;

  /* margin-left: 2vw; */

  width: 50px;
`;

export const CategoryInMember = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: 400;

  width: calc(100vw - 97vw);

  margin-left: 11vw;
`;

export const CategoryMemberWrap = styled.div`
  width: calc(100vw - 49vw);
  height: calc(100vh - 10vh);

  margin-top: 10vh;
  background-color: #f4f5f9;

  overflow: scroll;
`;

export const MemberManageWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  margin-top: 3vh;
`;

export const MemberSearch = styled.input`
  width: calc(100vw - 90vw);
  height: calc(100vh - 95vh);

  border: 1px solid #e6e6e6;
  border-radius: 15px;

  padding-left: 2vw;

  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaaaaa;
  }
`;

export const AddMemberButton = styled.button`
  width: calc(100vw - 95vw);
  height: calc(100vh - 95vh);

  border: none;
  border-radius: 15px;

  background-color: #000;

  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;

  margin-left: 2vw;
  margin-right: 3vw;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const MemberUtilityWrap = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 2vh;
  margin-left: 8vw;
`;

export const MemberNameInfo = styled.span`
  color: #aaaaaa;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
`;

export const MemberClassNumberInfo = styled.span`
  color: #aaaaaa;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;

  margin-left: 15vw;
`;

export const MemberWrap = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1vh;

  margin-left: 1vw;
`;

export const MemeberProfileImg = styled.img`
  width: calc(100vw - 97vw);
  height: calc(100vw - 97vw);

  border-radius: 50%;

  margin-left: 1vw;
`;

export const Member = styled.div`
  width: calc(100vw - 52vw);
  height: calc(100vh - 90vh);

  border: none;
  border-top: 1px solid #e6e6e6;

  display: flex;
  flex-direction: row;

  align-items: center;
  align-self: center;
`;

export const MemeberName = styled.span`
  font-family: Prentendard;
  font-size: 1.3rem;
  font-weight: 500;

  margin-left: 2vw;
`;

export const MemberClassNumber = styled.span`
  font-family: Prentendard;
  font-size: 1.3rem;
  font-weight: 500;

  margin-left: 13.5vw;
`;

export const MoreImg = styled.img`
  margin-left: 15vw;

  cursor: pointer;
`;