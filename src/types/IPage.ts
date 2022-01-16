export interface IPage {
  id: string;
  pageId: string;
  title: string;
  description?: string;
  slug?: string;
  tags: string[];
  type: string;
  category?: string;
  header?: IPageBanner | IPageCarousel | IPageElement;
  content?: IPageElement[];
  footer?: {
    content?: IPageElement;
  };
  status?: string;
  author?: string;
}

export const PageElementTypes = [
  'article',
  'section',
  'paragraph',
  'banner',
] as const;
export type PageElementType = typeof PageElementTypes[number];

export interface IPageElement {
  id?: string; // anchor tag ID / dom ID, if omitted, it uses title as slug
  title?: string;
  type: PageElementType;
  subtitle?: string;
  text?: string; // inner text
  icon?: string; // tentatively just an icon name
  image?: string; // tentatively just an URL
  className?: string;
  styleName?: string; // can be used in place of class name as styled component identifier
  content?: IPageElement[];
}

export interface IPageBanner {}

export interface IPageCarousel {
  title?: string;
  id?: string;
  className?: string;
  styleName?: string;
  slides: IPageCarouselSlide[];
}

export interface IPageCarouselSlide {
  id?: string; // No defaults
  title?: string;
  content?: string;
  className?: string;
  styleName?: string;
  image?: string;
  layoutName?: string; // optional layout name
  sortIndex?: number; // optionally sort your carousel by sort index. If omitted, it's the array order
}
