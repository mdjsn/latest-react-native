import styled from 'styled-components/native';

export const Container = styled.View({
  flex: 1,
});

export const Background = styled.ImageBackground({
  flex: 1,
  resizeMode: 'cover',
});

export const Button = styled.View({
  justifyContent: 'center',
  alignSelf: 'center',
  position: 'absolute',
  top: '50%',
});
