import work1 from '../assets/images/our-works/1.webp';
import work2 from '../assets/images/our-works/2.png';
import work3 from '../assets/images/our-works/3.png';
import work4 from '../assets/images/our-works/4.svg';
import work5 from '../assets/images/our-works/5.avif';
import work6 from '../assets/images/our-works/6.jpg';
import work7 from '../assets/images/our-works/7.png';
import work8 from '../assets/images/our-works/8.png';

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
    image: work1,
    size: 'wide',
  },
  {
    titleKey: 'selectedWork.items.dniproNews.title',
    categoryKey: 'selectedWork.items.dniproNews.category',
    image: work2,
  },
  {
    titleKey: 'selectedWork.items.gangBeton.title',
    categoryKey: 'selectedWork.items.gangBeton.category',
    image: work3,
    size: 'large',
  },
  {
    titleKey: 'selectedWork.items.aptekaOnline.title',
    categoryKey: 'selectedWork.items.aptekaOnline.category',
    image: work4,
  },
  {
    titleKey: 'selectedWork.items.beautifullyBlessed.title',
    categoryKey: 'selectedWork.items.beautifullyBlessed.category',
    image: work5,
  },
  {
    titleKey: 'selectedWork.items.elgato.title',
    categoryKey: 'selectedWork.items.elgato.category',
    image: work6,
    size: 'wide',
  },
  {
    titleKey: 'selectedWork.items.dts.title',
    categoryKey: 'selectedWork.items.dts.category',
    image: work7,
  },
  {
    titleKey: 'selectedWork.items.atlas.title',
    categoryKey: 'selectedWork.items.atlas.category',
    image: work8,
    size: 'wide',
  },
];
