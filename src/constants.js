import store from './assets/icons/svg/store.svg';
import clientRed from './assets/icons/svg/client-red.svg';
import clientOrange from './assets/icons/svg/client-orange.svg';
import clientGreen from './assets/icons/svg/client-green.svg';
import clientGrey from './assets/icons/svg/client-grey.svg';
import clientBlue from './assets/icons/svg/client-blue.svg';
import clientYellow from './assets/icons/svg/client-yellow.svg';
import clientBlack from './assets/icons/svg/client-black.svg';
import clientPurple from './assets/icons/svg/client-purple.svg';
import clientPink from './assets/icons/svg/client-pink.svg';
import edit from './assets/icons/svg/edit.svg';
import selected from './assets/icons/svg/selected.svg';

// Time limits en secondes
export const TIME_LIMITS = {
  low: 3600, // 1 heure
  med: 10800, // 3 heures
};

export const MARKERS = {
  clients: {
    red: {
      icon: clientRed,
      color: '#e92a2a',
    },
    green: {
      icon: clientGreen,
      color: '#56d186',
    },
    orange: {
      icon: clientOrange,
      color: '#ff8400',
    },
    grey: {
      icon: clientGrey,
      color: '#b9b9b9',
    },
    blue: {
      icon: clientBlue,
      color: '#639ade',
    },
    yellow: {
      icon: clientYellow,
      color: '#ffe14b',
    },
    black: {
      icon: clientBlack,
      color: '#000000',
    },
    purple: {
      icon: clientPurple,
      color: '#cb8fff',
    },
    pink: {
      icon: clientPink,
      color: '#ff7dbe',
    },
  },
  stores: {
    icon: store,
    color: '#4f7ada',
  },
  edit: {
    icon: edit,
    color: '#38ccf9',
  },
  selected: {
    icon: selected,
    color: '#38ccf9',
  },
};

export const COLORS = {
  grey: '#6c757d',
  blue: '#007bff',
};

export const RADIUS = 300000; // radius 300km for checks of distance stores-clients

export const ALERT_TYPES = ['success', 'warning', 'danger', 'info', 'light', 'dark', 'primary', 'secondary'];
export const ALERT_TIMEOUT = 5000; // 5 seconds
