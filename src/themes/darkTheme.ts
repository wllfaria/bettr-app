import { DefaultTheme } from 'styled-components';

import { common } from './common';

export const darkTheme: DefaultTheme = {
  textStyles: common.textStyles,
  colors: {
    text: {
      body: '#FFFFFF',
      description: '#B4B4B7',
      placeholder: '#949497',
      onFill: '#FFFFFF',
      link: '#7096F8',
      visited: '#9DB7F9',
      alert: '#FF4B36',
      disabled: '#757578',
    },
    icon: {
      label: '#FFFFFF',
      active: '#7096F8',
      disabled: '#757578',
      alert: '#FF4B36',
    },
    button: {
      normal: '#7096F8',
      hover: '#3F72F6',
      active: '#3F72F6',
      disabled: '#949497',
    },
    background: {
      primary: '#1A1A1C',
      secondary: '#626264',
      tertiary: '#414143',
    },
    border: {
      field: '#FFFFFF',
      divider: '#626264',
      focused: '#D18D0F',
      selected: '#7096F8',
      alert: '#FF4B36',
      disabled: '#949497',
    },
    status: {
      success: '#259D63',
      alert: '#FF4B36',
      warning: '#D18D0F',
    },
    chart: {
      primary: '#C5D7FB',
      secondary: '#9DB7F9',
    },
  },
};
