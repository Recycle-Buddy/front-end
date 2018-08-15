import { StyleSheet } from 'react-native';
import colors from './colors';
import metrics from '../themes/metrics.js'

let standardMargin = 16;
let standardPadding = 16;
let standardFontSize = 14;

const standardStyle = StyleSheet.create({
    standardStyle: {
        margin: standardMargin,
        padding: standardPadding,
        fontSize: standardFontSize,
        color: colors.darktext,
    },
    container: {
        marginBottom: metrics.navbarMargin,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.transparent,
    }
});

export default {standardFontSize, standardMargin, standardPadding, standardStyle};