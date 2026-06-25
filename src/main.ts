import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
import {initScrollProgress, initTheme, observer} from './theme'
import {setLanguage, renderTranslations, initLangDropdown, updateLanguageDropdown} from './i18'
import {renderLayout} from "./parts";
import {improveSolutionCard} from "./modules/solutions/solutions.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderLayout();

initTheme()
renderTranslations()
setLanguage()

initLangDropdown()
updateLanguageDropdown()
observer()

improveSolutionCard()
initScrollProgress()