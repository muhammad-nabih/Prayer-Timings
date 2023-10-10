import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSalahContext } from "./ContextSalah/ContextSalahTimes";

const Card_Content = () => {
  const { salahTimes } = useSalahContext();

  const salahNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
  const images = [
    "/src/assets/images/fajr-prayer.png",
    "/src/assets/images/dhhr-prayer-mosque.png",
    "/src/assets/images/asr-prayer-mosque.png",
    "/src/assets/images/sunset-prayer-mosque.png",
    "/src/assets/images/night-prayer-mosque.png",
  ];

  return (
    <Grid container spacing={2} justifyContent={"center"}>
      {salahNames.map((salahName, index) => (
        <Grid key={salahName} item xs={12} sm={8} md={4} lg={2} xl={2}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image={images[index]}
              title="Elsalah"
            />
            <CardContent style={{ background: "#d3d3d3" }}>
              <Typography variant="h6" component="div" fontWeight={500}>
                {salahName}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {salahTimes[salahName]}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Card_Content;
