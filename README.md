# AnnotationDisplayManager

AnnotationDisplayManager is instantiated with tracks as the argument.

```
  let displayManager = new AnnotationDisplayManager(tracks);
```

AnnotationDisplayManager works with an arbitrary video/audio player object which has an event method `on` that listens for a `timeUpdate` evet.

Within the `player.on('timeUpdate')` handler call the `synchronize` method of the AnnotationDisplayManager with the _currentTime_ as an argument.

```
   player.on('timeUpdate', function (event) {
      const currentTime = event.data.currentTime;
          displayManager.synchronize(currentTime);
   });
```

To maintain usability this may be wrapped in a **throttle**.

```
   _.throttle(displayManager.synchronize(currentTime), 100)
```

throttle depends on "throttle-debounce": "^3.0.1"

[Run on StackBlitz ⚡️](https://stackblitz.com/edit/annotationdisplaymanager)

Mock tracks include simplified time codes and simulate show/hide methods with console.log to keep the demo simple.

<hr>

r2.rickards@gmail.com
