# 📋 Guía de Estructura - Proyecto FlexGlobal

Esta guía te ayudará a navegar y editar fácilmente el proyecto FlexGlobal, proporcionando una visión clara de cada componente y su ubicación.

## 🏗️ Estructura General del Proyecto (Web Nativa)

```
flexglobal-preview/
├── 📄 index.html                    # 🏠 PÁGINA PRINCIPAL
├── 📁 _astro/                     # ⚡ ARCHIVOS COMPILADOS (NO EDITAR)
├── 📁 assets/                     # 📸 RECURSOS MULTIMEDIA
├── 📁 asesoria-personalizada/     # 👤 ASESORÍA PERSONALIZADA
├── 📁 card-id/                    # 🪪 TARJETA DE IDENTIFICACIÓN
├── 📁 como-aplicar-al-seguro/     # 📝 GUÍA DE APLICACIÓN
├── 📁 mision-vision/              # 🎯 SOBRE NOSOTROS
├── 📁 nuestros-servicios/         # 🛠️ SERVICIOS ADICIONALES
├── 📁 planes-salud/               # 💊 PLANES DE SALUD
├── 📁 que-es-un-seguro-de-salud/  # 📚 RECURSO EDUCATIVO
├── 📁 reclamos/                   # ⚠️ SISTEMA DE RECLAMOS
├── 📁 team/                       # 👥 EQUIPO DE AGENTES
├── 📁 tipos-de-planes-de-salud/   # 📊 COMPARATIVA DE PLANES
├── 📁 svgs/                       # 🎨 GRÁFICOS SVG
├── 📁 chatbot-nuevo/              # 🤖 NUEVO CHATBOT
├── 📁 cdn.hugeicons.com/          # 🎨 ICONOS DEL SITIO
├── 📄 PLAN_MIGRACION_Y_DESARROLLO.md    # 📋 PLAN DE MIGRACIÓN
├── 📄 REPORTE_CARACTERISTICAS_WEB.md    # 📊 REPORTE DE CARACTERÍSTICAS
├── 📄 preguntas.txt               # ❓ PREGUNTAS DEL CHATBOT
├── 📄 respuestas.txt              # 💬 RESPUESTAS DEL CHATBOT
└── 📄 GUIA_ESTRUCTURA_PROYECTO.md     # 📋 ESTA GUÍA
```

## 🎯 Estructura del Sitio Web Principal

### 📁 `flex-global.web.app/` - Contenido Principal

```
flex-global.web.app/
├── 📄 index.html                    # 🏠 PÁGINA PRINCIPAL
├── 📄 home.html                   # 🏠 ALTERNATIVA (redirige a index)
├── 📁 _astro/                     # ⚡ ARCHIVOS COMPILADOS (NO EDITAR)
│   ├── *.css                      # Estilos minificados
│   └── *.js                       # Scripts compilados
├── 📁 assets/                     # 📸 RECURSOS MULTIMEDIA
│   ├── 📁 images/                 # Imágenes del sitio
│   └── 📁 videos/                 # Videos (FlexGlobal Horizontal.qt)
├── 📁 svgs/                       # 🎨 GRÁFICOS SVG
│   ├── noise.svg
│   ├── radial-noise.svg
│   └── radial.svg
├── 📄 favicon.png                 # 🖼️ FAVICON PNG
├── 📄 favicon.svg                 # 🖼️ FAVICON SVG
├── 📄 webclip.png                # 📱 ICONO iOS
└── 📄 fg-full-negro-dorado.svg  # 🏢 LOGO PRINCIPAL
```

### 📂 Páginas del Sitio

```
flex-global.web.app/
├── 📂 planes-salud/               # 💊 PLANES DE SALUD
│   └── index.html                 # Obamacare, Dental, Medicare
├── 📂 asesoria-personalizada/     # 👤 ASESORÍA PERSONALIZADA
│   └── index.html                 # Formulario de contacto
├── 📂 que-es-un-seguro-de-salud/  # 📚 RECURSO EDUCATIVO
│   └── index.html                 # Información básica
├── 📂 tipos-de-planes-de-salud/   # 📊 COMPARATIVA DE PLANES
│   └── index.html                 # Tipos y opciones
├── 📂 como-aplicar-al-seguro/     # 📝 GUÍA DE APLICACIÓN
│   └── index.html                 # Proceso paso a paso
├── 📂 card-id/                    # 🪪 TARJETA DE IDENTIFICACIÓN
│   └── index.html                 # ID digital del asegurado
├── 📂 reclamos/                   # ⚠️ SISTEMA DE RECLAMOS
│   └── index.html                 # Formulario de reclamaciones
├── 📂 team/                       # 👥 EQUIPO DE AGENTES
│   └── index.html                 # Perfiles y contacto
├── 📂 mision-vision/              # 🎯 SOBRE NOSOTROS
│   └── index.html                 # Misión, visión, propósito
└── 📂 nuestros-servicios/         # 🛠️ SERVICIOS ADICIONALES
    └── index.html                 # Lista de servicios
```

