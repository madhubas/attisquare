import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="contents">
            <div className="first">
              <div className="imgBx">
                <img src="https://st3.depositphotos.com/6759912/14370/i/600/depositphotos_143708067-stock-photo-shawarma-sandwich-on-dark-background.jpg" />
              </div>
              <div className="contentBx">
                <h3>Att!'s Shawarma</h3>
                {/* <p>₹49</p> */}
              </div>
            </div>

            <div className="second">
              <h2 className="price"> ₹49 </h2>
              <h3>Att!'s Shawarma</h3>
              <p>
                Slow cooked tender chicken with veggies and lots of mayo
                <span className="col-md-3 col-sm-3 col-xs-6">
                  {" "}
                  <a href="#" className="btn btn-sm animated-button thar-three">
                    Read More
                  </a>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="contents">
            <div className="first">
              <div className="imgBx">
                <img src="https://media.istockphoto.com/photos/chicken-wrap-picture-id888366454?k=6&m=888366454&s=612x612&w=0&h=P0w-97Q5ljBt4Wztx30JCbiqayHIgne8Hw95-M8MQZE=" />
              </div>
              <div className="contentBx">
                <h3> Shawarma Mex!cano </h3>
                {/* <p> ₹59 </p> */}
              </div>
            </div>

            <div className="second">
              <h2 className="price"> ₹59 </h2>
              <h3>Shawarma Mex!cano </h3>
              <p>
                Chicken Shawarma with dash of Mexican Spices Instant foodgasm
                guaranteed
                <span className="col-md-3 col-sm-3 col-xs-6">
                  {" "}
                  <a href="#" className="btn btn-sm animated-button thar-three">
                    Read More
                  </a>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="contents">
            <div className="first">
              <div className="imgBx">
                <img src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/Chicken_Shwarma_Recipe__400.jpg" />
              </div>
              <div className="contentBx">
                <h3> Rumali Shawarma</h3>
                {/* <p> ₹59 </p> */}
              </div>
            </div>

            <div className="second">
              <h2 className="price"> ₹59 </h2>
              <h3> Rumali Shawarma </h3>
              <p>
                Special Americano flavor with pinch of oregano directly landed
                from wild west
                <span className="col-md-3 col-sm-3 col-xs-6">
                  {" "}
                  <a href="#" className="btn btn-sm animated-button thar-three">
                    Read More
                  </a>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="contents">
            <div className="first">
              <div className="imgBx">
                <img src="https://st3.depositphotos.com/6759912/14370/i/600/depositphotos_143708067-stock-photo-shawarma-sandwich-on-dark-background.jpg" />
              </div>
              <div className="contentBx">
                <h3>SPL Chicken Shawarma in KUBZ</h3>
                {/* <p> ₹69 </p> */}
              </div>
            </div>

            <div className="second">
              <h2 className="price"> ₹69 </h2>
              <h3> SPL Chicken Shawarma in KUBZ </h3>
              <p>
                Where there is smoke,there is flavor.Texas style sauce with kick
                <span className="col-md-3 col-sm-3 col-xs-6">
                  {" "}
                  <a href="#" className="btn btn-sm animated-button thar-three">
                    Read More
                  </a>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="contents">
            <div className="first">
              <div className="imgBx">
                <img src="https://media.istockphoto.com/photos/chicken-wrap-picture-id888366454?k=6&m=888366454&s=612x612&w=0&h=P0w-97Q5ljBt4Wztx30JCbiqayHIgne8Hw95-M8MQZE=" />
              </div>
              <div className="contentBx">
                <h3> SPL Chicken Shawarma in RUMALI </h3>
                {/* <p>₹89 </p> */}
              </div>
            </div>

            <div className="second">
              <h2 className="price"> ₹89 </h2>
              <h3>SPL Chicken Shawarma in RUMALI </h3>
              <p>
                Rich creamy rumali flavor with cheese. Dive in Mediterranean
                style
                <span className="col-md-3 col-sm-3 col-xs-6">
                  {" "}
                  <a href="#" className="btn btn-sm animated-button thar-three">
                    Read More
                  </a>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="contents">
            <div className="first">
              <div className="imgBx">
                <img src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/Chicken_Shwarma_Recipe__400.jpg" />
              </div>
              <div className="contentBx">
                <h3>Shawarma Platter</h3>
                {/* <p> ₹109 </p> */}
              </div>
            </div>

            <div className="second">
              <h2 className="price"> ₹109 </h2>
              <h3> Shawarma Platter </h3>
              <p>
                Its spicy, saucy, sassy.Blend of mexican and sweet chill with
                oozing cheese
                <span className="col-md-3 col-sm-3 col-xs-6">
                  {" "}
                  <a href="#" className="btn btn-sm animated-button thar-three">
                    Read More
                  </a>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
