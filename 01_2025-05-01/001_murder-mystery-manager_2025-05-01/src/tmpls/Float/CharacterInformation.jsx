import { BottomNavigation, BottomNavigationAction, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

import FloatingContainer from "../../components/pageStyles/FloatingContainer";
import generateDummyWord from "../../utils/generateWord";

const sectionTitleStyle = {
  mb: 10,
  color: "#3c4858",
  fontSize: 37,
};

const infoTextStyle = {
  color: "#3c4858",
  fontSize: 18,
};


function CharacterInfomation({ data }) {

  const characterID = useParams().id;
  const character = data.characters.find((char) => char.id === characterID);

  const pages = data.meta.infoType;

  const [currentPate, setCurrentPate] = useState(0);

  if (!character) {
    return (
      <FloatingContainer fillScreen>
        <Typography color="error">キャラクターが見つかりませんでした。</Typography>
      </FloatingContainer>
    );
  }

  return (
    <FloatingContainer>
      <Button variant="text" onClick={() => {for (let i = 0; i < 10; i++) {console.log(generateDummyWord())}}}>ジェネレート</Button>
      <Box component="section" sx={{ mb: 10 }}>
        <Typography variant="h4" sx={sectionTitleStyle}>
          「{character.transcribedName}」 の情報
        </Typography>
      </Box>

      <Box component="section" sx={{ mb: 15 }}>
        <BottomNavigation
          showLabels
          value={currentPate}
          onChange={(event, newValue) => {
            setCurrentPate(newValue);
          }}
        >
          {pages.map((pageName, i) => (
            <BottomNavigationAction label={pageName} value={i} key={i} />
          ))}
        </BottomNavigation>
      </Box>

      <Box component="section" sx={{ mb: 15, paddingInline: '16vw' }}>
        <Typography variant="h4" sx={sectionTitleStyle}>
          {pages[currentPate]}
        </Typography>

        {(() => {
          switch(currentPate) {
            case 0:
              return (
                character.information.past.map((section, i) => (
                  <Box component="section" key={i} sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{...sectionTitleStyle, mb: 3}}>
                      {section.title}
                    </Typography>
                    <Typography sx={{ ...infoTextStyle, whiteSpace: 'pre-line', lineHeight: 2.5 }}>
                      {section.content}
                    </Typography>
                  </Box>
                ))
              )
            case 1:
              return (
                <Typography sx={{ ...infoTextStyle, lineHeight: 3 }}>
                  {character.information.dayActions}
                </Typography>
              )
            case 2:
              return (
                <Typography sx={{ ...infoTextStyle, lineHeight: 3 }}>
                  ちちきいっぱい！！！
                </Typography>
              )
            case 3:
              return (
                <Typography sx={{ ...infoTextStyle, lineHeight: 3 }}>
                  もちものいっぱい！！！
                </Typography>
              )
            case 4:
              return (
                <Typography sx={{ ...infoTextStyle, lineHeight: 3 }}>
                  のーといっぱい！！！
                </Typography>
              )
            case 5:
              return (
                <Typography sx={{ ...infoTextStyle, lineHeight: 3 }}>
                  かちいっぱい！！！
                </Typography>
              )
            default:
              return (
                <Typography sx={{ ...infoTextStyle, lineHeight: 3 }}>
                  情報が見つかりませんでした。
                </Typography>
              );
          }
        })()}
      </Box>
    </FloatingContainer>
  );
}

export default CharacterInfomation;