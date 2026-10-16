# Subir el proyecto a tu repositorio de GitHub

Subiré la web de Quesos de Altura S.A.C. a `Nelson123464/informatica_empresarial` usando la conexión de GitHub que ya tienes en el workspace ("Nelson's GitHub API"). El repositorio está vacío, así que el código quedará ahí con un solo commit limpio.

## Qué haré

1. **Preparar una copia autónoma** del proyecto en una carpeta de trabajo (fuera de tu web actual). Incluirá todas las páginas, los estilos, la configuración y las fotos, de modo que al descargar el repositorio en otra computadora funcione con `bun install` y `bun run dev`.
2. **Meter las fotos dentro del proyecto.** Hoy el logo, las 3 fotos de producto, la foto de la colección y el documento del proyecto viven en el almacenamiento de Lovable. En la copia los cambiaré a archivos normales dentro del repositorio, para que se vean sin depender de Lovable.
3. **Aligerar las imágenes pesadas** (los PNG de producto pesan 2,2 MB cada uno) a un tamaño de web, sin cambiar lo que se ve.
4. **Subir todo con una sola confirmación** a la rama `main` de tu repositorio, con un mensaje claro: "Quesos de Altura S.A.C. — sitio web del proyecto".
5. **Comprobar que quedó bien**: leeré la lista de archivos y el commit desde GitHub y te pasaré el enlace.

## Qué se envía

```text
informatica_empresarial/
├── src/            páginas, componentes, estilos, datos de los quesos
├── public/         favicon, robots, documento del proyecto (.docx)
├── package.json    dependencias y comandos
├── bun.lock        versiones exactas
├── tsconfig.json / vite.config.ts / vitest.config.ts / eslint.config.js
├── .gitignore      (ya existe, se conserva)
└── README.md       se reescribe: qué es el proyecto, cómo ejecutarlo y la web publicada
```

No se envían `node_modules`, ni archivos generados, ni la carpeta interna de Lovable.

## Detalles técnicos

- **Cómo se sube**: llamadas a la API de GitHub a través de la conexión existente, sin enlazarla al proyecto (la web no necesita GitHub para funcionar). Primero se crean los archivos, luego un árbol, un commit sin padres y la rama `main`.
- **Imágenes**: los PNG de producto se recomprimen a JPEG (~1400 px) y el logo a un PNG más liviano. El `.docx` se mantiene tal cual para que siga siendo descargable.
- **Referencias**: en la copia, `src/lib/cheeses.ts` y `src/components/quesos/experience.tsx` apuntarán a los archivos locales en vez de a las rutas del almacenamiento de Lovable.
- **Si el repositorio ya no estuviera vacío** al momento de subir, encadenaré el commit sobre el último existente en lugar de crear la rama desde cero.
- **Aprobaciones**: las escrituras pueden pedir tu confirmación en el chat; si el acceso de GitHub estuviera vencido, aparecerá una tarjeta para renovarlo.
- **Tu web no cambia**: `quesos-de-altura.lovable.app` queda igual; solo se agrega contenido al repositorio.

## Cómo verifico

- Leo la lista de archivos del repositorio y confirmo que están `src`, `public`, las imágenes y el `README.md`.
- Confirmo que `main` apunta al commit nuevo y que una foto se descarga correctamente.
- Te paso el enlace al commit y te digo qué falta, si algo falta.

## Nota

Tu repositorio es **público** ahora mismo: cualquiera puede ver el código. Si lo quieres privado, se cambia en GitHub → Settings → Danger Zone → Change visibility (o dime y lo dejo anotado).
