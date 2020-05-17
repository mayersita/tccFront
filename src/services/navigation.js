import { NavigationActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

let navigator;

export function setNavigator(ref) {
  navigator = ref;
}

export function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export function back() {
  navigator.dispatch(NavigationActions.back());
}

export function toggleDrawer() {
  navigator.dispatch(DrawerActions.toggleDrawer());
}
