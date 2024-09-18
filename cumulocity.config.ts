import type { ConfigurationOptions } from '@c8y/devkit';
import { version, name } from './package.json';

export default {
  runTime: {
    version,
    name,
    dynamicOptionsUrl: true,
    noLogin: true,
    noAppSwitcher: true,
    icon: {
      class: 'source-code'
    }
  },
  buildTime: {
    federation: 'none'
  }
} as const satisfies ConfigurationOptions;
