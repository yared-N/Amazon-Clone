import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-3196_HOL20_Acquisition/Amazon_GW_DesktopTallHero_ENG_RB-3196_HOL20_v2_Acquisition_1500x600._CB415330765_.jpg" 
          alt=""
        />
        <div className="home__row">
            <Product 
            id="12321341"
            title="Autel Robotics 600000668 EVO Drone Camera with Free On-The-Go Bundle ($220 Value), Limited Time Offer, While Supplies Last"
            price={1145.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81V3H9o3IzL._AC_SL1500_.jpg"
            />
            <Product
            id="49538094"
            title="New Apple iMac Pro (27-inch, 3.0GHz 10-core Intel Xeon W Processor, 32GB RAM, 1TB SSD Storage)"
            price={4999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71PDNyTXIzL._AC_SL1500_.jpghttps://images-na.ssl-images-amazon.com/images/I/71PDNyTXIzL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="NordicTrack Commercial Studio Cycle"
            price={1799.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/712W%2BtWTcAL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Canon XA11 Professional Camcorder"
            price={1299.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71OLwdP4NoL._AC_SL1500_.jpg"
          />
        </div>
        
        
        <div className="home__row">
          <Product
            id="90829332"
            title="LG 75NANO99UNA Alexa BuiltIn NanoCell 99 Series 75Inch with Gallery Design 8K Smart UHD NanoCell TV 2020"
            price={3996.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81UUkAnJrFL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
              id="4903850"
              title="HELM True Wireless Bluetooth 5.0 Earbuds, w/Charging Case, Dual Mics, Auto-Pairing"
              price={129.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71y4aC4M9EL._AC_SX679_.jpg"
            />
            <Product
              id="23445930"
              title="Ecovacs Deebot T8 Robot Vacuum & Mop Cleaner with Advanced Object Detection and Avoidance, Laser Navigation & Multi-Floor Mapping, Customize Clean, Ideal for Hard Floors and Carpet, 3 Hrs Runtime"
              price={549.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51HzVjO94LL._AC_SL1000_.jpg"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
        </div>
        </div>
            
        </div>
    )
}

export default Home
