
import { App } from './app';

window.APP_SCOPE = {
  init: () => {
    new App().init();
  }
}

window.APP_SCOPE.init();