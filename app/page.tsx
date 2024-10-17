import Image from "next/image";
import AboutPage from "./about/page";
function Myname(){
  return (
    <h1>Masfa ghori</h1>
  )
}

function ABC () {
  return (
      <h1>CSS</h1>
  )
}

 function page () {
  return (
    <h1>contact as Masfa</h1>
  )
 }

 function Home () {
  return (
  <div>
    <h1>Hello world</h1>
      <Myname/>
     <ABC/>
     
  </div>);
}

  export default Home