import { renderHeader } from './header.ts';
import { renderHero } from './hero.ts';
import { renderWhatWeDo } from './../modules/solutions/solutions.ts';
import { renderHowItHappens } from '../modules/how-it-happens/how-it-happens.ts';
import { renderContact } from '../modules/contacts/contact.ts';
import { renderFooter } from './footer.ts';
import { renderSelectedWork } from '../modules/selected-works/selected-work.ts';
import { renderAbout } from '../modules/about/about.ts';
import { renderWhoWeWorkWith } from '../modules/who-we-work-with/who-we-work-with.ts';
export function renderLayout() {
  return `
    ${renderHeader()}
    ${renderHero()}
    ${renderWhatWeDo()}
    ${renderWhoWeWorkWith()}
    ${renderSelectedWork()}
    ${renderHowItHappens()}
    ${renderContact()}
    ${renderAbout()}
    ${renderFooter()}
  `;
}
