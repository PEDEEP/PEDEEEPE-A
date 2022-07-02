import "./styles/home.css";
import logo from "./image/logo.png";
import tiger from "./image/tiger.gif";
import Swal from "sweetalert2";

const emptyArray = [1, 1, 1, 1, 1, 1];
export function Home() {
  return (
    <>
      <img class="logo-img" src={logo} alt="Logo" />

      <h1>STUPID HACKATON SCHOOL</h1>
      <marquee>
        ยินดีต้อนรับสู่เว็ปไซต์......สถานศึกษาสตูปิดแฮคคาตอน.......สถาบันเพื่อโปรแกรมเมอร์
      </marquee>
      <div class="topnav">
        {emptyArray.map(() => (
          <a
            href="#home"
            onClick={() => {
              Swal.fire("มีแค่หน้าเดี่ยวครับ ทำไว้เฉยๆ");
            }}
          >
            Home
          </a>
        ))}
      </div>

      <div className="image-container">
        <img src={tiger} alt="tiger" />
        <img src={tiger} alt="tiger" />
      </div>
    </>
  );
}

export default Home;
