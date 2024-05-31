import PropTypes from 'prop-types';

const DropdownList = ({ selectedStatus, OPTIONS }) => {
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

DropdownList.propTypes = {
  selectedStatus: PropTypes.string.isRequired,
  OPTIONS: PropTypes.object.isRequired
};

export { DropdownList }; 
