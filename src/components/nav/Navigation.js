import menu from "../../assets/menu.webp";
export default function Menu(props) {
  return (
    <ul className={`nav__menu nav_${props.device}`}>
      <a className="nav__link" href="/">
        <h1>Home</h1>
      </a>
      <a className="nav__link" href="/about">
        <h1>About</h1>
      </a>
      <a
        className="nav__link"
        href={menu}
        target="_blank"
        rel="noreferrer"
      >
        <h1>Menu</h1>
      </a>
      <a className="nav__link" href="/reservations">
        <h1>Reservations</h1>
      </a>
      <a className="nav__link" href="/order">
        <h1>Order</h1>
      </a>
      <a className="nav__link" href="/login">
        <h1>Login</h1>
      </a>
    </ul>
  );
}
