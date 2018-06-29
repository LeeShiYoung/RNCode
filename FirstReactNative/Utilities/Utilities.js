import {
    Platform,
    Dimensions
} from 'react-native';

// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

// screen
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Utilities {

    static get isIphoneX() {
        return (
            Platform.OS === 'ios' &&
            ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) ||
                (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT))
        )
    }

    constructor(props) {

    }

     static ifIphoneX (iphoneXStyle, regularStyle) {
        if (Utilities.isIphoneX) {
            return iphoneXStyle;
        } else {
            return regularStyle
        }
    }
}

