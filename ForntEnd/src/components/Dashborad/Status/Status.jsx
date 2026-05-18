function Status({ icon, title, counter }) {
  return (
    <div className="col-12 col-md-3">
      <div className="cardStatus">
        {/* Icon */}
        <div className="icon">
          <i className={`fa-solid ${icon}`}></i>
        </div>

        <div className="info">
          <span className="counter">{counter}</span>
          <span className="title">{title}</span>
        </div>
      </div>
    </div>
  );
}

export default Status;
