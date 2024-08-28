# Plataforma de Gestión - Smart Talent Fly

## Descripción

Como Líder Técnico de Smart Talent Fly, quiero desarrollar una plataforma de gestión que incluya la administración de usuarios, la gestión de tareas y la generación de reportes. Esta plataforma debe ser robusta, segura y responsiva, con componentes reutilizables y pruebas unitarias para asegurar su calidad.

## Criterios de Aceptación

### 1. Arquitectura de Microfrontends

**Descripción:** Diseñar una arquitectura de microfrontends para la aplicación, compuesta por los módulos de Administración de Usuarios, Gestión de Tareas y Reportes.

**Requisitos:**

- **Contenedor Principal (Shell):**
  - Implementar un contenedor principal (shell) que cargue dinámicamente los microfrontends.
  - Utilizar Webpack Module Federation para la integración de los microfrontends.

- **Microfrontends:**
  - Desarrollar cada microfrontend utilizando Angular o React según la preferencia del equipo.
  - Los microfrontends serán:
    - `users-management` (Administración de Usuarios)
    - `task-management` (Gestión de Tareas)
    - `reporting` (Generación de Reportes)

- **Responsividad:**
  - Utilizar **Bootstrap** para asegurar que la plataforma sea responsive y se adapte a diferentes tamaños de pantalla.

## Instrucciones para Arrancar el Proyecto

1. **Arrancar los Microfrontends:**
   - Antes de arrancar el contenedor principal (shell), debes iniciar los microfrontends. Ejecuta los siguientes comandos en sus respectivos directorios:
     ```bash
     npm start
     ```
     - `users-management`
     - `task-management`
     - `reporting`

2. **Arrancar el Shell:**
   - Después de haber arrancado los microfrontends, inicia el contenedor principal (shell) con:
     ```bash
     npm start
     ```

## Aprendizajes

Este ejercicio me ha permitido aprender a implementar microfrontends, una técnica que no conocía previamente. La implementación de esta arquitectura me ha proporcionado una visión más clara de cómo dividir una aplicación en partes independientes y cómo integrarlas eficazmente utilizando Webpack Module Federation.