## 🤖 Estructura del Chatbot

### 📁 `chatbot-nuevo/` - Chatbot Actualizado

```
chatbot-nuevo/
├── 📄 index.html        # ESTRUCTURA HTML DEL CHAT
├── 📄 chatbot.css       # 🎨 ESTILOS DEL CHATBOT
├── 📄 chatbot.js        # 🧠 LÓGICA Y RESPUESTAS
├── 📄 demo.html         # 🧪 DEMOSTRACIÓN
└── 📄 INTEGRACION.md    # 📋 GUÍA DE INTEGRACIÓN
```

### 🎨 Personalización del Chatbot

**Archivos clave para editar:**
- `chatbot.css` - Colores, tamaños, animaciones
- `chatbot.js` - Respuestas, flujo conversacional

**Variables CSS personalizables:**
```css
:root {
  --color-principal: #007bff;    /* Color principal */
  --color-secundario: #6c757d;   /* Color secundario */
  --color-fondo: #f8f9fa;        /* Fondo del chat */
  --color-texto: #212529;        /* Color del texto */
}
```

## 🎨 Recursos de Diseño

### 📁 `cdn.hugeicons.com/` - Sistema de Iconos

```
cdn.hugeicons.com/font/
├── hgi-stroke-rounded.css        # Estilos principales
├── hgi-stroke-rounded13e8.eot    # Fuente iconos
├── hgi-stroke-rounded13e8.svg    # Vectores
├── hgi-stroke-rounded13e8.ttf   # TrueType
└── hgi-stroke-rounded13e8.woff  # WebFont
```

## 📝 Archivos de Documentación

### 📄 `PLAN_MIGRACION_Y_DESARROLLO.md`
**Contenido:** Plan completo de migración a hosting propio
- ✅ Configuración de Namecheap
- ✅ Pasos de migración detallados
- ✅ Resolución de problemas comunes

### 📄 `REPORTE_CARACTERISTICAS_WEB.md`
**Contenido:** Análisis detallado del sitio actual
- ✅ Stack tecnológico
- ✅ Características implementadas
- ✅ Métricas y análisis

### 📄 `preguntas.txt` & `respuestas.txt`
**Contenido:** Dataset para el chatbot
- ❓ Preguntas frecuentes de usuarios
- 💬 Respuestas predefinidas

## 🚀 Guía Rápida de Edición

### Para editar el contenido principal:
1. **Ir a:** `flex-global.web.app/[nombre-pagina]/index.html`
2. **Editar:** Texto, imágenes, enlaces
3. **Verificar:** Responsive en móvil

### Para cambiar estilos:
1. **Buscar en:** `flex-global.web.app/_astro/*.css`
2. **Nota:** Son archivos minificados, mejor editar fuente original

### Para modificar el chatbot:
1. **Editar:** `chatbot-nuevo/chatbot.js` (respuestas)
2. **Editar:** `chatbot-nuevo/chatbot.css` (diseño)
3. **Integrar:** Seguir `INTEGRACION.md`

### Para actualizar imágenes:
1. **Reemplazar en:** `flex-global.web.app/assets/images/`
2. **Mantener:** Mismos nombres de archivo o actualizar referencias

## ⚠️ Importante

### NO EDITAR:
- ❌ `index.html` (raíz) - Es solo portal HTTrack
- ❌ `flex-global.web.app/_astro/` - Archivos compilados
- ❌ `hts-cache/` - Archivos temporales

### SI EDITAR:
- ✅ `flex-global.web.app/*.html` - Páginas principales
- ✅ `chatbot-nuevo/` - Todo el chatbot
- ✅ `assets/` - Recursos multimedia

## 🔗 Referencias Rápidas

### Página principal: `index.html`
### Chatbot: `chatbot-nuevo/index.html`
### Planes de salud: `planes-salud/index.html`
### Asesoría: `asesoria-personalizada/index.html`

---

**Última actualización:** Diciembre 2024
**Versión:** 1.0.0
**Propósito:** Facilitar la navegación y edición del proyecto