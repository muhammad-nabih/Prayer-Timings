import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Data Import
import { SalahTimes } from "./data/salahAndTimes.js";

const CardJsx = () => {
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
            <CardContent>
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

const Card_Content = () => {
  return (
    <Stack direction="row" sx={{ gap: 2, margin: "10px auto" }}>
      <CardJsx />
    </Stack>
  );
};

export default Card_Content;
