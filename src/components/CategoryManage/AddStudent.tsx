import React from "react";
import * as S from "src/components/CategoryManage/style/AddStudent.style";
import CheckStudent from "src/assets/img/CheckStudent.png";
import NoneCheckStudent from "src/assets/img/NoneCheckStudent.png";
import ProfileImg from "src/assets/img/ProfileImg.svg";
import CloseImg from "src/assets/img/CloseImg.png";
import DenyStudent from "src/assets/img/DenyStudent.svg";
import useAddStudent from "src/Hooks/Category/useAddStudent";

const AddStudent = () => {
  const { isClicked, onClickClickedStudent } = useAddStudent();

  return (
    <S.AddStudentWrap>
      <S.Main>
        <S.SelectStudentDialog>
          <S.TopNav>
            <S.SelectedStudnetTitle>학생을 선택해주세요</S.SelectedStudnetTitle>
            <img src={CloseImg} />
          </S.TopNav>
          <S.SelectionWrap>
            <S.ChoiceInfoWrap>
              <S.GradeInfo>1학년 (72)</S.GradeInfo>
              <S.ClassInfo>
                <span>1반 (18)</span>
                <span>2반 (18)</span>
                <span>3반 (18)</span>
                <span>4반 (18)</span>
              </S.ClassInfo>
              <S.GradeInfo>2학년 (72)</S.GradeInfo>
              <S.ClassInfo>
                <span>1반 (18)</span>
                <span>2반 (18)</span>
                <span>3반 (18)</span>
                <span>4반 (18)</span>
              </S.ClassInfo>
              <S.TeacherAndParentsInfo>교사 (20)</S.TeacherAndParentsInfo>
              <S.TeacherAndParentsInfo>학부모</S.TeacherAndParentsInfo>
            </S.ChoiceInfoWrap>
            <S.StudentSelectionWrap>
              <S.MemberSearchInput placeholder="멤버 검색" />
              <S.UtilityWrap>
                <S.Class>4반</S.Class>
                &nbsp;
                <S.ClassStudent>18</S.ClassStudent>
                <S.AllSelect>전체선택</S.AllSelect>
              </S.UtilityWrap>
              <S.StudentList>
                <img src={isClicked ? CheckStudent : NoneCheckStudent} onClick={onClickClickedStudent} />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>김가영</S.StudentName>
              </S.StudentList>
              <S.StudentList>
                <img src={isClicked ? CheckStudent : NoneCheckStudent} onClick={onClickClickedStudent} />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>김가영</S.StudentName>
              </S.StudentList>
              <S.StudentList>
                <img src={isClicked ? CheckStudent : NoneCheckStudent} onClick={onClickClickedStudent} />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>김가영</S.StudentName>
              </S.StudentList>
              <S.StudentList>
                <img src={isClicked ? CheckStudent : NoneCheckStudent} onClick={onClickClickedStudent} />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>김가영</S.StudentName>
              </S.StudentList>
            </S.StudentSelectionWrap>
            <S.ViewSelectedStudentWrap>
              <S.ViewSelectedStudent>
                <img src={ProfileImg} />
                <S.ViewStudentName>김가영</S.ViewStudentName>
                <S.DenyStudent style={{ marginLeft: "4vw" }} src={DenyStudent} />
              </S.ViewSelectedStudent>
              <S.ViewSelectedStudent>
                <img src={ProfileImg} />
                <S.ViewStudentName>김가영</S.ViewStudentName>
                <S.DenyStudent style={{ marginLeft: "4vw" }} src={DenyStudent} />
              </S.ViewSelectedStudent>
              <S.ViewSelectedStudent>
                <img src={ProfileImg} />
                <S.ViewStudentName>김가영</S.ViewStudentName>
                <S.DenyStudent style={{ marginLeft: "4vw" }} src={DenyStudent} />
              </S.ViewSelectedStudent>
            </S.ViewSelectedStudentWrap>
          </S.SelectionWrap>
          <S.ButtonWrap>
            <S.CancleButton>취소</S.CancleButton>
            <S.ConfirmButton>선택</S.ConfirmButton>
          </S.ButtonWrap>
        </S.SelectStudentDialog>
      </S.Main>
    </S.AddStudentWrap>
  );
};

export default AddStudent;
