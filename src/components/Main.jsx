import DcComp from './DcComp';
import Merchandise from './Merchandise';
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
                        <DcComp />
                        SUBSCRIPTION
                    </li>
                    <li>
                        <DcComp />
                        COMIC SHOP LOCATOR
                    </li>
                    <li>
                        <DcComp />
                        DC POWER VISA
                    </li>
                </ul>
            </div>
        </main>
    )
}