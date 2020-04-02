import { ReactComponent as DashboardImg } from '../../assets/images/dashboard.svg';
import { ReactComponent as ExploreImg } from '../../assets/images/explore.svg';
import { ReactComponent as LicenseImg } from '../../assets/images/license.svg';
import { ReactComponent as PinImg } from '../../assets/images/pin.svg';

export interface NavigationItem {
  key: string;
  label: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  IconComponent: any;
}

export const navigationItems: NavigationItem[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    url: '/',
    IconComponent: DashboardImg,
  },
  {
    key: 'expolore-decks',
    label: 'Explore decks',
    url: '/explore-decks',
    IconComponent: ExploreImg,
  },
  {
    key: 'your-decks',
    label: 'Your decks',
    url: '/your-decks',
    IconComponent: LicenseImg,
  },
  {
    key: 'pinned-decks',
    label: 'Pinned decks',
    url: '/pinned-decks',
    IconComponent: PinImg,
  },
];
