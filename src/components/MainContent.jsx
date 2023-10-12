/* eslint-disable react-hooks/exhaustive-deps */
import  { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { format, parse, differenceInSeconds } from "date-fns";
import { ar } from "date-fns/locale";
import { useSalahContext } from "./ContextSalah/ContextSalahTimes";

const MainContent = () => {
  const { city, salahTimes } = useSalahContext();
  const { Fajr, Dhuhr, Asr, Maghrib, Isha } = salahTimes;

  const prayerTimes = {
    الفجر: parse(Fajr, "HH:mm", new Date()),
    الظهر: parse(Dhuhr, "HH:mm", new Date()),
    العصر: parse(Asr, "HH:mm", new Date()),
    المغرب: parse(Maghrib, "HH:mm", new Date()),
    العشاء: parse(Isha, "HH:mm", new Date()),
  };

  const [currentPrayer, setCurrentPrayer] = useState("");
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const now = new Date();
    let nextPrayer = "الفجر";
    let nextPrayerTime = prayerTimes.الفجر;

    for (const prayer in prayerTimes) {
      if (now < prayerTimes[prayer]) {
        nextPrayer = prayer;
        nextPrayerTime = prayerTimes[prayer];
        break;
      }
    }

    setCurrentPrayer(nextPrayer);

    const timer = setInterval(() => {
      const secondsRemaining = differenceInSeconds(nextPrayerTime, new Date());

      if (secondsRemaining <= 0) {
        clearInterval(timer);
        setTimeRemaining("0:00:00");
      } else {
        const hours = Math.floor(secondsRemaining / 3600);
        const minutes = Math.floor((secondsRemaining % 3600) / 60);
        const seconds = secondsRemaining % 60;
        setTimeRemaining(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [prayerTimes]);

  const formattedDate = format(new Date(), "MMMM dd, yyyy | hh:mm a", {
    locale: ar,
  });

  return (
    <nav>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography sx={{
  fontSize: {
    xs: "1.2rem", // للشاشات الصغيرة
    md: "1.8rem", // للشاشات الوسطى
  },
}} variant="h4">{formattedDate}</Typography>
          <Typography variant="h5" color={"orange"}>
            {city}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography  sx={{
  fontSize: {
    xs: "1.2rem", // للشاشات الصغيرة
    md: "1.8rem", // للشاشات الوسطى
  },
}} variant="h4">متبقي حتى صلاة {currentPrayer}</Typography>
          <Typography variant="h5" color={"orange"}>
            {timeRemaining}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "#ffffff29", my: 2 }} />
    </nav>
  );
};

export default MainContent;
