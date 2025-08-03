# Plan de Migración y Desarrollo - FlexGlobal Website

## 📋 Resumen Ejecutivo

Este documento contiene el plan completo para la migración exitosa del sitio web de FlexGlobal, incluyendo recomendaciones técnicas, pasos de implementación, y consideraciones para el chatbot inteligente.

## 🎯 Estado Actual del Proyecto

### Arquitectura Técnica
- **Formato**: Sitio web estático compilado (HTML/CSS/JS)
- **Framework Original**: Astro (compilado a HTML estático)
- **Diseño**: Bootstrap 5.3.6
- **Íconos**: HugeIcons
- **Chatbot**: Servicio externo integrado vía API

### Estructura de Archivos
```
flexglobal-preview/
├── index.html (página principal)
├── flex-global.web.app/ (sitio completo)
│   ├── _astro/ (archivos compilados)
│   ├── *.html (páginas del sitio)
│   └── assets/ (imágenes y recursos)
└── REPORTE_CARACTERISTICAS_WEB.md (análisis completo)
```

## 🚀 Plan de Migración - Paso a Paso

### Fase 1: Preparación y Setup (15-20 minutos)

#### 1.1 Configuración de Hosting Recomendada
**Opción Principal: Namecheap**
- **Plan**: Stellar o Stellar Plus
- **Ventajas**:
  - Integración directa con dominio
  - Setup instantáneo
  - cPanel incluido
  - SSL gratuito
  - Soporte 24/7

**Precios**:
- Stellar: ~$2.88/mes
- Stellar Plus: ~$4.88/mes

#### 1.2 Archivos Críticos a Migrar
```
flex-global.web.app/
├── index.html (renombrar a home.html)
├── *.html (todas las páginas)
├── _astro/ (carpeta completa)
├── assets/ (carpeta completa)
├── cdn.hugeicons.com/ (carpeta de íconos)
└── favicon.* (todos los favicons)
```

### Fase 2: Migración del Sitio (30-45 minutos)

#### 2.1 Subida de Archivos
**Método 1: cPanel File Manager**
1. Login en cPanel
2. File Manager → public_html/
3. Upload → Select Files
4. Subir todos los archivos manteniendo estructura

**Método 2: FTP**
```bash
# Credenciales FTP (proporcionadas por Namecheap)
Host: ftp.tudominio.com
Usuario: cpanel_username
Contraseña: cpanel_password
Puerto: 21

# Usar FileZilla o similar
```

#### 2.2 Configuración de Dominio
1. Apuntar dominio a hosting Namecheap
2. Configurar DNS si es necesario
3. Esperar propagación (5-30 minutos)

### Fase 3: Chatbot - Opciones de Migración

#### Opción A: Mantener Servicio Externo (Recomendado - Rápido)
**Ventajas**:
- Sin cambios necesarios
- Mantiene historial de conversaciones
- Backend ya funcional

**Configuración**:
- URLs del chatbot permanecen iguales
- No requiere modificación de código

#### Opción B: Crear Nuevo Chatbot (Avanzado)
**Requisitos Backend**:
```javascript
// Endpoints necesarios
POST /api/conversation-configurations
GET /api/consultar-conversacion/:id
POST /api/webhook/popup
```

**Tecnologías Recomendadas**:
- **Backend**: Node.js + Express
- **Base de Datos**: MongoDB o PostgreSQL
- **IA**: OpenAI API o similar
- **Tiempo de desarrollo**: 2-3 semanas

### Fase 4: Optimizaciones Post-Migración

#### 4.1 Performance
- [ ] Habilitar compresión gzip
- [ ] Optimizar imágenes
- [ ] Configurar cache headers
- [ ] Minificar CSS/JS adicional

#### 4.2 SEO
- [ ] Actualizar sitemap.xml
- [ ] Verificar meta tags
- [ ] Configurar Google Search Console
- [ ] Revisar robots.txt

#### 4.3 Seguridad
- [ ] SSL automático (Namecheap lo proporciona)
- [ ] Configurar HTTPS redirect
- [ ] Verificar formularios
- [ ] Actualizar políticas de privacidad

## 🔧 Configuración Técnica Detallada

### Estructura de URLs Post-Migración
```
https://tudominio.com/ → index.html
https://tudominio.com/planes-salud/ → planes-salud/index.html
https://tudominio.com/asesoria-personalizada/ → asesoria-personalizada/index.html
https://tudominio.com/reclamos/ → reclamos/index.html
https://tudominio.com/card-id/ → card-id/index.html
```

### Configuración del Chatbot
```javascript
// URLs actuales del chatbot (mantener)
const CHATBOT_CONFIG = {
  baseUrl: 'https://bot.flexglobal.mosquedacordova.com',
  endpoints: {
    config: '/api/conversation-configurations',
    history: '/api/consultar-conversacion',
    webhook: '/api/webhook/popup'
  }
};
```

## 📊 Checklist de Verificación

### Pre-Migración
- [ ] Comprar hosting Namecheap
- [ ] Descargar backup completo
- [ ] Verificar todos los archivos están presentes
- [ ] Testear sitio localmente

### Durante Migración
- [ ] Subir archivos manteniendo estructura
- [ ] Verificar todas las páginas cargan
- [ ] Testear chatbot funcional
- [ ] Validar formularios

### Post-Migración
- [ ] SSL activo y funcionando
- [ ] Todas las imágenes cargan correctamente
- [ ] Links internos funcionan
- [ ] Chatbot responde correctamente
- [ ] Formularios envían datos
- [ ] Móvil responsive verificado

## 🆘 Resolución de Problemas Comunes

### Problema: Chatbot no carga
**Solución**: Verificar CORS en el nuevo dominio
**Archivo**: Verificar `chatBot.astro_astro_type_script_index_0_lang.C9qN_KGW.js`

### Problema: Imágenes rotas
**Solución**: Verificar rutas relativas en `_astro/` y `assets/`

### Problema: CSS no aplica
**Solución**: Verificar que la carpeta `_astro/` está en la raíz

## 📞 Contactos y Recursos

### Soporte Namecheap
- Live Chat: 24/7 disponible
- Ticket System: Disponible en panel
- Documentación: https://www.namecheap.com/support/

### Recursos Adicionales
- [Guía de migración Namecheap](https://www.namecheap.com/hosting/migration/)
- [Configuración de cPanel](https://www.namecheap.com/support/migrate-website-to-namecheap/)
- [SSL Certificate Guide](https://www.namecheap.com/security/ssl-certificates/)

## 🎯 Próximos Pasos

1. **Inmediato**: Comprar hosting Namecheap
2. **Día 1**: Migrar archivos y verificar funcionamiento
3. **Semana 1**: Optimizaciones de performance y SEO
4. **Semana 2**: Análisis de métricas y ajustes
5. **Mes 1**: Evaluar necesidad de nuevo chatbot

---

**Última actualización**: [Fecha actual]
**Responsable**: [Tu nombre/equipo]
**Estado**: Pendiente de inicio