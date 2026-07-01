import { renderHeader } from './header.ts';
import { renderHero } from './hero.ts';
import { renderWhatWeDo } from './../modules/solutions/solutions.ts';
import { renderSelectedWork } from './selected-work.ts';
import { renderHowItHappens } from '../modules/how-it-happens/how-it-happens.ts';
import { renderContact } from '../modules/contacts/contact.ts';
import { renderFooter } from './footer.ts';
export function renderLayout() {
  return `
    ${renderHeader()}
    ${renderHero()}
    ${renderWhatWeDo()}
    ${renderSelectedWork()}
    ${renderHowItHappens()}
    ${renderContact()}
    ${renderFooter()}
  `;
}
