import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import FloatingContainer from "../../components/pageStyles/FloatingContainer";
import { textStyles, titleStyles } from "../../styles/baseStyles";

function Synopsis({ data }) {

  const meta = data.meta;

  return (
    <FloatingContainer>
      <Box component="section" sx={{ mb: 15 }}>
        <Typography variant="h4" sx={titleStyles}>
          「{meta.title}」
        </Typography>
        <Typography sx={textStyles}>{meta.GM ? "GM有り" : "GM無し"}</Typography>
        <Typography sx={textStyles}>プレイ人数 {meta.playerCount} 人</Typography>
        <Typography sx={textStyles}>プレイ時間 {meta.playTimeMinutes} 分</Typography>
      </Box>

      <Box component="section" sx={{ mb: 15, paddingInline: '16vw' }}>
        <Typography variant="h4" sx={titleStyles}>
          あらすじ
        </Typography>
        <Typography sx={{...textStyles, whiteSpace: 'pre-line', lineHeight: 3 }}>
          {data.synopsis}
        </Typography>
      </Box>

      <Box component="section" sx={{ textAlign: "right" }}>
        <Link component={RouterLink} to={`/${meta.englishLabel}/character-select`}>キャラクター選択</Link>
      </Box>
    </FloatingContainer>
  );
}

export default Synopsis;