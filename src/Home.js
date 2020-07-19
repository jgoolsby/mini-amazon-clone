import React from 'react'
import './Home.css';
import Product from './Product';
export default function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            <div className="home__row">
                <Product
                    id='9812737893'
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />

                <Product
                    id='9812737893'
                    title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
                    price={168.95}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SX679_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id='9812737893'
                    title="Panasonic Lumix FZ80 4K Digital Camera, 18.1 Megapixel Video Camera, 60X Zoom DC VARIO 20-1200mm Lens, F2.8-5.9 Aperture"
                    price={297.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/917LEZ%2Bit3L._AC_SX522_.jpg"
                />
                <Product
                    id='9812737893'
                    title="darkFlash Phantom Black ATX Mid-Tower Desktop Computer Gaming Case USB 3.0 Ports Tempered Glass Windows"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71pauXP-50L._AC_SX679_.jpg"
                />

                <Product
                    id='9812737893'
                    title="The Holographic Universe: The Revolutionary Theory of Reality Paperback"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51jh8IY3Y1L._SX329_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id='9812737893'
                    title="Sceptre 34-inch Curved UltraWide 21: 9 Creative LED Monitor 2560x1080 Frameless HDMI DisplayPort"
                    price={299.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/817TtPObqrL._AC_SX679_.jpg"
                />

            </div>
        </div>
    )
}
