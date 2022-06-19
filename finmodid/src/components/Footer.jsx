import { Container } from "react-bootstrap";
import "./PageOne.css";
import fb from "../assets/Facebook icon.png";
import ig from "../assets/twitter icon.png";
import li from "../assets/lindedin icon.png";
export const Footer = () => {
  return (
    <Container className="footer">
      <Container className="footer-flex-container">
        <Container className="footer-flex-item-zero">
          <h1 className="footer-header">Finmod.id</h1>
          <p className="gray-text">
            Platform penilaian online untuk startup dan UMKM. Ini lebih cepat
            dan lebih hemat biaya daripada cara tradisional.
          </p>
          <div>
            <img className="socmed-icon" src={`${fb}`} alt="" />
            <img className="socmed-icon" src={`${ig}`} alt="" />
            <img className="socmed-icon" src={`${li}`} alt="" />
          </div>
        </Container>
        <Container className="footer-flex-item-one">
          <p className="bold-header">Findmod</p>
          <p className="gray-text">About</p>
          <p className="gray-text">Price</p>
          <p className="gray-text">Career</p>
          <p className="gray-text">Contact</p>
        </Container>
        <Container className="footer-flex-item-two">
          <p className="bold-header">Product</p>
          <p className="gray-text">Laporan Penilaian</p>
          <p className="gray-text">Metode</p>
          <p className="gray-text">Akurasi Data</p>
        </Container>
      </Container>
      <Container>
        <p className="gray-text" style={{ textAlign: "center" }}>
          All Rights Reserved @2022
        </p>
      </Container>
    </Container>
  );
};
