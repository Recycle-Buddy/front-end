import { StyleSheet } from 'react-native';
import colors from './colors';
import metrics from '../themes/metrics.js'

export const standardMargin = 16;
export const standardPadding = 16;
export const standardFontSize = 14;
export const largeFontSize = 16;
export const largeLineheight = largeFontSize * 1.5;
export const largerFontSize = 24;
export const largerLineheight = largeFontSize * 1.5;

export const standardStyle = StyleSheet.create({
  largeText: {
      margin: standardMargin,
      lineHeight: largeLineheight,
      fontSize: largeFontSize,
      color: colors.black,
  },
  wrapper: {
      flex: 1,
      justifyContent: 'space-between',
  },
  pageContainer: {
      flex: 1,
  },
  contentContainer: {
      padding: standardMargin,
      marginBottom: metrics.navbarMargin,
      flex:1,
      flexDirection: 'column',
  },
  scrollViewItems: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  defaultCard: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  defaultButton: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  smallCardIcon : {
    alignSelf: 'center',
    width: 50,
    height: 50,
    margin: 4,
    backgroundColor: 'transparent'
  },
  largeCardIcon : {
    alignSelf: 'center',
    width: 75,
    height: 75,
    margin: 4,
    backgroundColor: 'transparent'
  },
});
