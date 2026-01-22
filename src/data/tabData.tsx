import type {TabType} from "../../types/TabType.ts";
import {Tab1} from "../sections/Tabs/Content/Tab1.tsx";
import {Tab2} from "../sections/Tabs/Content/Tab2.tsx";
import {Tab3} from "../sections/Tabs/Content/Tab3.tsx";

export const tabData: TabType[] = [
    {
        id: '1',
        label: 'Window Type',
        component: <Tab1/>,
    },
    {
        id: '2',
        label: 'Calculation',
        component: <Tab2/>
    },
    {
        id: '3',
        label: 'Calculation',
        component: <Tab3/>,
    }

]