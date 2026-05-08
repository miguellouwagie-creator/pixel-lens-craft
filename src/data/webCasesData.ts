import tropideniaImage from '@/assets/showcase/tropidenia.jpg';
import bvsImage from '@/assets/showcase/bvs.jpg';
import gymdeniaImage from '@/assets/showcase/gymdenia.jpg';

export interface WebCaseItem {
  id: 'tropidenia' | 'bvs' | 'gymdenia';
  image: string;
  eyebrowKey: string;
  titleKey: string;
  bodyKey: string;
  tagKeys: string[];
}

export const webCasesData: WebCaseItem[] = [
  {
    id: 'tropidenia',
    image: tropideniaImage,
    eyebrowKey: 'home.casesWeb.case1.eyebrow',
    titleKey: 'home.casesWeb.case1.title',
    bodyKey: 'home.casesWeb.case1.body',
    tagKeys: ['home.casesWeb.case1.tag1', 'home.casesWeb.case1.tag2', 'home.casesWeb.case1.tag3'],
  },
  {
    id: 'bvs',
    image: bvsImage,
    eyebrowKey: 'home.casesWeb.case2.eyebrow',
    titleKey: 'home.casesWeb.case2.title',
    bodyKey: 'home.casesWeb.case2.body',
    tagKeys: ['home.casesWeb.case2.tag1', 'home.casesWeb.case2.tag2'],
  },
  {
    id: 'gymdenia',
    image: gymdeniaImage,
    eyebrowKey: 'home.casesWeb.case3.eyebrow',
    titleKey: 'home.casesWeb.case3.title',
    bodyKey: 'home.casesWeb.case3.body',
    tagKeys: ['home.casesWeb.case3.tag1', 'home.casesWeb.case3.tag2', 'home.casesWeb.case3.tag3'],
  },
];
