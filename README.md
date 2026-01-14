# Botonera de Enlaces

Una botonera tipo **Linkr.bio** moderna y responsive creada con HTML, CSS y JavaScript. Ideal para publicar en GitHub Pages.

## 🚀 Características

- ✨ Diseño moderno y atractivo
- 📱 Responsive (funciona en móvil y escritorio)
- 🎨 Temas oscuro/claro automáticos
- ⚡ Sin dependencias externas
- 🔗 Fácil de personalizar
- 📦 Listo para GitHub Pages

## 📋 Cómo usar

### 1. Clonar o descargar el proyecto

```bash
git clone https://github.com/tu-usuario/botonera.git
cd botonera
```

### 2. Personalizar los datos

Edita el archivo `index.html` y modifica:

- **Nombre**: Cambia "Tu Nombre" por tu nombre
- **Bio**: Actualiza la descripción
- **Avatar**: Reemplaza la URL de la imagen
- **Enlaces**: Modifica las URLs y textos de los botones

```html
<img src="tu-imagen.jpg" alt="Avatar">
<h1 class="name">Tu Nombre</h1>
<p class="bio">Tu descripción aquí</p>
```

### 3. Agregar más botones

Copia y pega este código dentro del `.buttons-container`:

```html
<a href="tu-url" class="btn btn-primary" target="_blank">
    <span class="icon">🎯</span>
    <span class="text">Tu Botón</span>
</a>
```

**Clases de colores disponibles:**
- `btn-primary` (Azul)
- `btn-secondary` (Gris)
- `btn-accent` (Naranja)
- `btn-danger` (Rojo)
- `btn-info` (Rosa)
- `btn-light` (Claro)

### 4. Publicar en GitHub Pages

**Opción A: Repositorio personal**

1. Crea un repositorio llamado `username.github.io`
2. Sube los archivos
3. Tu página estará en: `https://username.github.io`

**Opción B: Repositorio regular**

1. Crea un repositorio llamado `botonera`
2. En Configuración → GitHub Pages, selecciona rama `main`
3. Tu página estará en: `https://username.github.io/botonera`

## 📁 Estructura de carpetas

```
botonera/
├── index.html      # Archivo principal
├── style.css       # Estilos
├── script.js       # JavaScript
├── README.md       # Este archivo
└── .gitignore      # (Opcional) Archivos a ignorar
```

## 🎨 Personalización avanzada

### Cambiar colores

Modifica las variables CSS en `style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #0f172a;
    --accent-color: #f97316;
    /* ... más variables */
}
```

### Agregar iconos personalizados

Reemplaza los emojis o usa URLs de iconos:

```html
<span class="icon">
    <img src="icon.svg" alt="Icon">
</span>
```

## 🌐 Compatibilidad

- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ iOS Safari
- ✅ Android Chrome

## 💡 Tips

- Usa imágenes de buena calidad (JPG o PNG)
- Los enlaces se abren en una pestaña nueva automáticamente
- El sitio es completamente funcional sin JavaScript
- Responsive en todos los tamaños de pantalla

## 📄 Licencia

Libre para usar y modificar. No requiere atribución.

---

**¿Necesitas ayuda?** Abre un issue en el repositorio de GitHub.
