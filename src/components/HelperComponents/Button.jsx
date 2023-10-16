import { Link } from "react-router-dom";

const Button = ({ onClick, className, children, to, spanClass }) => {
  if (!className) {
    className = "default-white";
  } else {
    className = `default-white ${className}`;
  }
  if (className === `default-white slant`) {
    return (
      <Link to={to}>
        <button className={className}>
          <span className={spanClass}>{children}</span>
        </button>
      </Link>
    );
  }

  return to ? (
    <Link to={to}>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      <span className={spanClass}>{children}</span>
    </button>
  );
};

export default Button;
