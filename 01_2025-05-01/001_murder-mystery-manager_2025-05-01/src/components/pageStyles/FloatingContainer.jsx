import { Box, Paper } from "@mui/material";

function FloatingContainer({ children, backgroundStyle = {}, containerStyle = {}, fillScreen = false }) {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      sx={{
        paddingBlock: 3,
        paddingInline: '1.25vw',
        backgroundColor: '#f5f5f5',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        "@media screen and (max-width:768px)": {
          p: 0,
        },
        transition: 'padding .15s',
        ...backgroundStyle,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          pt: fillScreen ? 2 : 10,
          pb: 2,
          pr: 2,
          pl: 2,
          textAlign: 'center',
          boxShadow: '0px 0px 15px 3px #777777',
          borderRadius: 3,
          ...(fillScreen && { flexGrow: 1 }),
          "@media screen and (max-width:768px)": {
            borderRadius: 0,
            boxShadow: 'none',
          },
          transition: 'box-shadow .15s',
          ...containerStyle,
        }}
      >
        {children}
      </Paper>
    </Box>
  )
}

export default FloatingContainer;