import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "src/lib/Toast/Swal";
import SideBar from "../SideBar/SideBar";
import * as S from "src/style/Write.style/Write.style";

import "src/style/Write.style/Write.css";

const Write = () => {
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [contentAllow, setContentAllow] = useState<boolean>(false);
  const [categoryAllow, setCategoryAllow] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const naviagate = useNavigate();

  const onChangeContent = (e: any) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    if (content.length > 0) {
      setContentAllow(true);
    } else {
      setContentAllow(false);
    }
  }, [content]);

  const onChangeImageInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleClickButton = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCancelImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onClickCategory = (category: string) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  useEffect(() => {
    if (selectedCategory === null) {
      setCategoryAllow(false);
    } else {
      setCategoryAllow(true);
    }
  }, [selectedCategory]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName("");
    }
  };

  const onClickConfirmButton = () => {
    if (contentAllow && categoryAllow) {
      showToast("success", "게시되었습니다.");
      naviagate("/main");
    } else if (!contentAllow && categoryAllow) {
      showToast("error", "내용을 입력해주세요.");
    } else {
      showToast("error", "카테고리를 선택해주세요.");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <S.WriteWrap>
        <div>
          <S.H1>1. 내용을 입력해주세요!</S.H1>
          <input
            type="text"
            placeholder="알려줄 내용을 입력해주세요!"
            className="InputContent"
            id="Content"
            value={content}
            onChange={onChangeContent}
          />
        </div>
        <S.ImageInputWrap>
          <S.H1 style={{ marginBottom: "1vh" }}>2. 첨부하실 파일이 있나요?</S.H1>
          {/* 파일 선택 */}
          <div style={{ display: "flex" }}>
            <label className="InputFileButton" htmlFor="input-file">
              파일 선택
            </label>
            <input className="UploadFileName" value={fileName} placeholder="첨부파일" readOnly />
            <input type="file" id="input-file" style={{ display: "none" }} onChange={handleFileChange} />
          </div>
          {/* 이미지 선택 */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={onChangeImageInput}
            style={{ display: "none" }}
          />
          <S.ImageInputButton onClick={handleClickButton} style={{ marginRight: "1vw" }}>
            이미지 선택
          </S.ImageInputButton>
          {/* 이미지 미리보기 */}
          {image && (
            <div className="ViewImageWrap">
              <img src={image} alt="Selected" style={{ marginTop: "1vh", marginBottom: "1vh", height: "20vh" }} />
              <button
                onClick={handleCancelImage}
                style={{ cursor: "pointer", marginTop: "5px" }}
                className="CancleButton"
              >
                선택 취소
              </button>
            </div>
          )}
        </S.ImageInputWrap>
        <div>
          <S.H1>2. 카테고리를 선택해주세요!</S.H1>
          <S.CatetoryWrap>
            <span
              className={selectedCategory === "grade" ? "SelectCategory" : "Category"}
              onClick={() => onClickCategory("grade")}
            >
              1학년
            </span>
            <span
              className={selectedCategory === "Job" ? "SelectCategory" : "Category"}
              onClick={() => onClickCategory("Job")}
            >
              마이스터 홍보부
            </span>
            <span
              className={selectedCategory === "club" ? "SelectCategory" : "Category"}
              onClick={() => onClickCategory("club")}
            >
              ALT
            </span>
            <span
              className={selectedCategory === "pyhNotify" ? "SelectCategory" : "Category"}
              onClick={() => onClickCategory("pyhNotify")}
            >
              교장선생님이 알립니다.
            </span>
          </S.CatetoryWrap>
        </div>
        <S.ButtonWrap>
          <S.StyledButton style={{ marginLeft: "27vw" }} className="cancle">
            취소 하기
          </S.StyledButton>
          <S.StyledButton style={{ marginLeft: "2vw" }} onClick={onClickConfirmButton}>
            게시 하기
          </S.StyledButton>
        </S.ButtonWrap>
      </S.WriteWrap>
    </div>
  );
};

export default Write;
