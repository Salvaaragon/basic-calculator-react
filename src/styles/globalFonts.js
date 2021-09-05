import DigitalDream from '../assets/fonts/DIGITALDREAM.ttf';
import DigitalDreamFat from '../assets/fonts/DIGITALDREAMFAT.ttf';
import DigitalDreamFatNarrow from '../assets/fonts/DIGITALDREAMFATNARROW.ttf';
import DigitalDreamFatSkew from '../assets/fonts/DIGITALDREAMFATSKEW.ttf';
import DigitalDreamFatSkewNarrow from '../assets/fonts/DIGITALDREAMFATSKEWNARROW.ttf';
import DigitalDreamNarrow from '../assets/fonts/DIGITALDREAMNARROW.ttf';
import DigitalDreamSkew from '../assets/fonts/DIGITALDREAMSKEW.ttf';
import DigitalDreamSkewNarrow from '../assets/fonts/DIGITALDREAMSKEWNARROW.ttf';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'Digital Dream';
        src: url(${DigitalDream});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Digital Dream Fat';
        src: url(${DigitalDreamFat});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Digital Dream Fat Narrow';
        src: url(${DigitalDreamFatNarrow});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Digital Dream Fat Skew';
        src: url(${DigitalDreamFatSkew});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Digital Dream Fat Skew Narrow';
        src: url(${DigitalDreamFatSkewNarrow});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Digital Dream Narrow';
        src: url(${DigitalDreamNarrow});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Digital Dream Skew';
        src: url(${DigitalDreamSkew});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Digital Dream Skew Narrow';
        src: url(${DigitalDreamSkewNarrow});
        font-style: 'normal';
    }
    
`;
