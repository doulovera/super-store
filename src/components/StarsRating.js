import React from 'react'

import zero from '../assets/stars/0.png';
import zeropoint from '../assets/stars/0.5.png';
import one from '../assets/stars/1.png';
import onepoint from '../assets/stars/1.5.png';
import two from '../assets/stars/2.png';
import twopoint from '../assets/stars/2.5.png';
import three from '../assets/stars/3.png';
import threepoint from '../assets/stars/3.5.png';
import four from '../assets/stars/4.png';
import fourpoint from '../assets/stars/4.5.png';
import five from '../assets/stars/5.png';

function StarsRating({ stars }) {
    
    const imgStars = {
        '0': <img src={zero} alt="0" draggable="false" />,
        '0.5': <img src={zeropoint} alt="0.5" draggable="false" />,
        '1': <img src={one} alt="1" draggable="false" />,
        '1.5': <img src={onepoint} alt="1.5" draggable="false" />,
        '2': <img src={two} alt="2" draggable="false" />,
        '2.5': <img src={twopoint} alt="2.5" draggable="false" />,
        '3': <img src={three} alt="3" draggable="false" />,
        '3.5': <img src={threepoint} alt="3.5" draggable="false" />,
        '4': <img src={four} alt="4" draggable="false" />,
        '4.5': <img src={fourpoint} alt="4.5" draggable="false" />,
        '5': <img src={five} alt="5" draggable="false" />
    }


    return (
        <>
            {
                imgStars[stars]
            }
        </>
    )
}

export default StarsRating
