
import { ScriptLoader } from './script-loader';
import { App } from './app';

window.APP_SCOPE = {
  init: () => {
    new App().init();
  }
}

ScriptLoader.loadjQuery();