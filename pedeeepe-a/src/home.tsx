import "./styles/home.css";
import logo from "./image/logo.png";
import tiger from "./image/tiger.gif";
import phoom from "./image/Poom.gif"
import Swal from "sweetalert2";
import content1 from "./image/content-image/img-content1.jpg"; 
import content2 from "./image/content-image/img-content2.jpg"; 
import content3 from "./image/content-image/img-content3.jpg"; 
import content4 from "./image/content-image/img-content4.jpg"; 
import content5 from "./image/content-image/img-content5.jpg"; 
import content6 from "./image/content-image/img-content6.jpg"; 


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
        <img src={phoom} alt="phoom " />
      </div>

    <h2>ประชาสัมพันธ์องค์กร</h2>
    <div class="wrapper">
      <div>
        <img src={content1} alt="content-img1" />
      </div>
      <div>
        <img src={content2} alt="content-img2" />
      </div>
      <div>
        <img src={content3} alt="content-img3" />
      </div>
      <div>
        <img src={content4} alt="content-img4" />
      </div>
      <div>
        <img src={content5} alt="content-img5" />
      </div>
      <div>
        <img src={content6} alt="content-img6" />
      </div>

    </div>
    </>
  );
}

export default Home;
