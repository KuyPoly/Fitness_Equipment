import React, { useRef } from 'react';
import './home.css';
import Landpage from '../../component/landpage/landpage';
import PremiumCard from '../../component/premuimCard/premuimCard';
import Wear from '../../component/wear/wear';
import { Link } from 'react-router-dom';
import ProCard from '../../component/pro_card/pro_card';
import Footer from '../../component/footer/footer';

// Import images
import pre1 from '../../assets/pre1.png';
import pre2 from '../../assets/pre2.png';
import pre3 from '../../assets/pre3.png';
import pre4 from '../../assets/pre4.png';

export default function Home() {
  const carouselRef = useRef();

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <div className="home__container">
        <Landpage />
        <div className="home__premium-section">
          <h3>Premium Equipment</h3>
          <div className="carousel-container">
            <button
              className="carousel-arrow prev"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              &lt;
            </button>
            <div className="home__premium-cards" ref={carouselRef}>
              <PremiumCard name="Gym Racks" link="/rackpage" pic={pre1} />
              <PremiumCard name="Weight Bench" link="/benchpage" pic={pre2} />
              <PremiumCard name="Bar&Weight" link="/bar_weightpage" pic={pre3} />
              <PremiumCard name="Specialty Machines" link="/specialty" pic={pre4} />
            </div>
            <button
              className="carousel-arrow next"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              &gt;
            </button>
          </div>
        </div>
        <Wear />
        <div>
            <ProCard /> 
        </div>
        <div>
            <Footer/>
        </div>
      </div>
    </div>
  );
}
