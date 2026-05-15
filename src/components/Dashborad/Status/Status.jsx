function Status() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="cardStatus">
              {/* Icon */}
              <div className="icon">
                <i className="fa-solid fa-users"></i>
              </div>

              <div className="info">
                <span className="counter">120</span>
                <span className="title">Projects</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">test</div>
          <div className="col-12 col-md-3">test</div>
          <div className="col-12 col-md-3">test</div>
        </div>
      </div>
    </section>
  );
}

export default Status;
