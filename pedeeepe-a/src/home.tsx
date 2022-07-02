import './styles/home.css'
import logo from'./image/logo.png'
import tiger from './image/tiger.gif'

export function Home() {
  return (
    <>
      <img class="logo-img" 
      src={logo} alt="Logo" />
      
      <h1>STUPID HACKATON SCHOOL</h1>
      <marquee>ยินดีต้อนรับสู่เว็ปไซต์......สถานศึกษาสตูปิดแฮคคาตอน.......สถาบันเพื่อโปรแกรมเมอร์</marquee>
      <div class="topnav">
      <a href="#home">Home</a>
      <a href="#home">Home</a>
      <a href="#home">Home</a>
      <a href="#home">Home</a>
      <a href="#home">Home</a>
      <a href="#home">Home</a>
      <a href="#home">Home</a>
      <a href="#home">Home</a>
</div> 

    <div className="image-container"> 
      <img src={tiger} alt="tiger"/>
      <img src={tiger} alt="tiger"/>
    </div>
    </>
  );
}

export default Home;