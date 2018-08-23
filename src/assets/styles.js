import { StyleSheet } from 'react-native';
import colors from './colors';
import metrics from '../themes/metrics.js'

export const standardMargin = 16;
export const standardPadding = 16;
export const standardFontSize = 14;

export const standardStyle = StyleSheet.create({
    largeText: {
        margin: standardMargin,
        padding: standardPadding,
        fontSize: standardFontSize,
        color: colors.darktext,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
    },
    container: {
        marginBottom: metrics.navbarMargin,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
