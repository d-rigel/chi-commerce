import React from "react" 
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
             src="https://www.tailorbrands.com/wp-content/uploads/2018/07/Screen-Shot-2019-09-26-at-11.27.45.png" 
             alt="" 
              />

              <div className="home__row">
                  <Product
                    id="hew773od"
                    title="Double drawn bouncy curl"
                    price={3000}
                    rating={5}
                    image="https://res.cloudinary.com/dmz3lqu6k/image/upload/v1608666373/IMG-20201221-WA0007_1_krw7lo.jpg"
                  />
                  <Product
                    id="8937fhq0"
                    title="Fringed burgundy curly wig"
                    price={2500}
                    rating={4}
                    image="https://res.cloudinary.com/dmz3lqu6k/image/upload/v1608666373/IMG-20201221-WA0004_tx5s12.jpg"
                  />
                  <Product
                  id="ierpoerj"
                  title="Long wavy wig"
                  price={3500}
                  rating={2}
                  image="https://res.cloudinary.com/dmz3lqu6k/image/upload/v1608666372/IMG-20201221-WA0003_efukbh.jpg"
                />
                  
              </div>

              <div className="home__row">
                <Product
                  id="y3n4593"
                  title="Long curly wig"
                  price={7500}
                  rating={5}
                  image="https://res.cloudinary.com/dmz3lqu6k/image/upload/v1608666374/IMG-20201221-WA0008_d1nh29.jpg"
                />
                <Product
                  id="6n42o9"
                  title="Fringed kinky curls"
                  price={3000}
                  rating={5}
                  image="https://res.cloudinary.com/dmz3lqu6k/image/upload/v1608666373/IMG-20201221-WA0009_xkk2hj.jpg"
                />
                <Product
                  id="643yurk"
                  title="Short water curls wig"
                  price={5000}
                  rating={3}
                  image="https://res.cloudinary.com/dmz3lqu6k/image/upload/v1608666375/IMG-20201221-WA0011_f8wjwp.jpg"
                />
                
              </div>

              <div className="home__row">
              <Product
                  id="5468393"
                  title="Fringed... wig"
                  price={4000}
                  rating={3}
                  image="https://res.cloudinary.com/dmz3lqu6k/image/upload/v1608666372/IMG-20201221-WA0001_j7nk3x.jpg"
                />
                <Product
                  id="m9n3b6"
                  title="Long.... wig"
                  price={7000}
                  rating={4}
                  image="https://res.cloudinary.com/dmz3lqu6k/image/upload/v1608666374/IMG-20201221-WA0010_uhdjua.jpg"
                />
              </div>
        </div>
    )
}

export default Home