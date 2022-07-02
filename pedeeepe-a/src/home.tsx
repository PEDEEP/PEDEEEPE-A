import "./styles/home.css";
import logo from "./image/logo.png";
import tiger from "./image/tiger.gif";
import phoom from "./image/Poom.gif";
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
    <div id="main-content">
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

    <h2 style="color : #F4BC1C">ประชาสัมพันธ์องค์กร</h2>
    <div class="wrapper">
      <div>
        <img src={content1} alt="content-img1" />
        <h4>ปฏิบัติหน้าที่เดือน กรกฎาคม (ประชุมงาน)</h4>
        <p>ประชุม หัวข้องาน และ ความต้องการของลูกค้า ที่ต้องการ product โง่่ๆ สร้างความไร้สาระกับลูกค้าให้มากที่สุด ในงาน Stupid hackation</p>
      </div>
      <div>
        <img src={content2} alt="content-img2" />
        <h4>ปฏิบัติหน้าที่เดือน กรกฎาคม (อบรมศึกษา)</h4>
        <p>การฝึกอบรมและศึกษา การใช้งาน Kotchasan framework ของภาษา PHP ที่ดีที่สุดในตลาด ณ เวลานี้</p>
      </div>
      <div>
        <img src={content3} alt="content-img3" />
        <h4>ปฏิบัติหน้าที่เดือน กรกฎาคม (แก้บัค)</h4>
        <p>การแก้ไขซอฟแวร์เฉพาะหน้าหรือเรียกว่า บัค มันไม่เป็นความจริงเลย เพราะบัคเท่ากับฟีเจอร์ ของ แอปที่ดีๆ</p>
      </div>
      <div>
        <img src={content4} alt="content-img4" />
        <h4>ปฏิบัติหน้าที่เดือน กรกฎาคม (daliy syne up)</h4>
        <p>การประชุมเล็กๆที่จัดขึ้นทุกวัน ที่มีแต่ การพูดถึง สิ่งเดิมๆ ไม่ไปข้างหน้าๆ หัวหน้าก็คนเดิม เพื่อนร่วมงานก็คนเดิม</p>
      </div>
      <div>
        <img src={content5} alt="content-img5" />
        <h4>ปฏิบัติหน้าที่เดือน กรกฎาคม (ประชุมกับ dev)</h4>
        <p>การประชุมร่วมของ dev ที่มี่ ปัญหา ระหว่าง  front end กับ backend ใครต่อAPI กันแน่ ส่วน UI/UX designer ออกแบบจนdevทำ ไม่ทัน ส่วน devops ก็ server ล่ม </p>
      </div>
      <div>
        <img src={content6} alt="content-img6" />
        <h4>ปฏิบัติหน้าที่เดือน กรกฎาคม (ส่งมอบผลงาน)</h4>
        <p>CEO ได้สรุปผลงานของ Dev เดอน กรกฎาคม งานตองดเลย 2เดอน เพราะ บรษทมงเนน จกรวาลนฤมตร มากเกนไปจนลม product กอนนานน และ พนกงานได lay-out จนบรษทลมละลา</p>
      </div>

    </div>
  );
}

export default Home;
