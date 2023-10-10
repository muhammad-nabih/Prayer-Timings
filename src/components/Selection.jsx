import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { useState } from "react";
import { egyptGovernorates } from "./data/allCity";
import { useSalahContext } from "./ContextSalah/ContextSalahTimes";
const Selection = () => {
  const { city, setCity } = useSalahContext();

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <FormControl
      variant="filled"
      sx={{
        minWidth: 120,
        background: "transparent",
        width: "50%",
        margin: "30px auto",
        backgroundColor: "#d9d9d9",
      }}
    >
      <InputLabel
        id="demo-simple-select-label"
        sx={{ fontWeight: 900, fontSize: "1.2rem" }}
      >
        المدينة
      </InputLabel>
      <Select
        dir="rtl"
        labelId="demo-simple-select-label"
        value={city}
        onChange={handleChange}
        sx={{ fontWeight: "bold", color: "#0f497e" }}
      >
        {egyptGovernorates.map((cityObj) => {
          return (
            <MenuItem key={cityObj.id} value={cityObj.name}>
              {cityObj.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Selection;
