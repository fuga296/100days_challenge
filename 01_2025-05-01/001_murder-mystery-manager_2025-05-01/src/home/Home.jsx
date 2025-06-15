import { Link, List, ListItem, ListItemText, ListItemIcon, Typography } from "@mui/material";
import Header from "./components/Header";
import { MURDER_MYSTERY_NAMES } from "../constants/names";

function Home() {
  return (
    <>
      <Header />
      <Typography variant="h3" component="h1">
        MM
      </Typography>
      <List component="nav">
        {
          MURDER_MYSTERY_NAMES.map((m, i) => (
            <ListItem>
              <ListItemIcon sx={{ minWidth: 24 }}>•</ListItemIcon>
              <ListItemText primary={
                <>
                  No.{i+1}：<Link href={m.link}>{m.label}</Link>
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