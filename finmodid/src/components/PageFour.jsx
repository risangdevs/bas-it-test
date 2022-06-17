import { Container } from "react-bootstrap";
import './PageOne.css'
export const PageFour = () => {
  return (
    <Container style={{ margin: "10% auto auto 10%", width: "50%",height:'auto', }}>
      <h1 className="bold-header">
        Kami Dipercaya banyak Startup & UMKM Indonesia
      </h1>
      <p className="gray-text">
        Sudah banyak startup indonesia yang mempercai kami sebagai platform
        penilaian online untuk perusahaan mereka, Sekarang gilliran anda untuk
        mengetahui seberapa berharganya perusahaan anda
      </p>
      <div style={{ display: "flex" }}>
        <div style={{marginRight:'10px'}}>
          <h2 className="blue-header">130k+</h2>
          <p className="gray-text">Perusahaan</p>
        </div>
        <div>
          <h2 className="blue-header">100k+</h2>
          <p className="gray-text">Indonesia</p>
        </div>
      </div>
    </Container>
  );
};
