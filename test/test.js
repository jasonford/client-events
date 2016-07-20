"touch drag drop tap hold swiperight swipeleft pinch".split(" ").forEach(function (name) {
  document.body.children[0].addEventListener(name, function (event) {
    console.log(name, event);
  });
});