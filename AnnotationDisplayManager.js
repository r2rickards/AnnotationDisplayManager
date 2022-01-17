/**
 * @class
 * @name AnnotationDisplayManager
 * @description Manage display of annotations
 * based on currentTime
 * @param {object} tracks
 * @example - AnnotationDisplayManager is instantiated with tracks
 * as the argument. Within the player.on('timeUpdate') handler call
 * the synchronize method with the currentTime as an argument.
 
   let displayManager = new AnnotationDisplayManager(tracks);

   player.on('timeUpdate', function (event) {
   const currentTime = event.data.currentTime;
      displayManager.synchronize(currentTime);
   });

   @note - To maintain usability this may be wrapped in a throttle.
   @example - _.throttle(displayManager.synchronize(currentTime), 100)
 */
export default class AnnotationDisplayManager {
  constructor(tracks) {
    this.tracks = tracks;
    this.currentAnnotation = null;
  }
  /**
   * @method
   * @name synchronize
   * @description Show/hide annotations
   * based on currentTime
   * @param {float} currentTime
   */
  synchronize(currentTime) {
    // iterate over tracks
    this.tracks.map((track, trackNumber) => {
      // check if there is a currentAnnotation with endTime now or past currentTime
      // if so hide then clear currentAnnotation
      if (
        this.currentAnnotation &&
        currentTime >= this.currentAnnotation.endTime
      ) {
        this.currentAnnotation.hide();
        this.currentAnnotation = null;
      }
      // iterate over annotations of track
      track.map((annotation, annotationNumber) => {
        // if currentTime >= annotation startTime and <= the annotaions endTime
        // and the currentAnnotation isn't this one
        // show it and set the currentAnnotation
        // assumming the annotation replaces any currently displayed annotation
        // so no hiding is required otherwise use the currentAnnotation.hide() method
        if (
          !this.currentAnnotation ||
          (this.currentAnnotation && this.currentAnnotation != annotation)
        ) {
          if (
            currentTime >= annotation.startTime &&
            currentTime <= annotation.endTime
          ) {
            annotation.show();
            this.currentAnnotation = annotation;
          }
        }
      });
    });
  }
}
