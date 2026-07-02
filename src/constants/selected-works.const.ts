import apteka from '../assets/images/selected-works/Apteka.png';
import atlas from '../assets/images/selected-works/Atlas.png';
import beautifullyBlessed from '../assets/images/selected-works/BeautifullyBlessed.png';
import dniproNews from '../assets/images/selected-works/DniproNews.png';
import dts from '../assets/images/selected-works/DTS.png';
import elgato from '../assets/images/selected-works/Elgato.png';
import gangBeton from '../assets/images/selected-works/GangBeton.png';
import melius from '../assets/images/selected-works/Melius.png';

export interface ISelectedWork {
  titleKey: string;
  categoryKey: string;
  image: string;
  size?: 'wide' | 'large';
}

export const selectedWorksConst: ISelectedWork[] = [
  {
    titleKey: 'selectedWork.items.melius.title',
    categoryKey: 'selectedWork.items.melius.category',
    image: melius,
    size: 'wide',
  },
  {
    titleKey: 'selectedWork.items.dniproNews.title',
    categoryKey: 'selectedWork.items.dniproNews.category',
    image: dniproNews,
  },
  {
    titleKey: 'selectedWork.items.gangBeton.title',
    categoryKey: 'selectedWork.items.gangBeton.category',
    image: gangBeton,
    size: 'wide',
  },
  {
    titleKey: 'selectedWork.items.aptekaOnline.title',
    categoryKey: 'selectedWork.items.aptekaOnline.category',
    image: apteka,
  },
  {
    titleKey: 'selectedWork.items.beautifullyBlessed.title',
    categoryKey: 'selectedWork.items.beautifullyBlessed.category',
    image: beautifullyBlessed,
  },
  {
    titleKey: 'selectedWork.items.elgato.title',
    categoryKey: 'selectedWork.items.elgato.category',
    image: elgato,
    size: 'wide',
  },
  {
    titleKey: 'selectedWork.items.dts.title',
    categoryKey: 'selectedWork.items.dts.category',
    image: dts,
  },
  {
    titleKey: 'selectedWork.items.atlas.title',
    categoryKey: 'selectedWork.items.atlas.category',
    image: atlas,
    size: 'wide',
  },
];
