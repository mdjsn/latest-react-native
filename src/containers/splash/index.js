import React, {useEffect} from 'react';

// components

// imports

// styles
import * as S from './styles';
import Background from '../../assets/background.png';

export default function AppSplash(props) {
  useEffect(() => {
    props.navigation.navigate('Auth');
  });
  return <S.Background source={Background} />;
}
