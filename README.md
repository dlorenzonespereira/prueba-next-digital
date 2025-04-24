# Prueba Next Digital

Este proyecto es una prueba técnica que implementa una aplicación web utilizando **SvelteKit** como framework principal. Su objetivo es demostrar habilidades en el desarrollo de aplicaciones modernas, incluyendo la gestión de datos, componentes reutilizables y buenas prácticas de desarrollo.

## Arquitectura

- **Frontend**: Construido con SvelteKit, utilizando componentes modulares y un enfoque centrado en la experiencia del usuario.
- **Estilos**: Se emplea PostCSS para la gestión de estilos, permitiendo un diseño limpio y escalable.
- **Backend**: SvelteKit también maneja las rutas de API para gestionar solicitudes del lado del servidor.
- **Gestión de datos**: Uso de repositorios para interactuar con APIs externas y mapear datos a modelos internos.

## Tecnologías Usadas

- **SvelteKit**: Framework principal para el desarrollo.
- **TypeScript**: Para tipado estático y mayor robustez en el código.
- **PostCSS**: Para la gestión de estilos.
- **Vitest**: Para pruebas unitarias.
- **ESLint y Prettier**: Para mantener la calidad y consistencia del código.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado `pnpm`, un gestor de paquetes rápido y eficiente. Puedes instalarlo siguiendo estos pasos:

1. Instala Node.js (si aún no lo tienes):
   - Descárgalo desde [nodejs.org](https://nodejs.org) e instálalo según tu sistema operativo.

2. Instala `pnpm` utilizando `npm` (que viene con Node.js):
   ```bash
   npm install -g pnpm
   ```

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Accede al directorio del proyecto:
   ```bash
   cd prueba-next-digital
   ```
3. Instala las dependencias:
   ```bash
   pnpm install
   ```

## Comandos Disponibles

- `pnpm run dev`: Inicia el servidor de desarrollo.
- `pnpm run build`: Construye el proyecto para producción.
- `pnpm run preview`: Previsualiza la aplicación construida en modo producción.
- `pnpm run lint`: Ejecuta el linter para verificar errores en el código.
- `pnpm run format`: Formatea el código utilizando Prettier.
- `pnpm run test`: Ejecuta las pruebas unitarias en modo watch.
- `pnpm run update`: Actualiza las dependencias del proyecto automáticamente.