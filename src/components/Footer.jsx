import BigLogo from './BigLogo';
export default function Footer() {

    return (
        <footer>
            <div className="upFooter">
                <div className="row w-50">
                    <div className="col-8">
                        <nav>
                            <h3>DC COMICS</h3>
                            <a href="">Characters</a>
                            <a href="">Comics</a>
                            <a href="">Movies</a>
                            <a href="">TV</a>
                            <a href="">Games</a>
                            <a href="">Videos</a>
                            <a href="">News</a>
                            <br />
                            <br />
                            <h3>SHOP</h3>
                            <a href="">Shop DC</a>
                            <a href="">Shop DC Collectibles</a>
                        </nav>
                        <nav>
                            <h3>DC</h3>
                            <a href="">Terms Of Use</a>
                            <a href="">Privacy policy(New)</a>
                            <a href="">Ad Choices</a>
                            <a href="">Advertising</a>
                            <a href="">Jobs</a>
                            <a href="">Subscriptions</a>
                            <a href="">Talent Workshops</a>
                            <a href="">CPSC Certificates</a>
                            <a href="">Ratings</a>
                            <a href="">Shop Help</a>
                            <a href="">Contact Us</a>
                        </nav>
                        <nav>
                            <h3>SITES</h3>
                            <a href="">DC</a>
                            <a href="">MAD Magazing</a>
                            <a href="">DC Kids</a>
                            <a href="">DC Universe</a>
                            <a href="">DC Power Visa</a>
                        </nav>

                    </div>
                    <div className="col-4">
                        <BigLogo />
                    </div>
                </div>
            </div>
            <div className="downFooter">
                <button type="button" className="btn text-white btn-outline-primary">Sign-up now!</button>
                <div className="followUs">
                    <span>FOLLOW US</span>
                    <div className="socialIcons">
                        <div><i class="bi bi-facebook"></i></div>
                        <div><i class="bi bi-twitter"></i></div>
                        <div><i class="bi bi-youtube"></i></div>
                        <div><i class="bi bi-pinterest"></i></div>
                        <div><i class="bi bi-instagram"></i></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}