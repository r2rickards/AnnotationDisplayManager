# AnnotationDisplayManager

AnnotationDisplayManager is instantiated with tracks as the argument.

```
  let displayManager = new AnnotationDisplayManager(tracks);
```

Within the `player.on('timeUpdate')` handler call the `synchronize` method with the *currentTime* as an argument.

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

[Run on StackBlitz ⚡️](https://stackblitz.com/edit/js-pngfsr)

Mock tracks simulate show/hide with console.log.

r2.rickards@gmail.com
