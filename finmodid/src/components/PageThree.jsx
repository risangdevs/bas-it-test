import { Button, Container } from "react-bootstrap";
import "./PageOne.css";
import laptop from "../assets/Group 103.png";
export const PageThree = () => {
  return (
    <Container
      className="flex-container"
      style={{ margin: "auto", width: "inherit", height: "auto" }}
    >
      <Container style={{ width: "450px" }}>
        <Container className="flex-item">
          <img src={laptop} />
        </Container>
      </Container>
      <Container style={{ width: "450px" }}>
        <Container className="flex-item">
          <h2 className="bold-header">Platform Sangat Mudah Untuk Digunakan</h2>
          <p className="gray-text">
            Finmod merupakan satu-satunya platform penilaian online menyeluruh
            untuk startup yang ada di indonesia dengan metode penilaian yang
            dilakukan dari berbagai sudut pandang jika diperlukan, Anda dapat
            memutuskan untuk menggunakan subset dari 5 metode yang tersedia
            untuk medapatkan hasil yang komprehensif.
          </p>
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
        </Container>
      </Container>
    </Container>
  );
};
