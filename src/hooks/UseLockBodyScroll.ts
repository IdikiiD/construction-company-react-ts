import { useEffect } from 'react';

export const useLockBodyScroll = () => {
    useEffect(() => {
        const scrollY = window.scrollY;

        // Блокируем скролл
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';

        // Восстанавливаем скролл при размонтировании
        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            window.scrollTo(0, scrollY);
        };
    }, []);
};