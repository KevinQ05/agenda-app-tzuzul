import { getMonthFromIndex } from "../utils/helpers/calendar";

export default function DayNumber({ day, setDate, switchMonth }) {
  const { isDimmed, date, isSelected, index, value } = day;
  const dimmed = isDimmed ? "dimmed-item" : "";
  const selected = isSelected ? "selected-item" : "";

  function handleClick() {
    if (!isDimmed) {
      setDate(date);
      return;
    }
    switchMonth(
      getMonthFromIndex(day.current.getMonth(), index - value).increment
    );
    setDate(date);
  }

  return (
    <li
      className={`calendar-grid-item ${dimmed} ${selected}`}
      key={index}
      onClick={handleClick}
    >
      {value}
    </li>
  );
}
