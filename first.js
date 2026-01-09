import React from "react";
import ReactDOM from "react-dom/client"

function Card(props){
 return(
      <div style={{border:"4px solid black", padding:"4px",backgroundColor:"green"}}>
          <img src ={props.link} height="300px" width="300px"/>
      <div style={{textAlign:"center", backgroundColor:"green"}}>
           <h2>{props.cloth}</h2>
           <h1>{props.offer}</h1>
           <h2>Shop now</h2>
      </div>

      </div>
      
 )

}
function Header() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "20px 0",
        textAlign: "center",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}
    >
      {/* Myntra Brand */}
      <h1
        style={{
          margin: "0",
          letterSpacing: "6px",
          fontWeight: "bold",
          fontFamily: "cursive"
        }}
      >
        MYNTRA
      </h1>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "15px",
          fontSize: "16px"
        }}
      >
        <span>MEN</span>
        <span>WOMEN</span>
        <span>KIDS</span>
        <span>HOME & LIVING</span>
        <span>BEAUTY</span>
        <span>STUDIO</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
        marginTop: "50px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          textAlign: "center",
          gap: "20px"
        }}
      >
        {/* Company Info */}
        <div>
          <h3>MYNTRA</h3>
          <p>Fashion & Lifestyle Store</p>
          <p>Email: myntrahelp@gmail.com</p>
          <p>Customer Care: +91 98765 43210</p>
        </div>

        {/* Address */}
        <div>
          <h3>Company Address</h3>
          <p>Myntra Designs Pvt. Ltd.</p>
          <p>Bangalore, Karnataka</p>
          <p>India - 560103</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3>Quick Links</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        {/* Social */}
        <div>
          <h3>Follow Us</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>
      </div>

      {/* Bottom Line */}
      <hr style={{ margin: "30px 0", borderColor: "gray" }} />

      <p style={{ textAlign: "center", fontSize: "14px" }}>
        © 2026 MYNTRA Clone | All Rights Reserved
      </p>
    </div>
  );
}

function App(){
    return(
        <div>
         <Header/>
        <div style={{display:"flex", gap:"30px", flexWrap:"wrap"}}>
            <Card cloth="T-shirt" offer="20 to 80% Off" link="https://m.media-amazon.com/images/I/91V5ZtebogL._AC_UY1100_.jpg"/>
            <Card cloth="Jens" offer="20 to 70% Off" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoB7tY28tZ7NIUTPFzaoh_VIWVYJ87CZqATw&s"/>
            <Card cloth="Shirt" offer="10 to 40% Off" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDVQFcn5TLud1ZTnJIAlDXvpoZ-dHu5LY3g&s"/>
            <Card cloth="Kurta" offer="20 to 50% Off" link="https://www.manyavar.com/dw/image/v2/BJZV_PRD/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw3f97cca9/How%20to%20Style%20a%20Kurta%20for%20a%20Wedding%20Party%20Dos%20and%20Don%E2%80%99ts_Blog_2_D_M.jpg"/>
            <Card cloth="Pant" offer="20 to 80% Off" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEe65J1ViKmpEddKe89xtkc-qMABl_i-K3g&s"/>
            <Card cloth="Tops" offer="20 to 30% Off" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglNKpjb3k3Gf1axb8FlG5IUi3S4GZGJxF-w&s"/>
            <Card cloth="Kurti" offer="20 to 60% Off" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBM254wsIZQkKvZUmrLXDe21f36CrKen4zg&s"/>
            <Card cloth="Shoose" offer="20 to 80% Off" link="https://images-cdn.ubuy.co.in/63659bbfc67034177a40420b-damyuan-running-shoes-men-fashion.jpg"/>
            <Card cloth="Watch" offer="20 to 30% Off" link="https://www.jiomart.com/images/product/500x630/rvlljtoouz/iloz-luxury-new-elegant-look-classique-rose-gold-white-square-design-women-watches-ladies-crystal-bracelet-belt-watch-female-analog-wrist-watches-for-girls-product-images-rvlljtoouz-0-202405062308.jpg"/>
            <Card cloth="Suit" offer="10 to 40% Off" link="https://ethenika.com/cdn/shop/files/13800C1A-5DDC-4285-BEFD-AF99AC37CB66.jpg?v=1742985420"/>
            <Card cloth="Slipper" offer="20 to 50% Off" link="https://heelsshoes.pk/cdn/shop/files/IMG_3579_17e87e75-42a6-4de0-b268-87454209ed17.jpg?v=1757061144&width=500"/>
            <Card cloth="Night Suit" offer="20 to 80% Off" link="https://images.meesho.com/images/products/466833967/empv1_512.webp?width=512"/>
            <Card cloth="Stroll" offer="20 to 30% Off" link="https://m.media-amazon.com/images/I/41b793pqUNL._AC_UY1100_.jpg"/>
            <Card cloth="Hand Bag" offer="20 to 60% Off" link="https://m.media-amazon.com/images/I/81NjtK8cZZL._AC_UY1100_.jpg"/>
            
            
        </div>
        <Footer/>
        </div>
       
    )
}


const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(<App/>);