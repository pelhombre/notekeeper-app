import "./DropdownList.css";

export const DropdownList = ({ selectedStatus, OPTIONS }) => {
  return (
    <select id="status" className="dropdown-list" defaultValue={selectedStatus}>
      {Object.values(OPTIONS).map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
