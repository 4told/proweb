import whatWeDo from '../assets/images/what-we-do.png'
import selectedWork from '../assets/images/selected-works.png'

export interface ISelectedWork {
  title: string
  description: string
  image: string
}

export const selectedWorksConst: ISelectedWork[] = [
  {
    title: 'Project One',
    description: 'Landing page / UI design',
    image: selectedWork
  },
  {
    title: 'Project Two',
    description: 'E-commerce interface',
    image: whatWeDo
  }
]