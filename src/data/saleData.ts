import type {SaleType} from "../../types/saleType.ts";

export const saleData: SaleType[] = [
    {
        type: 'roof',
        title: 'КРЫША НА БАЛКОН',
        image: 'src/img/decoration/4/decoration4_img.png',
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
            },
            {
                id: 'stretch',
                title: 'Настил пола из дерева',
                image: 'src/img/decoration/material/lining.png',
                price: '1650 ₽/кв.м.',
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
                title: 'Вагонка',
                image: 'src/img/decoration/3/tree.png',
                price: '100 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'plastic',
                title: 'Пластиковая вагонка',
                image: 'src/img/decoration/3/bezram.png',
                price: '750 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'pvc',
                title: 'ПВХ-панели',
                image: 'src/img/decoration/3/pvh.png',
                price: '800 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'laminate',
                title: 'Настил пола из ламината',
                image: 'src/img/decoration/material/laminate.png',
                price: '1250 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'stretch',
                title: 'Настил пола из дерева',
                image: 'src/img/decoration/material/tree.png',
                price: '1650 ₽/кв.м.',
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
            },
            {
                id: 'stretch',
                title: 'Настил пола из дерева',
                image: 'src/img/decoration/material/lining.png',
                price: '1650 ₽/кв.м.',
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
                title: 'Вагонка',
                image: 'src/img/sale/roof/wood.jpg',
                price: '600 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'plastic',
                title: 'Пластиковая вагонка',
                image: 'src/img/sale/roof/plastic.jpg',
                price: '750 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'pvc',
                title: 'ПВХ-панели',
                image: 'src/img/sale/roof/pvc.jpg',
                price: '800 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'laminate',
                title: 'Настил пола из ламината',
                image: 'src/img/sale/roof/stretch.jpg',
                price: '1250 ₽/кв.м.',
                priceNote: 'с материалом',
            },
            {
                id: 'stretch',
                title: 'Настил пола из дерева',
                image: 'src/img/sale/roof/stretch.jpg',
                price: '1650 ₽/кв.м.',
                priceNote: 'с материалом',
            }
        ],
    },
];