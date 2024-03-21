import React from 'react';
import ShowcaseItem from '../components/showcase'
import FeatureBox from '../components/featureBox'

const mainPage = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <h1 className="logo lg-heading text-light">WT</h1>
            <ul className="nav-items">
              <li className="nav-item"><a href="/">Home</a></li>
              <li className="nav-item"><a href="/about">About</a></li>
              <li className="nav-item"><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div className="header-content">
          <h1 className="lg-heading text-light main-heading">travel the world</h1>
          <p className="text-light">travel the world, experience the greatness, it's the best gift given by nature</p>
          <a href="#" className="btn btn-primary text-red md-heading">Explore Places</a>
        </div>
      </header>

      <section className="showcase">
        <div className="container">
        <ShowcaseItem
        imageName="showcase-photo3.jpg"
        heading="DEGANVY, U.K"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet pariatur maiores, id quis, totam dolore praesentium facere consequatur rem, fuga minus! Rerum, dolorem praesentium. Nemo?"
        link="/about"
        reverse={false}
      />

      <ShowcaseItem
  imageName="showcase-photo1.jpg"
  heading="DESERT, EGYPT"
  text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet ratione, quas laborum porro, explicabo vero ipsum laudantium nesciunt eos illum pariatur obcaecati fugiat asperiores nulla adipisci. Porro, atque itaque."
  link="/about"
  // reverse={true}
  reverse={false}
/>

        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="box-wrapper">
          <FeatureBox
  iconClass="fa-route"
  heading="Adventure"
  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam."
  boxClass="box-1"
/>
<FeatureBox
  iconClass="fa-route"
  heading="Adventure"
  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam."
  boxClass="box-2"
/>
<FeatureBox
  iconClass="fa-route"
  heading="Adventure"
  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam."
  boxClass="box-3"
/>


          </div>
        </div>
      </section>
    </>
  );
};

export default mainPage;
