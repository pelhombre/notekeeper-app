import PropTypes from 'prop-types';

export const Header = ({ className, heading }) => {
  return <h1 className={className}>{heading}</h1>;
};

Header.propTypes = {
  className: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
};
