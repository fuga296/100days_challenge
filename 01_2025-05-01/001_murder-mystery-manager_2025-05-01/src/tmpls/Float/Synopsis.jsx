import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import FloatingContainer from "../../components/pageStyles/FloatingContainer";
import NotInfo from "./NotInfo";
import { textStyles, titleStyles } from "../../styles/baseStyles";

function Synopsis({ data }) {

  const meta = data?.meta;

  if (!meta) {
    return (
      <NotInfo />
    )
  }

  return (
    <FloatingContainer>
      <Box component="section" sx={{ mb: 15 }}>
        {/* タイトル */}
        <Typography variant="h4" sx={titleStyles}>
          「{meta?.title ?? "未定義"}」
        </Typography>
        {/* GM */}
        <Typography sx={textStyles}>{
        meta?.GM === undefined
          ? "未定義"
          : meta.GM
            ? "GM有り"
            : "GM無し"
        }</Typography>
        {/* プレイ人数 */}
        {(meta?.playerCount?.min !== undefined && meta?.playerCount?.max !== undefined)
          ?  meta.playerCount.min === meta.playerCount.max
              ? <Typography sx={textStyles}>プレイ人数 {meta.playerCount.min} 人</Typography>
              : <Typography sx={textStyles}>プレイ人数 {meta.playerCount.min} ~ {meta.playerCount.max} 人</Typography>
          : <Typography sx={textStyles}>プレイ人数 未定義</Typography>
        }
        {/* プレイ時間 */}
        <Typography sx={textStyles}>プレイ時間 {meta?.playTimeMinutes ? `${meta.playTimeMinutes} 分` : "未定義"}</Typography>
      </Box>

      <Box component="section" sx={{ mb: 15, paddingInline: '16vw' }}>
        <Typography variant="h4" sx={titleStyles}>
          あらすじ
        </Typography>
        <Typography sx={{...textStyles, whiteSpace: 'pre-line', lineHeight: 3 }}>
          {data?.synopsis || "存在しません"}
        </Typography>
      </Box>

      <Box component="section" sx={{ textAlign: "right" }}>
        <Link component={RouterLink} to={meta?.englishLabel ? `/${meta.englishLabel}/character-select` : ""}>キャラクター選択</Link>
      </Box>
    </FloatingContainer>
  );
}

export default Synopsis;