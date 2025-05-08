import i18next from '../../i18n';

// Wait for i18next to initialize
i18next.on('initialized', () => {
  // Update text content with translations
  document.getElementById('greeting').textContent = i18next.t('greeting');
  document.getElementById('button').textContent = i18next.t('button');
});

// Add language switcher
document.getElementById('switch-lang').addEventListener('click', () => {
  const newLang = i18next.language === 'en' ? 'bn' : 'en';
  i18next.changeLanguage(newLang, () => {
    document.getElementById('greeting').textContent = i18next.t('greeting');
    document.getElementById('button').textContent = i18next.t('button');
  });
});