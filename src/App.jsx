import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="hero">
          <h1>BOXCARS</h1>
          <div className="hero1">
            <ul>
              <a href=""> Home</a>
              <a href="">Listings</a>
              <a href="">Blog</a>
              <a href="">Pages</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Sign in</a>
            </ul>
            <button>Submit Listing</button>
          </div>
        </div>
        <div className="main">
          <div className="info">
            <p>Find cars for sale and for rent near you</p>
            <h1>Find Your Perfect Car</h1>
            <div className="search-wrapper">
              <form className="main-search-bar">
                <div className="search-section">
                  <span className="label">Any Makes</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>

                <div className="search-section border-left">
                  <span className="label">Any Models</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>

                <div className="search-section border-left">
                  <span className="label">
                    Prices: <span className="bold-text">All Prices</span>
                  </span>
                </div>

                <button type="submit" className="search-submit-btn">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  Search Cars
                </button>
              </form>
            </div>
            <p className="or">Or Browse Featured Model</p>
            <div className="buts">
              <button>Suv</button>
              <button>Sedan</button>
              <button>Hatchback</button>
              <button>Coupe</button>
              <button>Hybrid</button>
            </div>
          </div>
        </div>
      </div>
      <div className="page1">
        <div className="explore">
          <h1>Explore Our Premium Brands</h1>
          <p>Show All Brands</p>
        </div>
        <div className="flexbox">
          <div className="flex">
            <div className="main_img">
              <img src="public/imgs/b1.jpg.png" alt="" />
            </div>
            <p>Audi</p>
          </div>
          <div className="flex">
            <div className="main_img">
              <img src="public/imgs/b2.jpg.png" alt="" />
            </div>
            <p>BMW</p>
          </div>
          <div className="flex">
            <div className="main_img">
              <img src="public/imgs/b3.jpg.png" alt="" />
            </div>
            <p>Ford</p>
          </div>
          <div className="flex">
            <div className="main_img">
              <img src="public/imgs/b4.jpg.png" alt="" />
            </div>
            <p>Mercedes Benz</p>
          </div>

          <div className="flex">
            <div className="main_img">
              <img src="public/imgs/b5.jpg.png" alt="" />
            </div>
            <p>Peugeot</p>
          </div>

          <div className="flex">
            <div className="main_img">
              <img src="public/imgs/Link(1).png" alt="" />
            </div>
          </div>
        </div>
        <div className="type">
          <div className="vehicle">
            <h1>Explore All Vehicles</h1>
            <p>View All</p>
          </div>
          <div className="type1">
            <h3>In Stock</h3>
            <h3>New Cars</h3>
            <h3>Used Cars</h3>
          </div>
          <div className="box">
            <div className="box1">
              <div className="img">
                <img src="public/imgs/Container.png" alt="" />
              </div>
              <p className="shelby">Ford Transit – 2021</p>
              <p className="shelby">
                4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate
              </p>
              <div className="dissel">
                <img src="public/imgs/Vector(4).png" alt="" />
                <img src="public/imgs/Icon(1).svg" alt="" />
                <img src="public/imgs/Icon(1).png" alt="" />
              </div>
              <div className="dissel1">
                <p>2500 Miles</p>
                <p>Diesel</p>
                <p>Manual</p>
              </div>
              <div className="foot">
                <p className="price">$22,000</p>
                <p>View Details</p>
              </div>
            </div>
            <div className="box1">
              <div className="img">
                <img src="public/imgs/Container(1).png" alt="" />
              </div>
              <p className="shelby">Ford Transit – 2021</p>
              <p className="shelby">
                4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate
              </p>
              <div className="dissel">
                <img src="public/imgs/Vector(4).png" alt="" />
                <img src="public/imgs/Icon(1).svg" alt="" />
                <img src="public/imgs/Icon(1).png" alt="" />
              </div>
              <div className="dissel1">
                <p>50 Miles</p>
                <p>Petrol</p>
                <p>Automatic</p>
              </div>
              <div className="foot">
                <p className="price">$95,000</p>
                <p>View Details</p>
              </div>
            </div>

            <div className="box1">
              <div className="img">
                <img src="public/imgs/Container(2).png" alt="" />
              </div>
              <p className="shelby">Ford Transit – 2021</p>
              <p className="shelby">
                4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate
              </p>
              <div className="dissel">
                <img src="public/imgs/Vector(4).png" alt="" />
                <img src="public/imgs/Icon(1).svg" alt="" />
                <img src="public/imgs/Icon(1).png" alt="" />
              </div>
              <div className="dissel1">
                <p>100 Miles</p>
                <p>Petrol</p>
                <p>Automatic</p>
              </div>
              <div className="foot">
                <p className="price">$58,000</p>
                <p>View Details</p>
              </div>
            </div>

            <div className="box1">
              <div className="img">
                <img src="public/imgs/Container(3).png" alt="" />
              </div>
              <p className="shelby">Ford Transit – 2021</p>
              <p className="shelby">
                4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate
              </p>
              <div className="dissel">
                <img src="public/imgs/Vector(4).png" alt="" />
                <img src="public/imgs/Icon(1).svg" alt="" />
                <img src="public/imgs/Icon(1).png" alt="" />
              </div>
              <div className="dissel1">
                <p>15000 Miles</p>
                <p>Petrol</p>
                <p>Automatic</p>
              </div>
              <div className="foot">
                <p className="price">$45,000</p>
                <p>View Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page3">
        <div className="black">
          <div className="black_car">
            <img src="public/imgs/Background(1).png" alt="" />
          </div>
          <div className="right_side">
            <div className="maininfo">
              <h1>Get A Fair Price For Your Car Sell To Us Today</h1>
              <p>
                We are committed to providing our customers with exceptional
                service, competitive pricing, and a wide range of.
              </p>
              <p>
                <i class="fa-solid fa-check"></i> We are the UK’s largest
                provider, with more patrols in more places
              </p>
              <p>
                <i class="fa-solid fa-check"></i> You get 24/7 roadside
                assistance
              </p>
              <p>
                <i class="fa-solid fa-check"></i> We fix 4 out of 5 cars at the
                roadside
              </p>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <div className="metr">
          <h1>836M</h1>
          <h1>738M</h1>
          <h1>100M</h1>
          <h1>238M</h1>
        </div>
        <div className="sale">
          <p>CARS FOR SALE</p>
          <p>DEALER REVIEWS</p>
          <p>VISITORS PER DAY</p>
          <p>VERIFIED DEALERS</p>
        </div>
        <div className="offers">
          <h1>Why Choose Us?</h1>
          <div className="cover">
            <div className="cover1">
              <div className="vector">
                <img src="public/imgs/f1.svg.png" alt="" />
              </div>
              <h3>Special Financing Offers</h3>
              <p>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>

            <div className="cover1">
              <div className="vector">
                <img src="public/imgs/f2.svg.png" alt="" />
              </div>
              <h3>Trusted Car Dealership</h3>
              <p>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>

            <div className="cover1">
              <div className="vector">
                <img src="public/imgs/f3.svg.png" alt="" />
              </div>
              <h3>Transparent Pricing</h3>
              <p>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>

            <div className="cover1">
              <div className="vector">
                <img src="public/imgs/f4.svg.png" alt="" />
              </div>
              <h3>Expert Car Service</h3>
              <p>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page4">
        <div className="all">
          <h1>Popular Makes</h1>
          <p>View All</p>
        </div>
        <hr />
        <div className="marka">
          <p>Audi</p>
          <p>Ford</p>
          <p>Mercedes Benz</p>
        </div>
        <div className="deepinfo">
          <div className="deep">
            <div className="audi">
              <img src="public/imgs/Container(4).png" alt="" />
            </div>
            <div className="audiinfo">
              <h3>Audi A5 – 2023</h3>
              <p>2.0 D5 PowerPulse Momentum 5dr AWD… Geartronic Estate</p>
              <p>500 Miles</p>
              <p>Petrol</p>
              <p>Automatic</p>
              <p>$50,000</p>
            </div>
          </div>
          <div className="deep">
            <div className="audi">
              <img src="public/imgs/car20-640x550.jpg.png" alt="" />
            </div>
            <div className="audiinfo">
              <h3>Audi A5 – 2023</h3>
              <p>2.0 D5 PowerPulse Momentum 5dr AWD… Geartronic Estate</p>
              <p>500 Miles</p>
              <p>Petrol</p>
              <p>Automatic</p>
              <p>$50,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page5">
        <div className="shop">
          <h1>Shop BoxCar Your Way</h1>
          <p>View More</p>
        </div>
        <div className="shop1">
          <p>New Cars For Sale</p>
          <p>Used Cars For Sale</p>
          <p>Browse By Type</p>
          <p>Browse By Brand</p>
        </div>
        <div className="variety">
          <div className="china">
            <p>Ford Cars</p>
            <p>Honda Cars</p>
            <p>Hyundai Cars</p>
            <p>Infiniti Cars</p>
            <p>Jaguar Cars</p>
            <p>Jeep Cars</p>
          </div>
          <div className="china">
            <p>Chrysler Cars</p>
            <p>Citroen Cars</p>
            <p>Cupra Cars</p>
            <p>Dacia Cars</p>
            <p>DS Cars</p>
            <p>Fiat Cars</p>
          </div>
          <div className="china">
            <p>Land Rover Cars</p>
            <p>Lexus Cars</p>
            <p>Mercedes-Benz Cars</p>
            <p>Mazda Cars</p>
            <p>MG Cars</p>
            <p>Kia Cars</p>
          </div>
          <div className="china">
            <p>Abarth Cars</p>
            <p>Romeo Cars</p>
            <p>Audi Cars</p>
            <p>Bentley Cars</p>
            <p>BMW Cars</p>
            <p>Chevrolet Cars</p>
          </div>
          <div className="china">
            <p>Mini Cars</p>
            <p>Mitsubishi Cars</p>
            <p>Nissan Cars</p>
            <p>Peugeot Cars</p>
            <p>Porsche Cars</p>
            <p>Renault Cars</p>
          </div>
        </div>
      </div>
      <div className="page6">
        <div className="custom">
          <h1>What our customers say</h1>
          <p>
            Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
          </p>
        </div>
        <div className="man">
          <div className="owner">
            <img src="public/imgs/Container(5).png" alt="" />
          </div>
          <div className="own">
            <div className="span">
              <span>
                <i class="fa-regular fa-star"></i>
              </span>
              <span>
                <i class="fa-regular fa-star"></i>
              </span>
              <span>
                <i class="fa-regular fa-star"></i>
              </span>
              <span>
                <i class="fa-regular fa-star"></i>
              </span>
              <span>
                <i class="fa-regular fa-star"></i>
              </span>
            </div>
            <h3>Ali TUFAN</h3>
            <p>Designer</p>
            <h2>
              I'd suggest Macklin Motors Nissan Glasgow South to a friend
              because I had great service from my salesman Patrick and all of
              the team.
            </h2>
          </div>
        </div>
      </div>
      <div className="page7">
        <div className="post">
          <h1>Latest Blog Posts</h1>
          <p>View All</p>
        </div>
        <div className="column">
          <div className="bmw">
            <div className="bmwimg">
              <img src="public/imgs/Container(6).png" alt="" />
            </div>
            <div className="admin">
              <p>admin</p>
              <p>November 22, 2023</p>
            </div>
            <h3>2024 BMW ALPINA XB7 with exclusive details, extraordinary</h3>
          </div>
          <div className="bmw">
            <div className="bmwimg">
              <img src="public/imgs/Container(7).png" alt="" />
            </div>
            <div className="admin">
              <p>admin</p>
              <p>November 22, 2023</p>
            </div>
            <h3>BMW X6 M50i is designed to exceed your sportiest.</h3>
          </div>
          <div className="bmw">
            <div className="bmwimg">
              <img src="public/imgs/Figure → Link.png" alt="" />
            </div>
            <div className="admin">
              <p>admin</p>
              <p>November 22, 2023</p>
            </div>
            <h3>BMW X5 Gold 2024 Sport Review: Light on Sport</h3>
          </div>
        </div>
        <div className="general">
          <div className="logo">
            <h1>Are You Looking For a Car ?</h1>
            <p>
              We are committed to providing our customers with exceptional
              service.
            </p>
            <div className="left">
              <button>Get Started</button>
              <img src="public/imgs/electric-car.svg fill.png" alt="" />
            </div>
          </div>
          <div className="logos">
            <h1>Are You Looking For a Car ?</h1>
            <p>
              We are committed to providing our customers with exceptional
              service.
            </p>
            <div className="left">
              <button className="btn">Get Started</button>
              <img src="public/imgs/electric-car2.svg fill.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="lastpart">
        <div className="part">
          <h2>Join BoxCar</h2>
          <div className="newsletter-container">
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="Your email address"
                className="email-input"
              />{" "}
              {/* <--- Мана шу ерда ёпиш керак */}
              <button type="submit" className="signup-btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="company">
          <div className="comp">
            <h2>Company</h2>
            <p>About Us</p>
            <p>Blog</p>
            <p>Services</p>
            <p>FAQs</p>
            <p>Terms</p>
            <p>Contact Us</p>
          </div>
          <div className="comp">
            <h2>Quick Links</h2>
            <p>Get in Touch</p>
            <p>Help center</p>
            <p>Live chat</p>
            <p>How it works</p>
          </div>
          <div className="comp">
            <h2>Our Brands</h2>
            <p>Toyota</p>
            <p>Porsche</p>
            <p>Audi</p>
            <p>BMW</p>
            <p>Ford</p>
            <p>Nissan</p>
            <p>Peugeot</p>
            <p>Volkswagen</p>
          </div>
          <div className="comp">
            <h2>Vehicles Type</h2>
            <p>Sedan</p>
            <p>Hatchback</p>
            <p>SUV</p>
            <p>Hybrid</p>
            <p>Electric</p>
            <p>Coupe</p>
            <p>Truck</p>
            <p>Convertible</p>
          </div>
          <div className="comp">
            <h2>Our Mobile App</h2>
            <button>
              <i class="fa-brands fa-apple"></i> Download on the Apple Store
            </button>
            <button>
              <i class="fa-brands fa-google-play"></i> Get in on Google Play
            </button>
            <h2>Connect With Us</h2>
            <div className="app">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        <hr />
        <div className="year">
          <p>© 2024 exemple.com. All rights reserved.</p>
          <p>Terms & Conditions Privacy Notice</p>
        </div>
      </div>
    </div>
  );
}

export default App;
