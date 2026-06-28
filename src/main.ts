import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { initScrollProgress, initTheme, observer } from './theme';
import {
  setLanguage,
  renderTranslations,
  initLangDropdown,
  updateLanguageDropdown,
} from './i18';
import { renderLayout } from './parts';
import { improveSolutionCard } from './modules/solutions/solutions.ts';
import { initHowItHappensScroll } from './modules/how-it-happens/how-it-happens';
import { BackgroundBalls } from './components/BackgroundBalls.ts';
import { stickyScroll } from './parts/hero.ts';
import { initContact } from './modules/contacts/contact.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderLayout();

const canvas = document.querySelector('#bg') as HTMLCanvasElement;
new BackgroundBalls(canvas);

initTheme();
renderTranslations();
setLanguage();

initLangDropdown();
updateLanguageDropdown();
observer();
initHowItHappensScroll();
initContact();

improveSolutionCard();
initScrollProgress();

stickyScroll();
