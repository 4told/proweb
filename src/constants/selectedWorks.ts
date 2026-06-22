import whatWeDo from '../assets/what-we-do.png'
import selectedWork from '../assets/selected-works.png'

export interface ISelectedWork {
  title: string
  description: string
  image: string
}

export const selectedWorks: ISelectedWork[] = [
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