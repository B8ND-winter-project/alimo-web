import React from "react";
import SideBar from "src/components/SideBar/SideBar";
import MyPostNotifyDummy from "src/components/WriteRead/MyPostNotify.dummy";
import * as S from "src/style/WriteRead.style/WriteRead.style";

const MyWriteView = () => {
  return (
    <S.WriteRead>
      <SideBar />
      <S.WriteReadView>
        <S.WriteReadWrap>
          <MyPostNotifyDummy />
          <MyPostNotifyDummy />
          <MyPostNotifyDummy />
          <MyPostNotifyDummy />
          <MyPostNotifyDummy />
        </S.WriteReadWrap>
      </S.WriteReadView>
    </S.WriteRead>
  );
};

export default MyWriteView;
