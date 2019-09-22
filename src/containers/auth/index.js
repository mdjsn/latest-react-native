import React from 'react';
import {StatusBar} from 'react-native';

//styles
import * as S from './styles.js';
import Background from '../../assets/background.png';

// custom components

// imports
import FBLoginButton from '../../components/FBLoginButton';

const Fblogin = props => {
  const loginWithFacebook = async () => {
    props.navigation.navigate('App');
  };

  return (
    <React.Fragment>
      <StatusBar
        // hidden
        translucent
        backgroundColor="#3672B9"
        barStyle="light-content"
      />
      <S.Container>
        <S.Background source={Background}>
          <S.Button>
            <FBLoginButton onLogIn={loginWithFacebook} />
          </S.Button>
        </S.Background>
      </S.Container>
    </React.Fragment>
  );
};

export default Fblogin;
