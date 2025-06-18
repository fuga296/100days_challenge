import { Typography } from "@mui/material";
import FloatingContainer from "../../components/pageStyles/FloatingContainer";

function NotInfo() {
  return (
    <FloatingContainer containerStyle={{display: "flex", justifyContent: "center", alignItems: 'center',}} fillScreen>
      <Typography variant="h2" color="error">情報が存在しません</Typography>
    </FloatingContainer>
  )
}

export default NotInfo;