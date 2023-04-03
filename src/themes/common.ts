import { DefaultTheme } from 'styled-components';

export const common: { textStyles: DefaultTheme['textStyles'] } = {
  textStyles: {
    largeText: {
      mobile: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
    },
    h1: {
      mobile: {
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
      desktop: {
        fontSize: 42,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
    },
    h2: {
      mobile: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
      desktop: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
    },
    h3: {
      mobile: {
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
      desktop: {
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
    },
    h4: {
      mobile: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
      desktop: {
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
    },
    h5: {
      mobile: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
      desktop: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
    },
    h6: {
      mobile: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
      desktop: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
    },
    button: {
      mobile: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
      desktop: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 1.5,
      },
    },
    subtitle: {
      mobile: {
        fontSize: 16,
        fontWeight: 'regular',
        lineHeight: 1.75,
      },
    },
    body: {
      mobile: {
        fontSize: 16,
        fontWeight: 'regular',
        lineHeight: 1.5,
      },
      mobileLink: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 1.5,
        textDecoration: 'underline',
      },
      desktop: {
        fontSize: 16,
        fontWeight: 'regular',
        lineHeight: 1.75,
      },
      desktopLink: {
        fontSize: 16,
        fontWeight: 'regular',
        lineHeight: 1.75,
        textDecoration: 'underline',
      },
    },
    bodyAlt: {
      mobile: {
        fontSize: 14,
        fontWeight: 'regular',
        lineHeight: 1.5,
      },
      mobileLink: {
        fontSize: 14,
        fontWeight: 'regular',
        lineHeight: 1.5,
        textDecoration: 'underline',
      },
    },
    subtitleAlt: {
      mobile: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.75,
      },
    },
    capture: {
      mobile: {
        fontSize: 12,
        fontWeight: 'regular',
        lineHeight: 1.5,
      },
      mobileLink: {
        fontSize: 12,
        fontWeight: 'regular',
        lineHeight: 1.5,
        textDecoration: 'underline',
      },
    },
    overline: {
      mobile: {
        fontSize: 10,
        fontWeight: 'regular',
        lineHeight: 1.5,
      },
      mobileLink: {
        fontSize: 10,
        fontWeight: 'regular',
        lineHeight: 1.5,
        textDecoration: 'underline',
      },
    },
  },
};
