import React from 'react';
import './home.css';
import Landpage from '../../component/landpage/landpage';
import PremiumCard from '../../component/premuimCard/premuimCard';
import Wear from '../../component/wear/wear';
import ProCard from '../../component/pro_card/pro_card';
import Footer from '../../component/footer/footer';

// Import images
import pre1 from '../../assets/pre1.png';
import pre2 from '../../assets/pre2.png';
import pre3 from '../../assets/pre3.png';
import pre4 from '../../assets/pre4.png';

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <Landpage />
                <div className="home__premium-section">
                    <h3>Premium Equipment</h3>
                    <div className="home__premium-cards">
                        <PremiumCard name="Gym Racks" link="/rackpage" pic={pre1} />
                        <PremiumCard name="Weight Bench" link="/" pic={pre2} />
                        <PremiumCard name="Bar&Weight" link="/" pic={pre3} />
                        <PremiumCard name="Specialty Machines" link="/" pic={pre4} />
                    </div>
                </div>
                <Wear />
                <div className='home__bestseller__container'>
                    <ProCard />
                </div>
                <div className="home__footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
}