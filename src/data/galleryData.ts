import sinEditar1 from '@/assets/sin-editar-1.jpeg';
import editada1 from '@/assets/editada-1.jpeg';
import sinEditar2 from '@/assets/sin-editar-2.jpeg';
import editada2 from '@/assets/editada-2.png';
import sinEditar3 from '@/assets/sin-editar-3.jpeg';
import editada3 from '@/assets/editada-3.png';
import sinEditar4 from '@/assets/sin-editar-4.jpeg';
import editada4 from '@/assets/editada-4.png';
import sinEditar5 from '@/assets/sin-editar-5.jpg';
import editada5 from '@/assets/editada-5.jpg';
import sinEditar6 from '@/assets/sin-editar-6.jpg';
import editada6 from '@/assets/editada-6.jpg';
// Item 7 (assets 8): sin-editar-7 no existe, se usan los pares 8, 9, 10
import sinEditar8 from '@/assets/sin-editar-8.jpeg';
import editada8 from '@/assets/editada-8.png';
import sinEditar9 from '@/assets/sin-editar-9.jpeg';
import editada9 from '@/assets/editada-9.png';
import sinEditar10 from '@/assets/sin-editar-10.jpeg';
import editada10 from '@/assets/editada-10.png';

export interface GalleryItem {
  id: number;
  imageBefore: string;
  imageAfter: string;
  numberKey: string;
  titleKey: string;
  captionKey: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    imageBefore: sinEditar1,
    imageAfter: editada1,
    numberKey: 'portfolio.gallery.item1.number',
    titleKey: 'portfolio.gallery.item1.title',
    captionKey: 'portfolio.gallery.item1.caption',
  },
  {
    id: 2,
    imageBefore: sinEditar2,
    imageAfter: editada2,
    numberKey: 'portfolio.gallery.item2.number',
    titleKey: 'portfolio.gallery.item2.title',
    captionKey: 'portfolio.gallery.item2.caption',
  },
  {
    id: 3,
    imageBefore: sinEditar3,
    imageAfter: editada3,
    numberKey: 'portfolio.gallery.item3.number',
    titleKey: 'portfolio.gallery.item3.title',
    captionKey: 'portfolio.gallery.item3.caption',
  },
  {
    id: 4,
    imageBefore: sinEditar4,
    imageAfter: editada4,
    numberKey: 'portfolio.gallery.item4.number',
    titleKey: 'portfolio.gallery.item4.title',
    captionKey: 'portfolio.gallery.item4.caption',
  },
  {
    id: 5,
    imageBefore: sinEditar5,
    imageAfter: editada5,
    numberKey: 'portfolio.gallery.item5.number',
    titleKey: 'portfolio.gallery.item5.title',
    captionKey: 'portfolio.gallery.item5.caption',
  },
  {
    id: 6,
    imageBefore: sinEditar6,
    imageAfter: editada6,
    numberKey: 'portfolio.gallery.item6.number',
    titleKey: 'portfolio.gallery.item6.title',
    captionKey: 'portfolio.gallery.item6.caption',
  },
  // Items 7-9: assets 8, 9, 10 (asset 7 no disponible). Copy "TODO 5.5" en locales.
  {
    id: 7,
    imageBefore: sinEditar8,
    imageAfter: editada8,
    numberKey: 'portfolio.gallery.item7.number',
    titleKey: 'portfolio.gallery.item7.title',
    captionKey: 'portfolio.gallery.item7.caption',
  },
  {
    id: 8,
    imageBefore: sinEditar9,
    imageAfter: editada9,
    numberKey: 'portfolio.gallery.item8.number',
    titleKey: 'portfolio.gallery.item8.title',
    captionKey: 'portfolio.gallery.item8.caption',
  },
  {
    id: 9,
    imageBefore: sinEditar10,
    imageAfter: editada10,
    numberKey: 'portfolio.gallery.item9.number',
    titleKey: 'portfolio.gallery.item9.title',
    captionKey: 'portfolio.gallery.item9.caption',
  },
];
