import { Link, List, ListItem, ListItemText, ListItemIcon, Typography } from "@mui/material";
import Header from "./components/Header";
import { WORKS_DATA } from "../constants/worksData";

function Home() {
  return (
    <>
      <Header />
      <Typography variant="h3" component="h1">
        MM
      </Typography>
      <List component="nav">
        {
          WORKS_DATA.map((m, i) => (
            <ListItem>
              <ListItemIcon sx={{ minWidth: 24 }}>•</ListItemIcon>
              <ListItemText primary={
                <>
                  No.{i+1}：<Link href={`#/${m.meta.englishLabel}`}>{m.meta.title}</Link>
                </>
              } />
            </ListItem>
          ))
        }
      </List>
    </>
  )
}

export default Home;