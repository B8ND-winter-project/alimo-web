import useComment from "src/hooks/Comment/useComment";
import CommentButtonImg from "src/assets/images/notification/CommentButtonImage.svg";
import * as S from "src/components/MyNotificationDetail/Comment/style";

interface Props {
  handleCommentCreate: (
    commentValue: string,
    setCommentValue: Function
  ) => Promise<void>;
}

const Comment = ({ handleCommentCreate }: Props) => {
  const { commentRef, commentValue, setCommentValue, handleChangeValue } =
    useComment();

  return (
    <S.CommentWrap>
      <S.Comment>
        <S.CommentInput
          rows={1}
          ref={commentRef}
          value={commentValue}
          placeholder="댓글을 남겨보세요."
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              return;
            } else if (e.key === "Enter") {
              e.preventDefault()
              handleCommentCreate(commentValue, setCommentValue);
            }
          }}
          onChange={(e) => handleChangeValue(e, commentRef)}></S.CommentInput>
        <S.CommentButtonWrap
          onClick={() => handleCommentCreate(commentValue, setCommentValue)}>
          <S.CommentButton src={CommentButtonImg}></S.CommentButton>
        </S.CommentButtonWrap>
      </S.Comment>
    </S.CommentWrap>
  );
};

export default Comment;
