import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR2fTceZ6u60ys4weS2uYCNS72yDoB0LekJDejgslGkk3CH8xiYyIWj_fmA"
          alt=""
        />
        <div className="home_row">
        <Product 
        id="12321341"
        title="The lean startup"
                 price={29.99}
                 image= "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                 rating={5} />
          <Product 
                  id="4903850"
                  title="Kenwood kMix stand Mixer for Baking, stylish Kitchen Mixer with K-beater, dough Hook and whisk,5 Litre Glass Bowl"
                           price={239}
                           image= "https://cdn.shopify.com/s/files/1/0087/7261/6269/products/kenbwood-mixer-kmx754rd_1000x1000.jpg?v=1573028674"
                           rating={3} />
        </div>
        <div className="home_row">
        <Product 
                          id="23445920"
                          title="Apple Led watch Black"
                                   price={519.67}
                                   image= "https://assets.kogan.com/images/rockjoy/RKJ-GB31641/2-8719c3b929-153131-5412.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753"
                                   rating={4} />
        <Product 
                                  id="12345678"
                                  title="Amazon Echo(3rd Generation) Black"
                                           price={48}
                                           image= "data:image/jpeg;base64,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"
                                           rating={2} />
        <Product 
                                           id="12345765"
                                           title="New Apple ipad Pro"
                                                    price={408}
                                                    image= "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-og-202003?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1583201083141"
                                                    rating={2} />
        </div>
        <div className="home_row"></div>
      </div>
    </div>
  );
}

export default Home;
