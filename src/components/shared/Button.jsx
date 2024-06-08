import PropTypes from 'prop-types';

export const Button = ({ className, type, action, label }) => {
  return (
    <button className={className} type={type} onClick={action}>
      {label}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
