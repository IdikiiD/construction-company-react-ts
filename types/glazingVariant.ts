export interface GlazingVariant {
    type: 'cold' | 'warm' | 'plastic' | 'aluminum'| 'wood';
    title: string;
    image: string;
    features: string[];
    price: string;
    priceNote: string;
}