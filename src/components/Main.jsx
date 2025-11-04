import DcComp from './DcComp'
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
                        <DcComp />
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