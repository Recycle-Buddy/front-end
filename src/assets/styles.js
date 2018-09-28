import { StyleSheet } from 'react-native';
import colors from './colors';
import metrics from '../themes/metrics.js'

export const standardMargin = 16;
export const standardPadding = 16;
export const standardFontSize = 14;
export const largeFontSize = 16;
export const largeLineheight = largeFontSize * 1.5;

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
});
