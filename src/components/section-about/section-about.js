import React from 'react';
import './section-about.css';
import food2 from '../../assets/food/food2.jpeg';
import food3 from '../../assets/food/food3.jpeg';

const SectionAbout = () => {
    return (
        <section className="section__aboutUs">
            <section className="hero__titleBlock about__titleBlock">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="aboutUs__text">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>
            <section className="aboutUs__doubleImage">
                <img className="aboutUs__doubleImage_1" src={food3} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="aboutUs__doubleImage_2" src={food2} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
        </section>
    );
};

export default SectionAbout;
