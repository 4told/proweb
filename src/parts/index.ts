import {renderHeader} from "./header.ts";
import {renderHero} from "./hero.ts";
import {renderWhatWeDo} from "./what-we-do.ts";
import {renderSelectedWork} from "./selected-work.ts";
import {renderHowItHappens} from "./how-it-happens.ts";
import {renderContact} from "./contact.ts";
import {renderAbout} from "./about.ts";
import {renderTestimonials} from "./testimonials.ts";
import {renderFooter} from "./footer.ts";
export function renderLayout() {
    return `
    ${renderHeader()}
    ${renderHero()}
    ${renderWhatWeDo()}
    ${renderSelectedWork()}
    ${renderHowItHappens()}
    ${renderContact()}
    ${renderAbout()}
    ${renderTestimonials()}
    ${renderFooter()}
  `
}