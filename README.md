# Proyecto de Comentarios

Este es un proyecto de aplicación web para crear y gestionar comentarios en un sistema de publicaciones. Los usuarios pueden comentar, responder a otros comentarios y ver comentarios anidados en un formato estilo Reddit.

## Tecnologías

- **Frontend:**
  - React
  - Redux (para el manejo de estado global)
  - Axios (para realizar peticiones HTTP)
  - Tailwind CSS (para el diseño y la maquetación)
  - React Router (para la navegación entre diferentes vistas)
  
- **Backend:**
  - Python con Django REST Framework (para la API de comentarios)
  
## Características

- **Creación de comentarios**: Los usuarios pueden agregar comentarios a publicaciones y ver comentarios ya existentes.
- **Comentarios anidados**: Los usuarios pueden responder a comentarios y crear una jerarquía de comentarios.
- **Paginación**: Los comentarios se pueden ordenar y visualizar en páginas.
- **Interactividad**: Los usuarios pueden ver, agregar y responder comentarios de forma dinámica.

## Instalación

### Requisitos previos

1. Tener instalado `Node.js` (preferiblemente la última versión LTS).
2. Tener `Python` instalado (preferentemente 3.8+).

### Paso 1: Clonar el repositorio

Primero, clona el repositorio en tu máquina local:

### Paso 2: Activar entorno virtual

En la Bash con el comando source myenv/Scripts/activate activar el entorno virtual

### Paso 3: Correr el programa

Ejecutas el comando python manage.py runserver y correras el servidor con el back y front

### Paso 4: Usar el programa en localhost

Para probar el programa debes abrir http//:localhost:8000/ , ahi podras probar las funcionalidades y demas