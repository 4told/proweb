import './style.css'
import {initTheme, observer} from './theme'
import {setLanguage, renderTranslations, initLangDropdown, updateLanguageDropdown} from './i18'
import {renderLayout} from "./parts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderLayout();

initTheme()
renderTranslations()
setLanguage()

initLangDropdown()
updateLanguageDropdown()
observer()
