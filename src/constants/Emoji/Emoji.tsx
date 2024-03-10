import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";
import * as S from "src/constants/Emoji/style/Emoji.style";

const Emoji = () => {
  const accessToken =
    "eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6IlRFQUNIRVIiLCJpYXQiOjE3MTAwNzI2MjYsImV4cCI6MTcxMDA3NDQyNn0.KEnCDS9E9ijknnqRQEQsLltSv6yoRUKtLS9RGVQ5XtHmIbS34GfdZd3R7Cba1_4YxN_mtWp1Q8vuQsFtDcALaA";
  const { id } = useParams();
  const [notificationEmojiData, setNotificationEmojiData] = useState<any>([]);

  useEffect(() => {
    const NotificationEmojiLoad = async () => {
      await axios
        .get(`${CONFIG.serverUrl}/emoji/load/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          setNotificationEmojiData(res.data.data);
        });
    };
    NotificationEmojiLoad();
  }, []);

  const ChangeEmoji = (emoji: string) => {
    switch (emoji) {
      case "OKAY":
        return "👌";
      case "LOVE":
        return "😍";
      case "LAUGH":
        return "😂";
      case "SAD":
        return "😢";
      case "ANGRY":
        return "😡";
    }
  };
  return (
    <S.MyNotificationEmojiWrap>
      <S.MyNotificationEmojiBox>
        {notificationEmojiData.map((data: any) => (
          <S.EmojiBox>
            <S.Emoji>{ChangeEmoji(data.emojiName)}</S.Emoji>
            <S.EmojiCnt>{data.count}</S.EmojiCnt>
          </S.EmojiBox>
        ))}
      </S.MyNotificationEmojiBox>
    </S.MyNotificationEmojiWrap>
  );
};

export default Emoji;
