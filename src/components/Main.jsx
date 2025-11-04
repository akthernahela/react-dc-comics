import DcComp from './DcComp';
import Merchandise from './Merchandise';
import Subscriptions from './Subscriptions';
import Locator from './Locator';
import Power from './Power';
export default function Main() {

    return (
        <main>
            <div className='titleText'>
                <i class="bi bi-dash"></i>
                <i class="bi bi-dash"></i>
                <i class="bi bi-arrow-right"></i>

                <h1> Content goes here </h1>

                <i class="bi bi-arrow-left"></i>
                <i class="bi bi-dash"></i>
                <i class="bi bi-dash"></i>
            </div>
            <div>
                <ul>
                    <li>
                        <DcComp />
                        DIGITAL COMICS
                    </li>
                    <li>
                        <Merchandise />
                        DC MERCHANDISE
                    </li>
                    <li>
                        <Subscriptions />
                        SUBSCRIPTION
                    </li>
                    <li>
                        <Locator />
                        COMIC SHOP LOCATOR
                    </li>
                    <li>
                        <Power />
                        DC POWER VISA
                    </li>
                </ul>
            </div>
        </main>
    )
}