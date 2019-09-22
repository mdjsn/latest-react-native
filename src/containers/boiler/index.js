import React from 'react';
import {StatusBar} from 'react-native';

//styles
import * as S from './styles.js';
import Background from '../../assets/background.png';

// custom components

const App = props => {
  return (
    <React.Fragment>
      <StatusBar
        // hidden
        translucent
        backgroundColor="#3672B9"
        barStyle="light-content"
      />
      <S.Container>
        <S.Background source={Background} />
      </S.Container>
    </React.Fragment>
  );
};

export default App;
