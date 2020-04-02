import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems, NavigationItem } from './navigation-items';
import { CreateNewDeckLink } from './create-new-deck-link/create-new-deck-link';

import navigationImg from '../../assets/images/navigation-img.svg';
import logoImg from '../../assets/images/logo.svg';

import './navigation.scss';

export const Navigation = () => {
  const [navigation, setNavigation] = React.useState<
    Array<NavigationItem & { selected: boolean }>
  >(navigationItems.map((item) => ({ ...item, selected: false })));

  const location = useLocation();

  React.useEffect(
    () => {
      setNavigation(
        navigation.map((item) => {
          return item.url === location.pathname
            ? { ...item, selected: true }
            : { ...item, selected: false };
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname],
  );

  return (
    <div className="navigation">
      <div className="logo-container">
        <img src={logoImg} alt="Logo" className="logo-img" />
        <h2 className="logo-text">Brainflash</h2>
      </div>
      <div className="navigation-container">
        <CreateNewDeckLink />
        <h3 className="navigation-title">Menu</h3>
        <ul className="navigation-list">
          {navigation.map(({ url, label, IconComponent, key, selected }) => (
            <li
              key={key}
              className={`navigation-list__item ${
                selected ? 'navigation-list__item--active' : ''
              }`}
            >
              <Link className="navigation-link" to={url}>
                <IconComponent className="navigation-img" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navigation-footer">
        <img src={navigationImg} alt="Navigation" className="footer-img" />
      </div>
    </div>
  );
};
