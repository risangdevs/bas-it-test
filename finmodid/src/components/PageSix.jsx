import { Button, Container } from "react-bootstrap";
import "./PageOne.css";
import quote from "../assets/quote.png";
import mikir from "../assets/mikir.png";
import tanimore from "../assets/tanimore.png";
import logos from "../assets/logos.png";
import { useState } from "react";
export const PageSix = () => {
  return (
    <Container className="page-six-main-container">
      <Container className="page-six-header">
        <Container className="page-six-header-image-container">
          <img className="page-six-header-image" src={quote} />
        </Container>
        <Container className="page-six-header-text">
          <h2 className="bold-header">Apa Kata Client</h2>
          <p>
            Kami mendengarkan masukan dan apresiasi dari client kami di seluruh
            dunia yang telah percaya terhadap kami
          </p>
        </Container>
      </Container>
      <Container className="page-six-flex">
        <Container className="page-six-flex-item">
          <div className="outer-border">
            <div className="bordered-icon">
              <img className="tanimore-image" src={tanimore} />
            </div>
          </div>
          <p className="gray-text" style={{ fontSize: "20px" }}>
            Finmod sangat membantu kami untuk menyiapkan laporan Financial Model
            secara mudah dan lengkap yang dibutuhkan untuk fase Fundraising kami
            kepada para calon investor di perusahaan kami.
          </p>
          <h6 className="bold-header" style={{ fontSize: "20px" }}>
            Ardiansyah
          </h6>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p className="gray-text">CEO, Tanimore</p>
            <div>
              <Button className="white-button">{"<"}</Button>
              <Button className="white-button">{">"}</Button>
            </div>
          </div>
        </Container>
        <Container className="page-six-flex-item">
          <img className="page-six-flex-image" src={mikir} />
        </Container>
      </Container>
      <Container className="page-six-partnership">
        <Container className="partnership-flex-item-zero">
          <h2 className="bold-header">Partner Kami</h2>
          <p>
            Pelanggan yang menggunakan Finmod untuk menilai perusahaan mereka
          </p>
        </Container>
        <Container className="partnership-flex-item-one">
          <img className="logos" src={logos} />
        </Container>
      </Container>
    </Container>
  );
};
