import { Card } from "react-bootstrap";
import "./CardComponent.css";
import "./PageOne.css";
export const CardComponent = ({ props }) => {
  return (
    <Card id="card">
      <Card.Img className="card-icon" variant="top" src={props.img} />
      <h5 style={{ textAlign: "center" }} className="bold-header">
        {props.title}
      </h5>
      <p style={{ textAlign: "center" }} className="gray-text">
        {props.text}
      </p>
      <Card.Link style={{ textAlign: "center", textDecoration:'none' }}>Learn more</Card.Link>
    </Card>
  );
};
