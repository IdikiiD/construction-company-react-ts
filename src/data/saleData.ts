import type {SaleType} from "../../types/saleType.ts";

export const saleData: SaleType[] = [
    {
        type: 'roof',
        title: 'КРЫША НА БАЛКОН',
        image: 'src/img/decoration/4/decoration4_img.png',
        variants: [
            {
                id: 'wood',
                title: 'Гофролист',
                image: 'src/img/decoration/4/gofrolist.png',
                price: '600 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'plastic',
                title: 'Металлочерепица',
                image: 'src/img/decoration/4/metallocherepitsa.png',
                price: '750 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'pvc',
                title: 'Ондулин',
                image: 'src/img/decoration/4/ondulin.png',
                price: '800 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'laminate',
                title: 'Поликарбонат',
                image: 'src/img/decoration/4/polikarbonat.png',
                price: '1250 ₽/кв.м.',
                priceNote: 'с материалом',
            }
        ],
    },
    {
        type: 'outside',
        image: 'src/img/decoration/2/decoration2_img.png',
        title: 'ВНЕШНЯЯ ОТДЕЛКА',
        variants: [
            {
                id: 'wood',
                title: 'Металлический сайдинг',
                image: 'src/img/decoration/2/metal.png',
                price: '100 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'plastic',
                title: 'Пластиковая вагонка',
                image: 'src/img/decoration/2/plastic.png',
                price: '750 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'pvc',
                title: 'Профнастил',
                image: 'src/img/decoration/2/profnastil.png',
                price: '800 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'laminate',
                title: 'Деревянная вагонка',
                image: 'src/img/decoration/2/tree.png',
                price: '1250 ₽/кв.м.',
                priceNote: 'с материалом',
            }
        ],
    },
    {
        type: 'inside',
        title: 'ВНУТРЕННЯЯ ОТДЕЛКА',
        image: 'src/img/decoration/decoration_img.png',
        variants: [
            {
                id: 'wood',
                title: 'Вагонка',
                image: 'src/img/decoration/material/tree.png',
                price: '600 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'plastic',
                title: 'Пластиковая вагонка',
                image: 'src/img/decoration/material/plastic.png',
                price: '750 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'pvc',
                title: 'ПВХ-панели',
                image: 'src/img/decoration/material/pvh.png',
                price: '800 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'laminate',
                title: 'Настил пола из ламината',
                image: 'src/img/decoration/material/laminate.png',
                price: '1250 ₽/кв.м.',
                priceNote: 'с материалом',
            }

        ],
    },
    {
        type: 'move-out',
        title: 'ВЫНОСНОЕ ОСТЕКЛЕНИЕ',
        image: 'src/img/decoration/3/decoration3_img.jpg',
        variants: [
            {
                id: 'wood',
                title: 'Алюминиевый профиль',
                image: 'src/img/decoration/3/aluminum.png',
                price: '600 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'plastic',
                title: 'Безрамное остекление',
                image: 'src/img/decoration/3/bezram.png',
                price: '750 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'pvc',
                title: 'ПВХ-Профиль',
                image: 'src/img/decoration/3/pvh.png',
                price: '800 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'laminate',
                title: 'Деревянный профиль',
                image: 'src/img/decoration/3/tree.png',
                price: '1250 ₽/кв.м.',
                priceNote: 'с материалом',
            }
        ],
    },
];