import { throttle } from 'throttle-debounce';
import tracks from './tracks.js';
import AnnotationDisplayManager from './AnnotationDisplayManager.js';

/**
 * @example - this is how AnnotationDisplayManager is called
 */
let displayManager = new AnnotationDisplayManager(tracks);

displayManager.synchronize(1.2);
displayManager.synchronize(1.4);
displayManager.synchronize(5.1);

/**
 * @example - with throttle to maintain reasonable rate
 * 
    const delay = 100;
    throttle(delay, displayManager.synchronize(currentTime));
 */
