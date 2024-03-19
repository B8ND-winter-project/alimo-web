import { LinkItUrl } from "react-linkify-it";
import { ImageData } from "src/types/MyNotificationDetail/Image.interface";
import { FileData } from "src/types/MyNotificationDetail/File.interface";
import { CommentData } from "src/types/CommentList/Comment.interface";
import SideBar from "src/constants/SideBar/SideBar";
import Emoji from "src/constants/Emoji/Emoji";
import CommentList from "src/components/MyNotification/MyNotificationDetail/Comment/CommentList";
import useMyNotificationDetail from "src/Hooks/Notification/useMyNotificationDetail";
import FileImage from "src/assets/img/FileImage.svg";
import FileDownLoadIcon from "src/assets/img/FileDownloadIcon.svg";
import * as S from "src/components/MyNotification/MyNotificationDetail/style/MyNotificationDetail.style";

const WriteReadDetail = () => {
  const {
    notificationDetailData,
    handleFileDownLoad,
    isImageError,
    handleImageError,
    fileSize,
  } = useMyNotificationDetail();
  console.log(notificationDetailData.images);
  return (
    <S.MyNotificationDetailWrap>
      <SideBar />
      <S.MyNotificationDetailBox>
        <S.MyNotificationDetail>
          <S.MyNotification>
            <S.MyNotificationInfoWrap>
              <S.MyProfile src={notificationDetailData.profileImage} />
              <S.MyInfoWrap>
                <S.MyName>{notificationDetailData.name}</S.MyName>
                <S.MyNotificationDate>
                  {notificationDetailData.createdAt}
                </S.MyNotificationDate>
              </S.MyInfoWrap>
            </S.MyNotificationInfoWrap>
            <S.MyNotificationTitleWrap>
              <S.MyNotificationTitle>
                {notificationDetailData.title}
              </S.MyNotificationTitle>
            </S.MyNotificationTitleWrap>
            <S.MyNotificationContentWrap>
              <S.MyNotificationContent>
                <LinkItUrl>{notificationDetailData.content}</LinkItUrl>
              </S.MyNotificationContent>
            </S.MyNotificationContentWrap>
            {notificationDetailData.images &&
              notificationDetailData.images.length > 0 &&
              isImageError &&
              notificationDetailData.images.map((imageData: ImageData) => (
                <S.MyNotificationImgWrap>
                  <S.MyNotificationImg
                    src={imageData.fileUrl}
                    onError={handleImageError}
                  />
                </S.MyNotificationImgWrap>
              ))}
            {notificationDetailData.files &&
              notificationDetailData.files.length > 0 &&
              notificationDetailData.files.map(
                (fileData: FileData, idx: number) => (
                  <S.MyNotificationFileWrap key={fileData.fileUrl}>
                    <S.MyNotificationFile>
                      <S.MyNotificationFileInfo>
                        <S.MyNotificationFileImage
                          src={FileImage}></S.MyNotificationFileImage>
                        <S.MyNotificationFileText>
                          <S.MyNotificationFileName>
                            {fileData.fileName}
                          </S.MyNotificationFileName>
                          <S.MyNotificationFileSize>
                            {fileSize[idx]}
                          </S.MyNotificationFileSize>
                        </S.MyNotificationFileText>
                      </S.MyNotificationFileInfo>
                      <S.MyNotificationFileDownLoadWrap
                        onClick={handleFileDownLoad}>
                        <S.MyNotificationFileDownLoad
                          src={FileDownLoadIcon}></S.MyNotificationFileDownLoad>
                      </S.MyNotificationFileDownLoadWrap>
                    </S.MyNotificationFile>
                  </S.MyNotificationFileWrap>
                )
              )}
            <Emoji />
          </S.MyNotification>
        </S.MyNotificationDetail>
        {/* <S.CommentList */}
        {notificationDetailData.comments &&
          notificationDetailData.comments.length > 0 &&
          notificationDetailData.comments.map((commentData: CommentData) => (
            <CommentList
              key={commentData.commentId}
              commentData={commentData}
            />
          ))}
      </S.MyNotificationDetailBox>
    </S.MyNotificationDetailWrap>
  );
};

export default WriteReadDetail;
