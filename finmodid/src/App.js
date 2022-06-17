import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComponent } from "./components/NavbarComponent";
import bg from "./assets/BG.png";
import bg2 from "./assets/Frame 108.png";
import kotak from "./assets/kotak1.png";
import kotak2 from "./assets/kotak2.png";
import duduk from "./assets/duduk.png";
import { PageOne } from "./components/PageOne";
import { PageTwo } from "./components/PageTwo";
import { PageThree } from "./components/PageThree";
import { PageFour } from "./components/PageFour";
import { PageFive } from "./components/PageFive";
function App() {
  return (
    <div className="main-wrapper">
      <div
        className="main-container"
        style={{
          backgroundImage: `url(${bg2}),url(${bg}),url(${kotak}),url(${kotak2}),url(${duduk})`,
          backgroundRepeat: "no-repeat",
          backgroundSize:
            "20vw 20vh,100vw 100vh,35vw 100vh, 35vw 100vh, 40vw 80vh",
          backgroundPosition: "0 89vh,0 0,100% 110vh,0 300vh, 100% 380vh",
        }}
      >
        <NavbarComponent />
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
      </div>
    </div>
  );
}

export default App;
