import InfoIcon from 'src/assets/icons/info.svg';
import LightningIcon from 'src/assets/icons/lightning.svg';
import NewspaperIcon from 'src/assets/icons/newspaper.svg';
import PaperplaneIcon from 'src/assets/icons/paperplane.svg';
import TrophyIcon from 'src/assets/icons/trophy.svg';
import { AboutUsPage, AdvantagesPage, ContactsPage, FeaturesPage, HomePage, NewsPage } from 'src/pages';
import { IRoute, IRouteInSidebarMenu } from 'src/router/routes.types';
import { RoutesEnum } from './routes.enum';

export const routes: IRoute[] = [
  {
    path: RoutesEnum.HOME,
    element: HomePage,
    title: 'HOME',
  },
];

export const routesInSidebarMenu: IRouteInSidebarMenu[] = [
  {
    path: RoutesEnum.ADVANTAGES,
    sidebarType: {
      default: true,
    },
    icon: {
      icon: TrophyIcon,
      alt: 'trophy',
    },
    titleInMenu: 'ADVANTAGES',
    element: AdvantagesPage,
    title: 'Головна',
  },
  {
    path: RoutesEnum.FEATURES,
    sidebarType: {
      default: true,
    },
    icon: {
      icon: LightningIcon,
      alt: 'lightning',
    },
    titleInMenu: 'FEATURES',
    element: FeaturesPage,
    title: 'Головна',
  },
  {
    path: RoutesEnum.NEWS,
    sidebarType: {
      default: true,
    },
    icon: {
      icon: NewspaperIcon,
      alt: 'newspaper',
    },
    titleInMenu: 'NEWS',
    element: NewsPage,
    title: 'Головна',
  },
  {
    path: RoutesEnum.ABOUT_US,
    sidebarType: {
      default: true,
    },
    icon: {
      icon: InfoIcon,
      alt: 'info',
    },
    titleInMenu: 'ABOUT_US',
    element: AboutUsPage,
    title: 'Головна',
  },
  {
    path: RoutesEnum.CONTACTS,
    sidebarType: {
      default: true,
    },
    icon: {
      icon: PaperplaneIcon,
      alt: 'paperplane',
    },
    titleInMenu: 'CONTACTS',
    element: ContactsPage,
    title: 'Головна',
  },
];

export const allRoutes: Array<IRoute | IRouteInSidebarMenu> = [...routes, ...routesInSidebarMenu];
