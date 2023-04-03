import { DefaultTheme } from 'styled-components';

import { common } from './common';

export const lightTheme: DefaultTheme = {
  textStyles: common.textStyles,
  colors: {
    text: {
      body: '#1A1A1C',
      description: '#626264',
      placeholder: '#757578',
      onFill: '#FFFFFF',
      link: '#003EE5',
      visited: '#0000BE',
      alert: '#EC0000',
      disabled: '#949497',
    },
    icon: {
      label: '#1A1A1C',
      active: '#003EE5',
      disabled: '#949497',
      alert: '#EC0000',
    },
    button: {
      normal: '#003EE5',
      active: '#0030B2',
      hover: '#0030B2',
      disabled: '#949497',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F1F1F4',
      tertiary: '#F8F8FB',
    },
    border: {
      field: '#1A1A1C',
      divider: '#D8D8DB',
      focused: '#D18D0F',
      selected: '#003EE5',
      alert: '#EC0000',
      disabled: '#949497',
    },
    status: {
      success: '#259D63',
      alert: '#EC0000',
      warning: '#C16800',
    },
    chart: {
      primary: '#003EE5',
      secondary: '#4979F5',
    },
  },
};
