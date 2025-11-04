import DcComp from './DcComp';
import Merchandise from './Merchandise';
import Subscriptions from './Subscriptions';
import Locator from './Locator';
import Power from './Power';
export default function Main() {

    return (
        <main>
            <div className='titleText'>
                <h1> Content goes here </h1>
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