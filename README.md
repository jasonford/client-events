# client-events
Triggers custom browser events that normalize touch and mouse interaction


## Usage

attach to element events however you usually do:
```javascript
// addEventListener
DOMelement.addEventListener("drag", function (event) {...});

// jQuery
$selection.on("drag", function (event) {...});
```

## Events

###event names in order of triggering:
* `"touch"`
* 0+ `"pinch"` events if user is using 2 fingers. only drag events will fire until both fingers are removed
* 0+ `"drag"` events
* `"tap"` event if user touched and removed finger or clicked mouse quickly without dragging
* `"hold"` event if user did not drag and held finger or mouse down longer than a tap
* `"drop"` event on mouseup or when user removes finger
* `"swiperight"` or `"swipeleft"` if user quickly moved finger or mouse while dragging
