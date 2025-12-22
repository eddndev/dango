import Lenis from 'lenis';

export const initLenis = () => {
    const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
    });

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
};
