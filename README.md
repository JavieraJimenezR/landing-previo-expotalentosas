# 🎯 Landing Previo Expo Talentosas

Landing page de pre-lanzamiento para la feria laboral **Expo Talentosas 2026** - Primera feria laboral impulsada por IA para mujeres.

![Expo Talentosas](https://img.shields.io/badge/Launch-16--18%20Marzo%202026-DC1678?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite)

## ✨ Características Principales

### 🎨 Diseño Retro & Moderno
- **Hero Section**: Ventana de navegador retro con logo oficial de Expo Talentosas
- **Countdown Timer**: Cuenta regresiva en tiempo real hasta el 16 de marzo 2026 a las 8:00 AM
- **Pixel Art Decorations**: Iconos pixel art animados (calendario, mundo, shine, click)
- **Gradient Magenta**: Paleta de colores rosa/magenta vibrante
- **Animaciones Suaves**: Efectos de shimmer, scale-in, fade-in, bounce y pulse

### 📅 Integración de Calendario
- **Botón "Agregar al Calendario"**: Integración con múltiples plataformas
  - Google Calendar (web)
  - Outlook (web y desktop)
  - Apple Calendar (archivo .ics)
  - Detección automática de dispositivo móvil/desktop
  - Archivo .ics compatible con todos los calendarios
  - Recordatorio automático 24h antes del evento

### 🎓 Tutorial Interactivo
- **Botón Flotante Animado**: Con efectos de ping, pulse y bounce
- **Tooltip en Hover**: "¿Cómo funciona?"
- **Modal Tutorial**: 5 pasos explicativos con iconos
- **Animaciones Llamativas**: Rings animados y sombras magenta

### 📱 Secciones del Landing

1. **Hero**: 
   - Logo oficial Expo Talentosas
   - Browser window retro con controles de colores
   - Countdown timer (días, horas, minutos, segundos)
   - Botón "Agregar al Calendario"
   - Íconos pixel art decorativos flotantes

2. **Cómo Funciona**: 
   - 3 cards con gradientes magenta
   - Upload CV → IA completa perfil → Smart Match
   - Iconos animados y features checklist

3. **Footer**: 
   - Dos ventanas retro side-by-side
   - Información TeamWork con redes sociales
   - Enlaces y contacto
   - Attribution a CENIA

## 🛠️ Stack Tecnológico

```json
{
  "framework": "React 18.2.0",
  "language": "TypeScript 5.0.2",
  "build": "Vite 4.4.5",
  "styling": "Tailwind CSS 3.3.3",
  "icons": "Lucide React 0.263.1"
}
```

## 📦 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/JavieraJimenezR/landing-previo-expotalentosas.git
cd landing-previo-expotalentosas

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
# Disponible en http://localhost:5173

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
```

## 🎨 Paleta de Colores

```css
--primary: hsl(220, 90%, 56%)     /* Azul #3366FF */
--accent: hsl(280, 100%, 70%)     /* Violeta */
--magenta: hsl(327, 95%, 55%)     /* Magenta #DC1678 */
--pink: hsl(307, 100%, 77%)       /* Rosa #FF90F5 */
--gradient-magenta: linear-gradient(135deg, magenta → pink)
```

## 📂 Estructura del Proyecto

```
landing-previo-expotalentosas/
├── public/
│   ├── logo-expotalentosas.svg
│   ├── logo-teamwork.svg
│   ├── logo-teamwork-azul.svg
│   ├── pixel-calendar.svg
│   ├── pixel-click.svg
│   ├── pixel-shine.svg
│   └── pixel-world.svg
├── src/
│   ├── components/
│   │   └── AddToCalendarButton.tsx
│   ├── utils/
│   │   └── calendarUtils.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Funcionalidades Implementadas

- ✅ Countdown timer en tiempo real
- ✅ Integración de calendario (Google, Outlook, Apple)
- ✅ Tutorial modal con 5 pasos
- ✅ Botón flotante animado con tooltip
- ✅ Diseño responsive (mobile, tablet, desktop)
- ✅ Pixel art decorations con animaciones
- ✅ Footer con dos ventanas retro
- ✅ Redes sociales (Instagram, LinkedIn, YouTube)
- ✅ Gradientes y sombras magenta
- ✅ Animaciones avanzadas (bounce, ping, pulse, shimmer)

## 🔮 Próximos Pasos

- [ ] Integrar backend para captura de emails
- [ ] Añadir video tutorial real
- [ ] Implementar analytics (Google Analytics / Mixpanel)
- [ ] Conectar con sistema de notificaciones
- [ ] SEO optimization (meta tags, Open Graph)
- [ ] Deploy en Vercel/Netlify

## 👥 Créditos

**Desarrollado por**: TeamWork + CENIA  
**Target**: Mujeres en busca de oportunidades laborales  
**Evento**: 16, 17 y 18 de Marzo 2026  
**Hora de inicio**: 8:00 AM (Chile)

---

**Hecho con 💜 para las talentosas de Chile**
