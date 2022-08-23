function Categories(props) {

    return (
        <div className="categories">
            <div className="categories-section">
                <h3>Productos Camping</h3>
                <h2>{props.totalCamping}</h2>
            </div>
            <div className="categories-section">
                <h3>Productos Pesca</h3>
                <h2>{props.totalPesca}</h2>
            </div>
        </div>
    );
  }
  
export default Categories;