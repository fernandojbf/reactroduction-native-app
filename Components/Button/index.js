import React from 'react';
import { Button as NativeButton } from 'react-native';

const colors = {
  blue: '#318ce7',
  red: '#fa8072',
  black: '#222',
};

const Button = ({
  children,
  type = 'blue',
  onClick,
  title,
  accessibilityLabel,
}) => (
  <NativeButton
    onPress={onClick}
    title={title}
    color={colors[type]}
    accessibilityLabel={accessibilityLabel}
  />
);

export default Button;
