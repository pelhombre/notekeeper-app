export const Button = ({ className, type, action, label }) => {
    return (
      <button className={className} type={type} onClick={action}>
        {label}
      </button>
    );
  };