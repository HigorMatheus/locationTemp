import {TouchableOpacityProps} from 'react-native';

export type ButtonProps = TouchableOpacityProps & {
  city?: string;
  isLoading?: boolean;
};
