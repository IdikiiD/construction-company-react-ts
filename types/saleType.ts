import type {SaleVariant} from "./saleVariant.ts";

export interface SaleType {
    type: 'roof' | 'inside' | 'outside' | 'move-out';
    image: string;

    title: string;

    variants: SaleVariant[];
}