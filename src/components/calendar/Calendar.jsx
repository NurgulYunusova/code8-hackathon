import calendar from "../../assets/images/calendar.png";
import Sidebar from "../AdminSidebar/Sidebar";
import "./calendar.scss";

function Calendar() {
  return (
    <>
      <div className="calendar">
        <Sidebar />
        <div className="image">
          <img src={calendar} alt="Calendar" />
        </div>
      </div>
    </>
  );
}

export default Calendar;
