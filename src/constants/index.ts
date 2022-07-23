import {MenuItemsTypes} from './types';

export const menuItems: MenuItemsTypes[] = [
  {name: 'ABOUT ME', url: '/about-me'},
  {name: 'WORK', url: '/work'},
  {name: 'HOME', url: '/', icon: true},
  {name: 'BLOG', url: '/blog'},
  {name: 'CONTACT', url: '/contact'},
];

export const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};

export const sliderElements: { text: string; imgUrl: string }[] = [
  { text: 'WELCOME TO MY UNIVERSE', imgUrl: '/1.jpg' },
  { text: 'CREATIVITY. INNOVATION', imgUrl: '/2.jpg' },
  { text: 'CHECK ALL MY WORKS', imgUrl: '/3.jpg' },
];