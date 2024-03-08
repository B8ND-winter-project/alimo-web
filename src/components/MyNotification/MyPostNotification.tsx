import MyProfile from "src/assets/img/Profile-Dummy.jpg";
import MyNotifyImg from "src/assets/img/MyNotifyImg.svg";
import * as S from "src/components/MyNotification/style/MyNotification.style";
import { useNavigate } from "react-router-dom";

const MyPostNotifyDummy = () => {
  const navigate = useNavigate();
  interface Dummy {
    title: string;
    contents: string;
  }
  const DUMMY_CONTENT: Dummy = {
    title: `<2023년 대한민국 고졸인재 채용엑스포 V-log 공모전 안내>`,
    contents: `위 공모전에 관심있는 학생은 이진주 선생님에게 카카오워크로 연락주세요~!`,
  };
  return (
    <S.MyPostNotifyWrap>
      <S.MyPostNotify onClick={() => navigate("/read")}>
        <S.MyNotifyWrap>
          <S.MyNotifyTextWrap>
            <S.MyInfoWrap>
              <S.MyProfile src={MyProfile} alt="내 프로필" />
              <S.MyInfoText>
                <S.MyName>이진주T</S.MyName>
                <S.MyNotifyDate>2023년 4월 20일(목) 02:56</S.MyNotifyDate>
              </S.MyInfoText>
            </S.MyInfoWrap>
            <S.MyContentWrap>
              <S.MyContentTitleBox>
                <S.MyContentTitle>{DUMMY_CONTENT.title}</S.MyContentTitle>
                <br />
              </S.MyContentTitleBox>
              <S.MyContentBox>
                <S.MyContent>{DUMMY_CONTENT.contents}</S.MyContent>
              </S.MyContentBox>
            </S.MyContentWrap>
          </S.MyNotifyTextWrap>
          <S.MyNotifyImgWrap>
            <S.MyNotifyImg src={MyNotifyImg} alt="공지 이미지" />
          </S.MyNotifyImgWrap>
        </S.MyNotifyWrap>
        <S.MyNotifyLine></S.MyNotifyLine>
      </S.MyPostNotify>
    </S.MyPostNotifyWrap>
  );
};

export default MyPostNotifyDummy;