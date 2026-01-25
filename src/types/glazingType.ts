import type {GlazingVariant} from "./glazingVariant.ts";

export interface GlazingType {
    id: number;
    image: string;
    altText: string;
    title: string;
    variants: GlazingVariant[];
}