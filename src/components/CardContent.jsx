import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Data Import
import { SalahTimes } from "./data/salahAndTimes.js";

const Card_Content = () => {
  return (
    <Grid container spacing={2} justifyContent={"center"}>
      {SalahTimes.map((salah, index) => (
        <Grid item key={index} xs={12} sm={8} md={4} lg={2} xl={2}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image="/src/assets/images/card-image.jpg"
              title="Elsalah"
            />
            <CardContent style={{ background: "#d3d3d3" }}>
              <Typography variant="h6" component="div" fontWeight={500}>
                {salah.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {salah.time}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Card_Content;
