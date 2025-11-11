import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const BasicSelect = ({ mode, menus = [], sendFilterToParent, isEdit }) => {
  const [filter, setFiler] = useState("");

  const handleChange = (event) => {
    setFiler(event.target.value);
  };

  useEffect(() => {
    if (filter !== "") {
      sendFilterToParent(mode, filter);
    }
  }, [filter, sendFilterToParent, mode]);

  return (
    <Box
      sx={{
        width: "100%",
        background: "rgba(17,24,39,0.45)",
        borderRadius: 1,
        border: "1px solid rgba(55,65,81,1)",
        p: 1,
      }}
      className="custom-scrollbar"
    >
      <FormControl fullWidth variant="outlined">
        <InputLabel
          id={`select-label-${mode}`}
          sx={{ color: "#93c5fd" }}
        >
          {mode}
        </InputLabel>
        <Select
          labelId={`select-label-${mode}`}
          id={`select-${mode}`}
          value={filter}
          label={mode}
          onChange={handleChange}
          sx={{
            color: "#c7f9ff",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            ".MuiSelect-select": { padding: "10px 12px" },
          }}
        >
          {menus.map((menu, index) => {
            return (
              <MenuItem
                key={index}
                value={menu}
              >
                {menu}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
