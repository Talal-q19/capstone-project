import logo from "./macbookpro.jpeg"
import logo2 from"./applelogo1.png"


function Hero(){
    return(
        <div class="px-4 py-5 my-5 text-center">
  <img className src={logo2} alt="" width="100" height="100"/>
  <h1 class="display-5 fw-bold">iStyling with us...</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">Store. The best way to buy the products you love.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Explore more to the world of products.</button>
    </div>
  </div>


<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
  <div class="col-md-5 p-lg-5 mx-auto my-5">
 
     <img ClassName src={logo} alt="" width="350" height="400"  />
    <h1 class="display-4 fw-normal">MacBook Pro 13 </h1>
    <p class="lead fw-normal">The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera, and studio‑quality mics, it’s our most portable pro laptop.</p>
    <a class="btn btn-outline-secondary" href="https://www.apple.com/ae/?afid=p238%7CsCA430sw2-dc_mtid_187079nc38483_pcrid_602264686509_pgrid_29373215933_pntwk_g_pchan__pexid__&cid=aos-ae-kwgo-brand--slid--bran-product-">Coming soon</a>
  </div>
  <div class="product-device shadow-sm d-none d-md-block"></div>
  <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
</div>

</div>

    )
}
export default Hero;