//Header
import Logo from "./Logo";
export default function Header() {

    const navbarLinks = [
        {
            id: 1,
            text: 'CHARACTERS',
            url: '#',
            active: false
        },
        {
            id: 2,
            text: 'COMICS',
            url: '#',
            active: true
        },
        {
            id: 3,
            text: 'MOVIES',
            url: '#',
            active: false
        },
        {
            id: 4,
            text: 'TV',
            url: '#',
            active: false
        },
        {
            id: 5,
            text: 'GAMES',
            url: '#',
            active: false
        },
        {
            id: 6,
            text: 'COLLECTIBLES',
            url: '#',
            active: false
        },
        {
            id: 7,
            text: 'VIDEOS',
            url: '#',
            active: false
        },
        {
            id: 8,
            text: 'FANS',
            url: '#',
            active: false
        },
        {
            id: 9,
            text: 'NEWS',
            url: '#',
            active: false
        },
        {
            id: 10,
            text: 'SHOP',
            url: '#',
            active: false
        },
    ];

    return (
        <header>
            <div>
                <Logo />
            </div>
            <div>
                <ul className="nav">
                    {navbarLinks.map((link) => (
                        <li className="nav-item" key={link.id}>
                            <a href={link.url} className={`nav-link text-black ${link.active ? 'active-dc' : ''}`}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}