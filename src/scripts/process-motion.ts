/** Scroll-controlled process diagrams. Resting markup always shows the complete result. */
export function bindProcessMotion(
  section: HTMLElement,
  draw: (progress: number) => void,
  reset: () => void,
  options: { compact?: boolean } = {},
) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 900px)');
  let visible = false;
  let frame = 0;
  let current = 0;
  let initialized = false;
  const enabled = () => !reduced.matches && (options.compact || desktop.matches);
  const targetProgress = () => {
    const rect = section.getBoundingClientRect();
    const distance = options.compact ? Math.min(rect.height, window.innerHeight) : Math.max(1, rect.height - window.innerHeight);
    const start = options.compact ? window.innerHeight * .65 : 100;
    return Math.min(1, Math.max(0, (start - rect.top) / distance));
  };
  const render = () => {
    frame = 0;
    if (!enabled()) { reset(); initialized = false; return; }
    if (!visible || document.hidden) return;
    const target = targetProgress();
    if (!initialized) { current = target; initialized = true; }
    current += (target - current) * .16;
    if (Math.abs(target - current) < .001) current = target;
    draw(current);
    if (current !== target) frame = requestAnimationFrame(render);
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
  const observer = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (visible) schedule();
    else { cancelAnimationFrame(frame); frame = 0; }
  }, { rootMargin: '80px 0px' });
  observer.observe(section);
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  reduced.addEventListener('change', schedule);
  desktop.addEventListener('change', schedule);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
    else schedule();
  });
  schedule();
}
