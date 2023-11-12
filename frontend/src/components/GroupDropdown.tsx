import { useState } from "react";
import "../App.css";
interface Props {
  groupNames: string[];
}
const GroupDropdown = ({ groupNames }: Props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="btn btn-lg dropdown-toggle "
        data-bs-toggle="dropdown"
        style={{
          borderRadius: 3,
          borderColor: "#00873E",
          marginBottom: "10px",
          color: "#B11515",
          width: "82%",
          borderWidth: 1,
        }}
      >
        Group Dropdown
      </button>
      {isDropdownOpen && (
        <div style={{}} className="d-flex flex-column">
          {groupNames.map((val, i) => (
            <button
              key={i}
              style={{
                borderRadius: 3,
                borderColor: "#00873E",
                marginBottom: "10px",
                color: "#B11515",
                width: "60%",
              }}
              className="btn btn-lg"
            >
              {val}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GroupDropdown;
