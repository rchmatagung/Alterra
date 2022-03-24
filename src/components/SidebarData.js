import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About App',
    path: '/About/About-App',
    icon: <FaIcons.FaReact />,
    cName: 'nav-text'
  },
  {
    title: 'About Author',
    path: '/About/About-Author',
    icon: <SiIcons.SiAboutDotMe />,
    cName: 'nav-text'
  },
];