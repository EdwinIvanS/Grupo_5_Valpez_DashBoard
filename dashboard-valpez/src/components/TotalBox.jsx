
function TotalBox(props) {

    return (
        <div className="box">
            <div className="box-section">
                <h3>{props.titulo}</h3>
                <h2>{props.total}</h2>
            </div>
            <div className="box-section">
                {props.icon}
            </div>
        </div>
    );
  }
  
export default TotalBox;