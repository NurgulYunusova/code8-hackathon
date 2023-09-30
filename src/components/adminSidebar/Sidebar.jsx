import "./sidebar.scss";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState("customersChoice");

  const handleItemClick = (item) => {
    if (item == "calendarChoice") {
      navigate("/admin1");
    }

    if (item == "customersChoice") {
      navigate("/admin");
    }
    setSelectedItem(item);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebarContainer">
          <div className="top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
            >
              <path
                d="M18.5004 34.8875C17.4674 34.8875 16.4191 34.6562 15.602 34.1783L7.1229 29.2912C3.66957 26.9633 3.45374 26.6087 3.45374 22.955V14.0442C3.45374 10.3904 3.65415 10.0358 7.04582 7.73874L15.5866 2.80541C17.2054 1.86499 19.7491 1.86499 21.3679 2.80541L29.8779 7.70791C33.3312 10.0358 33.547 10.3904 33.547 14.0442V22.9396C33.547 26.5933 33.3466 26.9479 29.9549 29.245L21.4141 34.1783C20.5816 34.6562 19.5333 34.8875 18.5004 34.8875ZM18.5004 4.42416C17.8529 4.42416 17.2208 4.54749 16.7737 4.80958L8.29457 9.71208C5.78165 11.4079 5.78165 11.4079 5.78165 14.0442V22.9396C5.78165 25.5758 5.78165 25.5758 8.35624 27.3179L16.7737 32.1742C17.6833 32.6983 19.3329 32.6983 20.2424 32.1742L28.7216 27.2717C31.2191 25.5758 31.2191 25.5758 31.2191 22.9396V14.0442C31.2191 11.4079 31.2191 11.4079 28.6445 9.66583L20.227 4.80958C19.7799 4.54749 19.1479 4.42416 18.5004 4.42416Z"
                fill="black"
              />
              <path
                d="M18.5 24.2812C15.3088 24.2812 12.7188 21.6912 12.7188 18.5C12.7188 15.3088 15.3088 12.7188 18.5 12.7188C21.6912 12.7188 24.2812 15.3088 24.2812 18.5C24.2812 21.6912 21.6912 24.2812 18.5 24.2812ZM18.5 15.0312C16.5883 15.0312 15.0312 16.5883 15.0312 18.5C15.0312 20.4117 16.5883 21.9688 18.5 21.9688C20.4117 21.9688 21.9688 20.4117 21.9688 18.5C21.9688 16.5883 20.4117 15.0312 18.5 15.0312Z"
                fill="black"
              />
            </svg>
            <h2>Dashboard</h2>
          </div>

          <ul className="choices">
            <li
              className={`choice ${
                selectedItem === "customersChoice" ? "active" : ""
              }`}
              onClick={() => handleItemClick("customersChoice")}
            >
              <PersonIcon className="iconn" />

              <p>Customers</p>

              <div className="angleIcon">
                <ChevronRightIcon className="iconn" />
              </div>
            </li>
            <li
              className={`choice ${
                selectedItem === "calendarChoice" ? "active" : ""
              }`}
              onClick={() => handleItemClick("calendarChoice")}
            >
              <CalendarMonthIcon className="iconn" />

              <p>Calendar</p>

              <div className="angleIcon">
                <ChevronRightIcon className="iconn" />
              </div>
            </li>
            <li
              className={`choice ${
                selectedItem === "statusChoice" ? "active" : ""
              }`}
              onClick={() => handleItemClick("statusChoice")}
            >
              <DisplaySettingsIcon className="iconn" />

              <p>Active Status</p>

              <div className="angleIcon">
                <ChevronRightIcon className="iconn" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
