import { useState } from "react";
import { Container } from "react-bootstrap";
import "./PageOne.css";
import metode from "../assets/Methode.png";
import laporan from "../assets/Paper.png";
import rahasia from "../assets/Shield dark.png";
import akurat from "../assets/Vector.png";
import parameter from "../assets/Edit Square.png";
import dollar from "../assets/Dollar.png";
import { CardComponent } from "./CardComponent";
export const PageTwo = () => {
  const [cards, setCards] = useState([
    {
      img: metode,
      title: "Metode Penilaian",
      text: "Metode penilaian dilakukan dari berbagai sudut pandang untuk mendapatkan hasil yang komprehensif",
    },
    {
      img: laporan,
      title: "Laporan Penilaian",
      text: "Laporan penilaian dibuat secara profesional, sangat terperinci dan mudah untuk di download",
    },
    {
      img: rahasia,
      title: "Kerahasiaan Data",
      text: "Data yang telah kami dapatkan dijamin kerahasiaannya tidak akan kami menjual atau membagikannya",
    },
    {
      img: akurat,
      title: "Keakuratan Data",
      text: "Sumber data disesuaikan berdasarkan negara dan industrinya untuk mendapatkan keakuratan",
    },
    {
      img: parameter,
      title: "Penyesuaian Parameter Penilaian",
      text: "Dapat menyesuaikan Parameter Penilaian untuk mempermudah anda",
    },
    {
      img: dollar,
      title: "Membantu Proyeksi Keuangan",
      text: "Kami menyediakan default berdasarkan kinerja rata-rata perusahaan di industri yang sama",
    },
  ]);
  return (
    <Container style={{ margin: "10% auto", width: "inherit",height:'auto' }}>
      <Container style={{ margin: "0 auto", width: "500px" }}>
        <h1
          className="bold-header"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          Mengapa Harus Kami?
        </h1>
        <p className="gray-text" style={{ textAlign: "center" }}>
          Karena kami memiliki beberapa keunggulan dalam menyajikan maupun
          mengolah data yang telah kami dapatkan untuk penilaian perusahaan
          tersebut
        </p>
      </Container>
      <Container className="flex-container" style={{justifyContent:'center', height:'auto'}}>
        {cards.map((card, index) => (
          <CardComponent key={card.title} props={card} />
        ))}
      </Container>
    </Container>
  );
};
