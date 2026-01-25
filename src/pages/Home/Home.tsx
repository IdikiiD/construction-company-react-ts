import {Header} from "../../sections/Header/Header";
import {Hero} from "../../sections/Hero/Hero";
import {Glazing} from "../../sections/Glazing/Glazing";
import { Sale } from "../../sections/Sale/Sale";
import { Works } from "../../sections/Works/Works";
import {Guarantees} from "../../sections/Guarantees/Guarantees";
import {Payment} from "../../sections/Payment/Payment";
import {Promo} from "../../sections/Promo/Promo";
import { Contacts } from "../../sections/Contacts/Contacts";
import {Questions} from "../../sections/Questions/Questions";
import {Footer} from "../../sections/Footer/Footer";

export default function Home() {
return(
    <><Header/><Hero/><Glazing/><Sale/><Works/><Guarantees/><Payment/><Promo/><Contacts/><Questions/><Footer/></>
)
}