import { Box, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";

import FloatingContainer from "../../components/pageStyles/FloatingContainer";
import NotInfo from "./NotInfo";
import usePageTitle from "../../hooks/usePageTitle";

const sectionTitleStyles = {
  mb: 10,
  color: "#3c4858",
  fontSize: 30,
};

const infoTextStyles = {
  color: "#3c4858",
  fontSize: 18,
};

function CharacterConfirmation({ data }) {

  const characterID = useParams().id;
  const character = data?.characters.find((char) => char?.id === characterID);

  usePageTitle(`${data?.meta?.title ?? ""} | キャラ確認`);

  if (!character) {
    return (
      <NotInfo />
    );
  }

  return (
    <FloatingContainer>
      <Box component="section" sx={{ mb: 15 }}>
        <Typography variant="h3" sx={sectionTitleStyles}>
          「{character?.transcribedName ?? "未定義"}」 でよろしいですか？
        </Typography>
      </Box>

      <Box component="section" sx={{ mb: 15 }}>
        <Typography variant="body1" fontWeight="bold" sx={infoTextStyles}>
          キャラクター設定には以下の情報が含まれています。
        </Typography>
        <List sx={{ ml: 3 }}>
          {data?.meta?.infoType && data?.meta?.infoType.map((ele, i) => (
            <ListItem key={i}>
              <ListItemIcon sx={{ minWidth: 24 }}>•</ListItemIcon>
              <ListItemText primary={
                <>
                  <Typography sx={infoTextStyles}>
                    {ele}
                  </Typography>
                </>
              } />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box component="section" sx={{ textAlign: "right" }}>
        <Link component={RouterLink} to={`/tower-of-babel/character/${characterID}`}>{character?.transcribedName ?? "未定義"} の設定を確認</Link>
      </Box>
    </FloatingContainer>
  );
}

export default CharacterConfirmation;