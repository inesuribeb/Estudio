// useIsMobile.js
import { useMediaQuery } from 'react-responsive';

function useIsMobile() {
    return useMediaQuery({ maxWidth: 768 });
}

export default useIsMobile;