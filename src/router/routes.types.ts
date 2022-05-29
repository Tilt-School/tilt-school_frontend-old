import React from 'react';
import { RoutesEnum } from 'src/router/routes.enum';
import { RequireAtLeastOne } from 'src/types/helpers';

interface IRouteIcon {
  icon: string;
  alt: string;
}

type TRouteSidebarType = RequireAtLeastOne<
  {
    default?: boolean;
    authorized?: boolean;
  },
  'default' | 'authorized'
>;

export interface IRoute {
  path: RoutesEnum;
  element: React.FC;
  title: string;
}

export interface IRouteInSidebarMenu extends IRoute {
  sidebarType: TRouteSidebarType;
  titleInMenu: string;
  icon: IRouteIcon;
}
