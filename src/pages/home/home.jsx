import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Landpage from '../../component/landpage/landpage';

export default function Home(){
    return(
        <div className="home">
            <div className="home__container">
                <Landpage />
            </div>
        </div>
    );
}
