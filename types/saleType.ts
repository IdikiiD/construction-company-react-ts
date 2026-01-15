import type {SaleVariant} from "./saleVariant.ts";

export interface SaleType {
    type: 'roof' | 'inside' | 'outside' | 'move-out';

    title: string;

    variants: SaleVariant[];
}