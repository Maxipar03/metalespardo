export const tagline = 'Metal que impulsa tus ideas';

export const nav = [
  { label: 'Productos', href: '#catalogo', hasMenu: true },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export const productos = [
  { title: 'Caños estructurales', href: '#catalogo', image: '/canos-estructurales.webp' },
  { title: 'Caños redondos', href: '#catalogo', image: '/canos-redondos.jpg' },
  { title: 'Chapas', href: '#catalogo', image: '/chapas.png' },
  { title: 'Barras macizas', href: '#catalogo', image: '/barras-macizas.jpg' },
];

export const soluciones = [
  { title: 'Iluminación', href: '#soluciones', image: '/iluminacion.webp' },
  { title: 'Mobiliario', href: '#soluciones', image: '/mobiliario.webp' },
  { title: 'Construcción', href: '#soluciones', image: '/construccion.jpg' },
  { title: 'Accesorios y más', href: '#soluciones', image: '/accesorios.jpg' },
];

export const proceso = [
  {
    title: 'Corte y dimensionado',
    text: 'Trabajamos con tecnología de precisión para garantizar medidas exactas.',
    icon: 'corte',
  },
  {
    title: 'Doblado y conformado',
    text: 'Damos forma al metal con equipos de última generación y personal especializado.',
    icon: 'doblado',
  },
  {
    title: 'Soldadura y ensamblaje',
    text: 'Unimos piezas con procesos seguros y terminaciones resistentes.',
    icon: 'soldadura',
  },
  {
    title: 'Terminación',
    text: 'Aplicamos tratamientos y acabados para mayor durabilidad y estética.',
    icon: 'terminacion',
  },
] as const;
