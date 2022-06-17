import { Button } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import fb from "../assets/Facebook icon.png";
import ig from "../assets/twitter icon.png";
import li from "../assets/lindedin icon.png";
import startup from "../assets/Startup.png";
import "./PageOne.css";
export const PageOne = () => {
  return (
    <Container className="flex-container">
      <Container style={{ width: "450px" }}>
        <Container className="flex-item">
          <h1 className="bold-header">Ceritakan Tentang Startup Anda</h1>
          <p className="gray-text">
            Kami akan membantu menganalisa dan memahami bagaimana berharganya
            perusahaan anda
          </p>
          <div
            style={{
              display: "flex",
              width: "inherit",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <Button
              style={{
                margin: "0 10px",
                width: "200px",
                height: "55px",
                backgroundColor: "white",
                color: "grey",
                border: "grey 1px solid",
              }}
            >
              Coba Demo
            </Button>
            <Button
              style={{
                margin: "0 10px",
                width: "200px",
                height: "55px",
                backgroundColor: "#4682b4",
                color: "white",
                border: "#4682b4 1px solid",
              }}
            >
              Beli Sekarang
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "30%",
                backgroundColor: "#4683b4",
                height: "1px",
              }}
            ></div>
            <div /* style={{width:'40%'}} */>
              <img className="socmed-icon" src={`${fb}`} alt="" />
              <img className="socmed-icon" src={`${ig}`} alt="" />
              <img className="socmed-icon" src={`${li}`} alt="" />
            </div>
            <div
              style={{
                width: "30%",
                backgroundColor: "#4683b4",
                height: "1px",
              }}
            ></div>
          </div>
        </Container>
      </Container>
      <Container style={{ width: "450px" }}>
        <Container className="flex-item">
          <img src={`${startup}`} alt="" />
        </Container>
      </Container>
    </Container>
  );
};
