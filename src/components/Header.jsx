import PropTypes from 'prop-types';

const Header = ({ className, heading }) => {
  return (
    <header className={className}>
      <h1>{heading}</h1>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default Header;
