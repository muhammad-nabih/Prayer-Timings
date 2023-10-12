import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSalahContext } from "./ContextSalah/ContextSalahTimes";
import { format, parse, addHours } from "date-fns";
import { ar } from "date-fns/locale";

const Card_Content = () => {
  const { salahTimes } = useSalahContext();

  const salahNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
  const images = [
    "/images/fajr",
    "/images/dhr",
    "/images/asr",
    "/images/sunset",
    "/images/isha",
  ];

  const formatTime = (time) => {
    try {
      // قم بتحويل الوقت إلى كائن زمني
      const timeObj = parse(time, "HH:mm", new Date());

      // قم بإضافة 12 ساعة إذا كان الوقت بالتنسيق 24 ساعة
      const time12H = addHours(timeObj, timeObj.getHours() >= 12 ? 0 : 12);

      // قم بتنسيق الوقت بالصيغة المطلوبة باللغة العربية
      return format(time12H, "hh:mm a", { locale: ar });
    } catch (error) {
      return "Invalid Time";
    }
  };

  return (
    <Grid container spacing={2} justifyContent={"center"}>
      {salahNames.map((salahName, index) => (
        <Grid key={salahName} item xs={12} sm={8} md={4} lg={2} xl={2}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image={`${images[index]}.webp`}
              title="Elsalah"
              loading="lazy"
            />

            <CardContent style={{ background: "#d3d3d3" }}>
              <Typography variant="h6" component="div" fontWeight={500}>
                {salahName}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {formatTime(salahTimes[salahName])}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Card_Content;
