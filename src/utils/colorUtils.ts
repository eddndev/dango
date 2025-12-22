// Dango Festival Color Palette
export const DANGO_COLORS = [
    '#FF1493', // Pink
    '#FF6B35', // Orange
    '#FFD93D', // Yellow
    '#00CED1', // Cyan
    '#39FF14', // Green
    '#8B5CF6', // Purple
    '#0080FF', // Blue
    '#FF4500', // Red
] as const;

/**
 * Get a random color from the Dango Festival palette
 */
export function getRandomDangoColor(): string {
    return DANGO_COLORS[Math.floor(Math.random() * DANGO_COLORS.length)];
}

/**
 * Apply random color hover effect to an element
 */
export function applyRandomColorHover(element: HTMLElement) {
    element.addEventListener('mouseenter', () => {
        element.style.color = getRandomDangoColor();
    });

    element.addEventListener('mouseleave', () => {
        element.style.color = '';
    });
}
