import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const Selection = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl
      variant="filled"
      sx={{
        m: 1,
        minWidth: 120,
        background: "transparent",
        width: "50%",
        margin: "30px auto",
        backgroundColor:"#d9d9d9"


      }}
    >
      <InputLabel id="demo-simple-select" >
        المدينة
      </InputLabel>
      <Select
        dir="rtl"
        labelId="demo-simple-select"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}

      >
        <MenuItem value={10}>مكة </MenuItem>
        <MenuItem value={20}>القاهرة </MenuItem>
        <MenuItem value={30}>الرياض</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selection;
