export interface MenuWrapperProps {
  readonly isHome?: boolean;
  readonly isTop?: boolean;
  readonly isScrolled?: boolean;
}
export interface MobileMenuWrapperProps {
  readonly isHome: boolean;
}

export interface MenuItemWrapperProps {
  readonly isHome: boolean;
  readonly key: number;
}

export interface MobileMenuPopupProps {
  isToggleOn: boolean;
  setIsToggleOn: (isToggleOn: boolean) => void;
}
export interface MobileMenuPopupWrapperProps {
  isToggleOn: boolean;
}