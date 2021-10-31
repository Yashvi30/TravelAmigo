import React from "react";
import SliderCarousel from "./SliderCarousel";
import Images from "../src/assets/image/img1.jpg";
import Images13 from "../src/assets/image/img13.jpg";
// import Images2 from "../src/assets/image/img2.jpg";
// import Images3 from "../src/assets/image/img3.jpg";
import Images4 from "../src/assets/image/img4.jpg";
import Images5 from "../src/assets/image/img5.jpg";
import Images6 from "../src/assets/image/img6.jpg";
import Images7 from "../src/assets/image/img7.jpg";
// import Images8 from "../src/assets/image/img8.jpg";
import Images9 from "../src/assets/image/img9.jpg";
// import Images10 from "../src/assets/image/img10.jpg";
// import Images11 from "../src/assets/image/img11.jpg";
// import Images12 from "../src/assets/image/img12.jpg";
// import Images from "../src/assets/image/img1.jpg";
// import Images from "../src/assets/image/img1.jpg";
// import Kolkata from "../src/assets/image/kolkata.jpeg";
import Mussoorie from "../src/assets/image/mussoorie.jpeg";
// import Varanasi from "../src/assets/image/varanasi.jpeg";
// import Kanpur from "../src/assets/image/kanpur.jpeg";
// import Jaipur from "../src/assets/image/jaipur.jpeg";
// import Patiala from "../src/assets/image/patiala.jpeg";
import Nasik from "../src/assets/image/nasik.jpeg";
// import Pune from "../src/assets/image/pune.jpeg";
// import Mumbai from "../src/assets/image/mumbai.jpeg";

const Home = () => {
  return (
    <>
      {/* carousel */}
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="col-md-10 col-10 mx-auto">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Images} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Nasik} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Mussoorie} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      {/* popular in India */}
      <section class="gallery" id="gallery">
        <h1 class="heading">Popular in INDIA</h1>
        <div class="box-container">
          <div class="box">
            <img src={Images13} alt="" />
            <div class="content">
              <h3>Food</h3>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, tenetur.
              </p> */}
            </div>
          </div>
          <div class="box">
            <img src={Images9} alt="" />
            <div class="content">
              <h3>Jama Masjid</h3>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, tenetur.
              </p> */}
            </div>
          </div>
          <div class="box">
            <img src={Images4} alt="" />
            <div class="content">
              <h3>Crafts</h3>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, tenetur.
              </p> */}
            </div>
          </div>
          <div class="box">
            <img src={Images5} alt="" />
            <div class="content">
              <h3>Konark temple</h3>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, tenetur.
              </p> */}
            </div>
          </div>
          <div class="box">
            <img src={Images6} alt="" />
            <div class="content">
              <h3>Festivals</h3>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, tenetur.
              </p> */}
            </div>
          </div>
          <div class="box">
            <img src={Images7} alt="" />
            <div class="content">
              <h3>Taj Mahal</h3>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, tenetur.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      {/* slider carousel */}
      <h1 class="sliderheading">Places to visit</h1>
      <SliderCarousel />
      {/* blogs */}
      <h1 class="blogheading">Blogs</h1>
      <div class="container">
        <div class="card">
          <div class="card-header">
            <img
              src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
              alt="rover"
            />
          </div>
          <div class="card-body">
            <span class="tag tag-teal">Trips</span>
            <h4>A day trip to Chittorgarh from Udaipur</h4>
            <p>
              Plan a one day trip to Chittorgarh Fort, when deciding on an
              itinerary. The Chittorgarh Fort is the biggest fort in India, with
              magnificent architecture and vibrant and exciting history.
            </p>
            <div class="user">
              <img
                src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                alt="user"
              />
              <div class="user-info">
                <h5>July Dec</h5>
                <small>2h ago</small>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img
              src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg"
              alt="ballons"
            />
          </div>
          <div class="card-body">
            <span class="tag tag-purple">Popular</span>
            <h4>Come Observe the Machattu Mamangam to be flabbergasted!</h4>
            <p>
              It is famous for its cultural events like Horse effigy, Chenda
              melam, Elephant walk and so on...
            </p>
            <div class="user">
              <img
                src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                alt="user"
              />
              <div class="user-info">
                <h5>Eyup Ucmaz</h5>
                <small>Yesterday</small>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img
              src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
              alt="city"
            />
          </div>
          <div class="card-body">
            <span class="tag tag-pink">News</span>
            <h4>Post Covid - 19 : Changing Dynamics Of Travel</h4>
            <p>
              With the horrendous incidence of Covid 19 intrusion the whole
              travel paradigm has changed. With the widespread occurrence of
              this malicious virus we are changing all aspects of our lives.
            </p>
            <div class="user">
              <img
                src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
                alt="user"
              />
              <div class="user-info">
                <h5>Carrie Brewer</h5>
                <small>1w ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
