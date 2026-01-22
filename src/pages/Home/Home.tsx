
import {Header} from '../../sections/Header/Header.tsx';
import {Hero} from '../../sections/Hero/Hero.tsx';
import {Glazing} from "../../sections/Glazing/Glazing.tsx";
import {Sale} from "../../sections/Sale/Sale.tsx";
import {Works} from "../../sections/Works/Works.tsx";
import {Guarantees} from "../../sections/Guarantees/Guarantees.tsx";
import {Payment} from "../../sections/Payment/Payment.tsx";
import {Promo} from "../../sections/Promo/Promo.tsx";
import {Contacts} from "../../sections/Contacts/Contacts.tsx";
import {Questions} from "../../sections/Questions/Questions.tsx";
import {Footer} from "../../sections/Footer/Footer.tsx";

export default function Home() {
return(
    <><Header/><Hero/><Glazing/><Sale/><Works/><Guarantees/><Payment/><Promo/><Contacts/><Questions/><Footer/></>
)
}