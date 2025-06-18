import { Box, Typography } from "@mui/material";
import { keyframes } from '@emotion/react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NotInfo from "./NotInfo";
import { checkerplateStyles } from "../../styles/baseStyles";

const floatAnimation = keyframes`
  0% { transform: translate(-50%, -50%); }
  50% { transform: translate(-50%, calc(-50% - 15px)); }
  100% { transform: translate(-50%, -50%); }
`;

function Cover({ data }) {

  const meta = data?.meta;

  const [isGlowing, setIsGlowing] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsGlowing(true);
    setTimeout(() => {
      navigate(meta?.englishLabel ? `/${meta?.englishLabel}/synopsis` : "/");
    }, meta?.coverImg ? 1900 : 300);
  };

  if (!meta) {
    return (
      <NotInfo />
    )
  }

  return (
    <Box sx={{
      ...checkerplateStyles,
      width: "100vw",
      height: "100vh",
      textAlign: "center",
      overflow: "hidden"
    }}>
      {meta?.coverImg
        ? <img src={meta?.coverImg} alt="カバー画像（クリックして開始）" style={{
          height: "100%",
          userSelect: "none",
          WebkitUserSelect: "none",
          userDrag: "none",
          WebkitUserDrag: "none",
          filter: isGlowing ? "brightness(10)" : "brightness(1)",
          boxShadow: isGlowing ? "0 0 500px 300px rgba(255, 255, 255, 1)" : "0 0 0px 0px rgba(255, 255, 255, 0)",
          transition: 'filter 1.8s linear(0 5%, 1 100%), box-shadow 1.8s linear(0 5%, 1 100%)',
        }}
        onClick={handleClick}/>
        : <Box
            sx={{
              height: "100%",
              width: "min(614px, 66%)",
              backgroundColor: "gray",
              mr: "auto",
              ml: "auto"
            }}
            onClick={handleClick}
          />
      }
      {!isGlowing && <Typography variant="body1" component="p" sx={{
        position: "absolute",
        top: "75%",
        left: "50%",
        backgroundColor: "#fffd",
        p: 1,
        fontWeight: "bold",
        fontSize: "20px",
        borderRadius: 4,
        userSelect: "none",
        WebkitUserSelect: "none",
        animation: `${floatAnimation} 2s ease-in-out infinite`,
      }}
      onClick={handleClick}>画像をクリックして開始</Typography>}
    </Box>
  )
}

export default Cover;