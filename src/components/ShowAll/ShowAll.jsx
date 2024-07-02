/* eslint-disable react/prop-types */

function ShowAll({ children, size }) {
  return (
    <div className="">
      <button className={`btn btn-success btn-${size}`}>{children}</button>
    </div>
  );
}

export default ShowAll;
