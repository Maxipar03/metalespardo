---
name: Caños Pardo
description: Materia en movimiento para una metalúrgica enfocada en trefilado y roscado de caños
colors:
  ink: "#0b0d0e"
  graphite: "#171b1c"
  foreground: "#f3f1eb"
  steel: "#d5d9d7"
  copper: "#d8b086"
  warm-metal: "#d6d5cf"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.6rem, 7.2vw, 6.75rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
rounded:
  none: "0"
spacing:
  shell-gutter: "48px"
  section: "clamp(100px, 11vw, 180px)"
components:
  button-primary:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 21px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
    padding: "14px 21px"
---

# Design System: Caños Pardo

## Overview

**Creative North Star: "Materia en movimiento"**

Una identidad industrial cinematográfica que explica el trefilado mediante el material, la escala y el movimiento. La página abre con un acercamiento a un caño y una matriz; el scroll convierte esa relación física en una secuencia visual comprensible. La composición es editorial y evita tarjetas decorativas.

**Key Characteristics:**
- Fotografía de metal en primer plano, con sombras profundas y reflejos contenidos.
- Títulos condensados de gran escala y texto de lectura serena.
- Un solo acento cálido reservado para acciones y puntos de atención.
- Explicación del proceso mediante geometría precisa, sin medidas inventadas.

## Colors

- **Carbón** (`#0b0d0e`): fondo principal, hero y cierre.
- **Grafito** (`#171b1c`): superficies secundarias y catálogo.
- **Acero claro** (`#d5d9d7`) y **marfil metálico** (`#f3f1eb`): texto y reflejos.
- **Cobre atenuado** (`#d8b086`): llamados a la acción y un detalle del diagrama.
- **Metal cálido** (`#d6d5cf`): pausa luminosa de la sección a medida.

**The Accent Rule.** El cobre señala acciones o un punto de la explicación; nunca cubre grandes superficies decorativas.

## Typography

**Display Font:** Barlow Condensed, peso 600. Se usa en títulos breves, compactos y de alto impacto.

**Body Font:** DM Sans, pesos 400–700. Se usa en navegación, texto, datos de contacto y botones.

Los títulos son mayormente versales; el cuerpo conserva caja natural para facilitar la lectura. La carga de ambas familias se hace desde Google Fonts con `display=swap` y alternativas locales.

## Layout

El contenedor alcanza 1440 px con márgenes amplios. Las secciones alternan densidad: hero inmersivo, explicación con visual fijo en escritorio, catálogo de recortes fotográficos, pausa clara para trabajos a medida y cierre tipográfico. A 899 px la visual del proceso deja de fijarse; a 599 px el contenido pasa a una columna y los productos se acomodan sin huecos.

## Elevation & Depth

La profundidad proviene de la fotografía, la luz rasante y superficies tonales. No hay tarjetas flotantes ni sombras de interfaz.

## Shapes

Botones, paneles y recortes usan esquinas rectas. Las líneas finas separan contenido y evocan el borde trabajado del metal; no simulan una cuadrícula técnica.

## Components

- **Acción primaria:** bloque cobre con texto carbón y destino de WhatsApp.
- **Acción secundaria:** contorno claro o enlace subrayado, según el contexto.
- **Producto:** fotografía con rótulo inferior; toda la superficie abre una consulta específica en WhatsApp.
- **Proceso:** diagrama SVG geométrico que revela el material durante el scroll en escritorio. Permanece completo y estático en móvil o con movimiento reducido.
- **Roscado:** sección propia con esquema geométrico conceptual; el avance de la herramienta y la aparición de la rosca se vinculan al scroll. No implica medidas ni tipos de rosca disponibles.
- **Header:** navegación fija que se compacta al bajar, con accesos independientes a trefilado y roscado y estado de sección activa.
- **Menú móvil:** navegación desplegable animada con cierre por enlace, clic exterior o tecla Escape y devolución del foco al botón al usar Escape.
- **Movimiento:** diagramas ligados al scroll con interpolación suave; se detienen fuera de pantalla y muestran el resultado completo con movimiento reducido.

## Do's and Don'ts

- Mostrar el servicio principal y el contacto desde el primer viewport.
- Etiquetar como conceptuales las imágenes y representaciones creadas para explicar el proceso.
- Mantener afirmaciones comerciales dentro de los datos confirmados por la empresa.
- Evitar estadísticas, certificaciones, años de trayectoria o especificaciones no proporcionados.
- Evitar animaciones repetitivas, efectos decorativos y tarjetas sin función.
