//Header
import Logo from "./Logo";
export default function Header() {

    return (
        <header>
            <Logo />
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">CHARACTERS</a>
                </li>
                <li class="nav-item nav-underline">
                    <a class="nav-link active" aria-current="page" href="#">COMICS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">MOVIES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">TV</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">GAMES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">COLLECTIBLES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">VIDEOS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">FANS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">NEWS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">SHOP</a>
                </li>
            </ul>
        </header>
    );
}