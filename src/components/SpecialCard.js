export default function SpecialCard(props) {
    return (
        <article className="specialCard">
            <img src={props.image} alt="Special Menu"></img>
            <section className="specialCard__content">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
                <a className="special__button"href="/order">Order for Delivery</a>
            </section>
        </article>
    );
}