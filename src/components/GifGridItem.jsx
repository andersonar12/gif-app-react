const GifGridItem = (props) => {
  return (
    <div className="col col-sm-6 col-lg-4 col-xl-3 mb-4 animate__animated animate__fadeIn">
      <div className="card">
        <img src={props.img.url} alt={props.img.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.img.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default GifGridItem;
