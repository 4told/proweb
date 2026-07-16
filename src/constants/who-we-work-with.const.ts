export type ContactProjectType =
  'new-website' | 'redesign' | 'landing' | 'support';

export interface IWhoWeWorkWithItem {
  titleKey: string;
  descriptionKey: string;
  leadContext: string;
  projectType?: ContactProjectType;
}

export const whoWeWorkWithConst: IWhoWeWorkWithItem[] = [
  {
    titleKey: 'whoWeWorkWith.items.serviceBusinesses.title',
    descriptionKey: 'whoWeWorkWith.items.serviceBusinesses.description',
    leadContext: 'service-business',
  },
  {
    titleKey: 'whoWeWorkWith.items.localBrands.title',
    descriptionKey: 'whoWeWorkWith.items.localBrands.description',
    leadContext: 'local-brand',
  },
  {
    titleKey: 'whoWeWorkWith.items.founders.title',
    descriptionKey: 'whoWeWorkWith.items.founders.description',
    leadContext: 'founder-launching-business-or-offer',
  },
  {
    titleKey: 'whoWeWorkWith.items.outdatedWebsites.title',
    descriptionKey: 'whoWeWorkWith.items.outdatedWebsites.description',
    leadContext: 'business-with-outdated-website',
    projectType: 'redesign',
  },
  {
    titleKey: 'whoWeWorkWith.items.growthReady.title',
    descriptionKey: 'whoWeWorkWith.items.growthReady.description',
    leadContext: 'business-ready-for-growth',
  },
];
