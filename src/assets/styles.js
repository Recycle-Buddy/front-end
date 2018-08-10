import { StyleSheet } from 'react-native';
import colors from './colors';

const standardMargin = 16;
const standardPadding = 16;
const standardFontSize = 14;

const standardStyle = StyleSheet.create({
    standardStyle: {
        margin: standardMargin,
        padding: standardPadding,
        fontSize: standardFontSize,
        color: colors.darktext
    }
});

export default {standardFontSize, standardMargin, standardPadding, standardStyle};