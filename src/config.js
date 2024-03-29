const config = {
  DEFAULT_APP_LANG: "Uz",
  API_ROOT: 'http://localhost:8090',
  ROLES: {

  },
  SERVICE_TYPES: [
    {
      label: 'Telegram bot',
      value: 'TELEGRAM_BOT'
    },
    {
      label: 'WEB sayt(wordpress)',
      value: 'WEB_SITE_WORDPRESS'
    },
    {
      label: 'Mobil ilova',
      value: 'MOBILE_APP'
    },
    {
      label: 'Web sistema',
      value: 'WEB_SYSTEM'
    },
    {
      label: 'Dizayn xizmatlari',
      value: 'DESIGN_SERVICES'
    },
    {
      label: 'Google ADS',
      value: 'GOOGLE_ADS'
    },
  ],
  STATUS: [
    {
      label: 'Yaratilgan',
      value: 'CREATED'
    },
    {
      label: 'Jarayonda',
      value: 'IN_PROGRESS'
    },
    {
      label: "Deadline o'tib ketdi",
      value: 'DEADLINE_HAS_PASSED'
    },
    {
      label: 'Tugallangan',
      value: 'COMPLETED'
    },
  ],
}

export default config;
