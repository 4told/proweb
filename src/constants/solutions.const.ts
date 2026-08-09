export type SolutionProjectType =
  | 'new-website'
  | 'redesign'
  | 'landing'
  | 'ecommerce'
  | 'marketing'
  | 'support';

export interface ISolution {
  titleKey: string;
  descriptionKey: string;
  projectType: SolutionProjectType;
  leadContext: string;
  detailsUrl?: string;
}

export const solutionsConst: ISolution[] = [
  {
    titleKey: 'solutions.items.landing.title',
    descriptionKey: 'solutions.items.landing.description',
    projectType: 'landing',
    leadContext: 'services:landing-page',
  },
  {
    titleKey: 'solutions.items.businessWebsite.title',
    descriptionKey: 'solutions.items.businessWebsite.description',
    projectType: 'new-website',
    leadContext: 'services:business-website',
  },
  {
    titleKey: 'solutions.items.corporateWebsite.title',
    descriptionKey: 'solutions.items.corporateWebsite.description',
    projectType: 'new-website',
    leadContext: 'services:corporate-website',
  },
  {
    titleKey: 'solutions.items.ecommerce.title',
    descriptionKey: 'solutions.items.ecommerce.description',
    projectType: 'ecommerce',
    leadContext: 'services:ecommerce',
  },
  {
    titleKey: 'solutions.items.productCatalog.title',
    descriptionKey: 'solutions.items.productCatalog.description',
    projectType: 'ecommerce',
    leadContext: 'services:product-catalog',
  },
  {
    titleKey: 'solutions.items.redesign.title',
    descriptionKey: 'solutions.items.redesign.description',
    projectType: 'redesign',
    leadContext: 'services:website-redesign',
  },
  {
    titleKey: 'solutions.items.seo.title',
    descriptionKey: 'solutions.items.seo.description',
    projectType: 'marketing',
    leadContext: 'services:seo',
  },
  {
    titleKey: 'solutions.items.googleBusiness.title',
    descriptionKey: 'solutions.items.googleBusiness.description',
    projectType: 'marketing',
    leadContext: 'services:google-business-profile',
  },
  {
    titleKey: 'solutions.items.analytics.title',
    descriptionKey: 'solutions.items.analytics.description',
    projectType: 'marketing',
    leadContext: 'services:analytics',
  },
  {
    titleKey: 'solutions.items.googleAds.title',
    descriptionKey: 'solutions.items.googleAds.description',
    projectType: 'marketing',
    leadContext: 'services:google-ads',
  },
  {
    titleKey: 'solutions.items.multilingual.title',
    descriptionKey: 'solutions.items.multilingual.description',
    projectType: 'new-website',
    leadContext: 'services:multilingual-website',
  },
  {
    titleKey: 'solutions.items.support.title',
    descriptionKey: 'solutions.items.support.description',
    projectType: 'support',
    leadContext: 'services:website-support',
  },
];
