import Lenis from 'lenis';

// Declarar la propiedad en window para que TypeScript no se queje
declare global {
  interface Window {
    lenis: Lenis | undefined;
  }
}

export const initLenis = () => {
    const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
    });

    // Guardar instancia en window
    window.lenis = lenis;

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return lenis;
};