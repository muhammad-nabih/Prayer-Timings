import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const MainContent = () => {
  return (
    <nav>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">
            سبتمبر 09, 2023 | 4:20 صباحًا
          </Typography>
          <Typography variant="h5" color={"orange"}>مكة المكرمة</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h4">متبقي حتى صلاة المغرب</Typography>
          <Typography variant="h5" color={"orange"}>1:17:49</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "#ffffff29", my: 2 }} />
    </nav>
  );
};

export default MainContent;
