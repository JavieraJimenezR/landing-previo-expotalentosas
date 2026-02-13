/**
 * Genera un archivo .ics compatible con Google Calendar, Outlook y Apple Calendar
 */
export interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  url?: string;
}

/**
 * Formatea una fecha para el formato iCalendar (YYYYMMDDTHHMMSSZ)
 */
function formatICalDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

/**
 * Genera el contenido del archivo .ics
 */
function generateICS(event: CalendarEvent): string {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Expo Talentosas//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART:${formatICalDate(event.startDate)}`,
    `DTEND:${formatICalDate(event.endDate)}`,
    `DTSTAMP:${formatICalDate(new Date())}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location}`,
    event.url ? `URL:${event.url}` : '',
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-PT24H',
    'DESCRIPTION:Recordatorio: Expo Talentosas mañana',
    'ACTION:DISPLAY',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].filter(Boolean).join('\r\n');

  return icsContent;
}

/**
 * Descarga el archivo .ics
 */
function downloadICS(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

/**
 * Genera URL para Google Calendar
 */
function getGoogleCalendarUrl(event: CalendarEvent): string {
  const baseUrl = 'https://calendar.google.com/calendar/render';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    details: event.description,
    location: event.location,
    dates: `${formatICalDate(event.startDate)}/${formatICalDate(event.endDate)}`
  });
  
  return `${baseUrl}?${params.toString()}`;
}

/**
 * Genera URL para Outlook.com
 */
function getOutlookUrl(event: CalendarEvent): string {
  const baseUrl = 'https://outlook.live.com/calendar/0/deeplink/compose';
  const params = new URLSearchParams({
    subject: event.title,
    body: event.description,
    location: event.location,
    startdt: event.startDate.toISOString(),
    enddt: event.endDate.toISOString(),
    path: '/calendar/action/compose',
    rru: 'addevent'
  });
  
  return `${baseUrl}?${params.toString()}`;
}

/**
 * Función principal para agregar evento al calendario
 * Detecta el sistema operativo y ofrece la mejor opción
 */
export function addToCalendar(event: CalendarEvent): void {
  const userAgent = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isAndroid = /android/.test(userAgent);
  const isMobile = isIOS || isAndroid;

  // En móviles iOS/Android, descargar .ics
  if (isMobile) {
    const icsContent = generateICS(event);
    downloadICS(icsContent, 'expo-talentosas.ics');
    return;
  }

  // En desktop, mostrar opciones
  showCalendarOptions(event);
}

/**
 * Muestra un menú de opciones para elegir el calendario
 */
function showCalendarOptions(event: CalendarEvent): void {
  const options = [
    {
      name: 'Google Calendar',
      action: () => window.open(getGoogleCalendarUrl(event), '_blank')
    },
    {
      name: 'Outlook',
      action: () => window.open(getOutlookUrl(event), '_blank')
    },
    {
      name: 'Apple Calendar / Otro',
      action: () => {
        const icsContent = generateICS(event);
        downloadICS(icsContent, 'expo-talentosas.ics');
      }
    }
  ];

  // Crear modal personalizado
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };

  const content = document.createElement('div');
  content.className = 'bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl border-2 border-primary/20';
  
  content.innerHTML = `
    <h3 class="text-xl font-bold mb-4 text-foreground">Agregar al calendario</h3>
    <div class="space-y-2">
      ${options.map((opt, i) => `
        <button 
          data-option="${i}"
          class="w-full p-3 text-left rounded-xl border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all font-medium"
        >
          ${opt.name}
        </button>
      `).join('')}
    </div>
    <button 
      data-close
      class="mt-4 w-full p-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors font-medium"
    >
      Cancelar
    </button>
  `;

  // Event listeners
  content.querySelectorAll('[data-option]').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      options[i].action();
      modal.remove();
    });
  });

  content.querySelector('[data-close]')?.addEventListener('click', () => {
    modal.remove();
  });

  modal.appendChild(content);
  document.body.appendChild(modal);
}

/**
 * Función helper para el evento de Expo Talentosas
 */
export function addExpoTalentosasToCalendar(): void {
  const event: CalendarEvent = {
    title: 'Expo Talentosas 2026 - FerIA Laboral',
    description: `¡No te pierdas la primera feria laboral impulsada por IA para mujeres!

🎯 Sube tu CV y haz Match con las mejores ofertas
📍 3 días de oportunidades: 16, 17 y 18 de Marzo
🚀 +50 Empresas, +200 Vacantes

Más información: https://expotalentosas.cl`,
    location: 'Plataforma Online - https://expotalentosas.cl',
    startDate: new Date('2026-03-16T08:00:00-03:00'), // 8 AM Chile
    endDate: new Date('2026-03-18T18:00:00-03:00'),   // 6 PM Chile día 18
    url: 'https://expotalentosas.cl'
  };

  addToCalendar(event);
}
