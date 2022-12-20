import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface ICurrentNavbar {
  showMenu: boolean;
  showNavbar: boolean;
}

export const useCurrentNavbar = (): ICurrentNavbar => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1279px)' });

  useEffect(() => {
    if (isMobileOrTablet) {
      setShowNavbar(false);
      setShowMenu(true);
      return;
    }
    setShowNavbar(true);
    setShowMenu(false);
  }, [isMobileOrTablet]);

  return { showMenu, showNavbar };
};
