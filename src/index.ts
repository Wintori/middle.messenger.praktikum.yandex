
import { PathRouter, Store } from './core';
import { initApp } from './services/initApp';
import { AppState, defaultState } from './store';
import { initRouter } from './router';

declare global {
  interface Window {
    store: Store<AppState>;
    router: PathRouter;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const store = new Store<AppState>(defaultState);

  window.store = store;

  store.on('changed', (prevState, nextState) => {
    if (!prevState.appIsInited && nextState.appIsInited) {
      initRouter(store);
    }
    console.log(
      '%cstore updated',
      'background: #222; color: #bada55',
      nextState,
    );
  });

  store.dispatch(initApp);
});
