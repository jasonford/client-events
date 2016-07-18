"touch drag drop tap hold swiperight swipeleft pinch".split(" ").forEach(function (name) {
  document.body.addEventListener(name, function (event) {
    console.log(name, event);
  });
});