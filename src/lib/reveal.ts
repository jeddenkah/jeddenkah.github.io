import { onMount } from 'svelte';

export function reveal(node: HTMLElement, options: { delay?: number; y?: number; duration?: number } = {}) {
  const { delay = 0, y = 30, duration = 0.6 } = options;

  node.style.opacity = '0';
  node.style.transform = `translate3d(0, ${y}px, 0)`;
  node.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
  node.style.willChange = 'opacity, transform';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        node.style.opacity = '1';
        node.style.transform = 'translate3d(0, 0, 0)';
        observer.unobserve(node);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
