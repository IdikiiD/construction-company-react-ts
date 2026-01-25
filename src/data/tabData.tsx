
import type {TabDataItem} from "../types/TabType.ts";
import {Tab1} from "../sections/Tabs/Content/Tab1";
import {Tab2} from "../sections/Tabs/Content/Tab2";
import {Tab3} from "../sections/Tabs/Content/Tab3";

export const tabData: TabDataItem[] = [
    {
        id: '1',
        label: 'Шаг 1',
        render: ({ register, setValue,errors }) => (
            <Tab1 register={register} setValue={setValue} errors={errors}/>
        ),
    },
    {
        id: '2',
        label: 'Шаг 2',
        render: ({ register, setValue,errors }) => (
            <Tab2 register={register} setValue={setValue} errors={errors} />
        ),
    },
    {
        id: '3',
        label: 'Шаг 3',
        render: ({ register, setValue ,errors  }) => (
            <Tab3 register={register} setValue={setValue} errors={errors} />
        ),
    },
];