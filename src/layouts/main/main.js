import React from 'react';
import GreekSalad from '../../assets/food/greek-salad.webp';
import Bruschetta from '../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../assets/food/lemon-dessert.webp';
import SpecialCard from '../../components/SpecialCard';
import TestimonialCard from '../../components/TestimonialCard';

import food2 from '../../assets/food/food2.jpeg';
import food3 from '../../assets/food/food3.jpeg';

const Main = () => {
    const specials = [
        {
            image: GreekSalad,
            name: "Greek Salad",
            price: "$12.99",
            description: "Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil."
        },
        {
            image: Bruschetta,
            name: "Bruschetta",
            price: "$16.99",
            description: "Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
        },
        {
            image: LemonDessert,
            name: "Lemon Dessert",
            price: "$8.50",
            description: "Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.",
        },
    ];
    const testimonials = [
        {
            name: "Micheal Caldwell",
            description: "This is the best Mediterranean food that I've ever had!",
        },
        {
            name: "Alan Chen",
            description: "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."
        },
        {
            name: "Casey Lau",
            description: "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture."
        },
        {
            name: "John Rosenblum",
            description: "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."
        },
        {
            name: "Jim Reynor",
            description: "The food here really refreshed me after a late night shift at the local supply depot.",
        },
        {
            name: "Brian Dean",
            description: "I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here."
        },
        {
            name: "Tyler Tohmine",
            description: "The food here was fire!! Everyone should try this place out at least once if they live in Chicago."
        },
        {
            name: "Jack Hu",
            description: "This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!"
        },
    ];
    return (
        <main className="App">
            <article className="section__hero">
                <section className="hero__titleBlock">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                        on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <button className="action-button" href="/reservations">Reserve a table</button>
                </section>
                <section className="hero-image">
                    <img src={require('../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
            <section className="section__specials">
                <article className="specials__topbar">
                    <h1>This weeks specials</h1>
                    <a className="action-button" href={require('../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
                </article>
                <section className="specials__cards">
                    {specials.map((el, i) => <SpecialCard key={i} {...el} />)}
                </section>
            </section>
            <section className="section__testimonials">
                <article className="testimonials__topbar">
                    <h1>Testimonials</h1>
                </article>
                <section className="testimonials__cards">
                    {testimonials.map((el, i) => <TestimonialCard key={i} {...el} />)}
                </section>
        </section>
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
        </main>
    );
}

export default Main;
