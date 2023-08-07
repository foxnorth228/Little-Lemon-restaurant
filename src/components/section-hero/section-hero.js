import React from 'react';
import './section-hero.css';
import { useNavigate } from 'react-router-dom';

const SectionHero = () => {
    const navigate = useNavigate();
    return (
        <section className="section__hero">
            <section className="hero__titleBlock">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                <br></br>
                <button 
                    onClick={() => {
                        navigate('/booking')
                    }}
                    className="action-button" 
                    href="/reservations"
                >
                Reserve a table
                </button>
            </section>
            <section className="hero__image">
                <img src={require('../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
            </section>
        </section>
    );
};

export default SectionHero;
