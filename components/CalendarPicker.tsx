import React from "react";
import DatePicker, { useDefaultStyles } from "react-native-ui-datepicker";

export default function CalendarPicker({
  value,
  onChange,
  maximumDate,
}: {
  value: Date;
  onChange: (date: Date) => void;
  maximumDate?: Date;
}) {
  const defaultStyles = useDefaultStyles("light");
  return (
    <DatePicker
      mode="single"
      date={value}
      maxDate={maximumDate}
      onChange={({ date }) =>
        date && onChange(new Date(date as string | number | Date))
      }
      styles={{
        ...defaultStyles,
        today: { borderWidth: 1, borderColor: "#1A1D26" },
      }}
    />
  );
}
