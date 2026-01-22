import { useRef, useState, useCallback } from "react";

type UseCarouselProps = { initialIndex?: number };

export const useCarousel = ({ initialIndex = 0 }: UseCarouselProps) => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(initialIndex);
    const [activeCard, setActiveCard] = useState<number>(initialIndex);

    const handleScroll = useCallback(() => {
        if (!carouselRef.current) return;
        const card = carouselRef.current.children[0] as HTMLElement;
        if (!card) return;

        const gap = 16;
        const cardWidth = card.offsetWidth + gap;
        const newPosition = Math.round(carouselRef.current.scrollLeft / cardWidth);

        setScrollPosition(newPosition);
        setActiveCard(newPosition);
    }, []);

    const scrollToIndex = useCallback((index: number) => {
        if (!carouselRef.current) return;
        const card = carouselRef.current.children[0] as HTMLElement;
        if (!card) return;

        const gap = 16;
        const scrollLeft = index * (card.offsetWidth + gap);
        carouselRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });

        setScrollPosition(index);
        setActiveCard(index);
    }, []);

    const scrollLeft = useCallback(() => {
        if (scrollPosition > 0) scrollToIndex(scrollPosition - 1);
    }, [scrollPosition, scrollToIndex]);

    const scrollRight = useCallback(() => {
        if (!carouselRef.current) return;
        if (scrollPosition < (carouselRef.current.children.length - 1)) scrollToIndex(scrollPosition + 1);
    }, [scrollPosition, scrollToIndex]);

    const handleCardClick = useCallback((index: number) => scrollToIndex(index), [scrollToIndex]);

    return { carouselRef, scrollPosition, activeCard, handleScroll, scrollToIndex, scrollLeft, scrollRight, handleCardClick };
};
