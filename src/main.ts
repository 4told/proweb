import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
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