import {renderHeader} from "./header.ts";
import {renderHero} from "./hero.ts";
import {renderWhatWeDo} from "./what-we-do.ts";
import {renderSelectedWork} from "./selected-work.ts";

export function renderLayout() {
    return `
    ${renderHeader()}
    ${renderHero()}
    ${renderWhatWeDo()}
    ${renderSelectedWork()}
  `
}