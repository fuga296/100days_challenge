import { Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';

function ButtonCard({ width = 400, height = 312, imgHeight = 140, coverImg = null, title = "", titleStyles = {}, text = "", textStyles = {}, handleClick = () => {} }) {
  return (
    <Card
      sx={{ width: width, height: height }}
    >
      <CardActionArea
        sx={{
          height: "100%",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch'
        }}
        onClick={handleClick}
      >
        {imgHeight && <CardMedia
          sx={{ height: imgHeight }}
          image={coverImg}
          title="title"
        />}
        <CardContent sx={{ flexGrow: 1, textAlign: 'left' }}>
          <Typography variant="h6" sx={{...titleStyles, fontSize: 18, mb: 1}} gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" sx={{...textStyles, fontSize: 14}}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ButtonCard;