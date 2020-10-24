import React, { useEffect } from 'react';
import { Dimensions, Keyboard } from 'react-native';

export function getScreenSize() {
  return Dimensions.get('window');
}

export function getKeyboardDimensions() {
  const [state, setState] = React.useState({
    height: 0,
    visible: false,
  });
  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', (e) => {
      setState({ height: e.endCoordinates.height, visible: true });
    });
    const hideListener = Keyboard.addListener('keyboardDidHide', (e) => {
      setState({ height: 0, visible: true });
    });
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  });
  return state;
}
