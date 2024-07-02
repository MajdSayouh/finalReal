/* eslint-disable react/prop-types */

function Btn({ children, type, size, width = 15 }) {
  const btnCard = {
    width: `${width}%`,
  };
  return (
    <button
      style={btnCard}
      className={`btn btn-${type} ${size ? `btn-${size}` : ""} `}
    >
      {children}
    </button>
  );
}

export default Btn;
