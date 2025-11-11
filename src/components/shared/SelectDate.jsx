import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const SelectDate = ({ sendDateToParent, isEdit }) => {
  var currentDate = dayjs("2025-11-11");
  const [value, setValue] = useState(currentDate);
  useEffect(() => {
    sendDateToParent(value);
  }, [value, sendDateToParent]);

  return (
    <div className="bg-gray-900/80 p-4 rounded-md border border-gray-700">
      {/* Custom header to match target design: small label + large formatted date */}
      <div className="mb-4">
        <div className="text-[12px] tracking-wide text-gray-300 font-semibold">
          SELECT DATE
        </div>
        <div className="text-3xl md:text-4xl font-semibold text-white mt-2">
          {value ? dayjs(value).format("ddd, MMM D") : "-"}
        </div>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          defaultValue={dayjs("2022-04-17")}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{
            actionBar: {
              actions: ["today"],
              sx: { justifyContent: "flex-end" },
            },
          }}
          // style internal picker parts to be dark and cyan-accented
          sx={{
            width: '100%',
            // Force the paper/wrapper to dark so it doesn't show the default white surface
            '& .MuiPaper-root, & .MuiPickerStaticWrapper-root, & .MuiCalendarPicker-root': {
              backgroundColor: '#0b1220 !important',
              color: '#e6eef2',
              boxShadow: 'none',
              borderRadius: '6px',
            },
            // hide built-in toolbar (we render our own header)
            '& .MuiPickersToolbar-root': { display: 'none' },
            '& .MuiPickersCalendarHeader-root': { color: '#93c5fd' },
            '& .MuiPickersCalendarHeader-label': { color: '#93c5fd', fontWeight: 700 },
            '& .MuiDayCalendar-weekDayLabel': { color: '#94a3b8' },
            '& .MuiPickersDay-root': { color: '#cbd5e1' },
            '& .MuiDayCalendar-weekContainer': { backgroundColor: 'transparent' },
            '& .MuiPickersDay-root.Mui-selected': {
              backgroundColor: '#60a5fa !important',
              color: '#071223 !important',
            },
            '& .MuiPickersDay-root.MuiPickersDay-dayWithMargin.Mui-selected': {
              backgroundColor: '#60a5fa !important',
            },
            '& .MuiPickersDay-root.MuiPickersDay-today': {
              border: '1px solid rgba(96,165,250,0.45)',
            },
            '& .MuiPickersActionBar-root button': { color: '#22d3ee' },
            // nav icons and chevrons
            '& .MuiIconButton-root': { color: '#cbd5e1' },
            // ensure typography inside picker is bright
            '& .MuiTypography-root, & .MuiCalendarPicker-root .MuiTypography-root': { color: '#e6eef2' },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default SelectDate;
