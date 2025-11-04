//Header
import Logo from "./Logo";
export default function Header() {

    return (
        <header>
            <ul className="nav">
                <Logo />
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">CHARACTERS</a>
                </li>
                <li className="nav-item nav-underline">
                    <a className="nav-link active" aria-current="page" href="#">COMICS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">MOVIES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">TV</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">GAMES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">COLLECTIBLES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">VIDEOS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">FANS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">NEWS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">SHOP</a>
                </li>
            </ul>
        </header>
    );
}