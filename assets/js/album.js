// Turns each <div class="album"> into a one-photo-at-a-time slideshow
// with Prev / Next buttons and a "3 / 33" counter.
// Without JS the album falls back to a plain horizontal scroller.
(function () {
  document.querySelectorAll(".album").forEach(function (album) {
    var imgs = Array.prototype.slice.call(album.querySelectorAll("img"));
    var total = imgs.length;
    if (!total) return;

    album.classList.add("album-slideshow");

    var controls = document.createElement("div");
    controls.className = "album-controls";

    function button(label, text) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", label);
      b.textContent = text;
      return b;
    }
    var prev = button("Previous photo", "‹ Prev");
    var next = button("Next photo", "Next ›");
    var count = document.createElement("span");
    count.className = "album-count";

    controls.appendChild(prev);
    controls.appendChild(count);
    controls.appendChild(next);
    // A single photo needs no Prev / Next or counter.
    if (total > 1) album.parentNode.insertBefore(controls, album.nextSibling);

    var i = 0;
    function show(n) {
      i = Math.max(0, Math.min(total - 1, n));
      imgs.forEach(function (img, k) { img.style.display = k === i ? "block" : "none"; });
      // Start fetching the next photo so it's ready when clicked.
      if (imgs[i + 1]) imgs[i + 1].loading = "eager";
      count.textContent = i + 1 + " / " + total;
      prev.disabled = i === 0;
      next.disabled = i === total - 1;
    }

    prev.addEventListener("click", function () { show(i - 1); });
    next.addEventListener("click", function () { show(i + 1); });

    // Click a photo to see it up close.
    imgs.forEach(function (img) {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", function () { openViewer(img); });
    });

    show(0);
  });

  // ---- Full-screen viewer (one shared overlay for the whole page) ----
  var viewer, viewerImg;

  function buildViewer() {
    viewer = document.createElement("div");
    viewer.className = "album-viewer";
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-modal", "true");
    viewer.setAttribute("aria-label", "Photo, full screen");

    viewerImg = document.createElement("img");
    viewerImg.alt = "";

    var close = document.createElement("button");
    close.type = "button";
    close.className = "album-viewer-close";
    close.setAttribute("aria-label", "Close");
    close.textContent = "✕";

    viewer.appendChild(viewerImg);
    viewer.appendChild(close);
    // Attach outside <body>: the theme's dark mode puts `filter: invert(1)`
    // on <body>, which would both invert the backdrop and stop
    // `position: fixed` from covering the screen.
    document.documentElement.appendChild(viewer);

    // Clicking anywhere (photo, backdrop, or ✕) closes it.
    viewer.addEventListener("click", closeViewer);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && viewer.style.display !== "none") closeViewer();
    });
  }

  function openViewer(img) {
    if (!viewer) buildViewer();
    viewerImg.src = img.currentSrc || img.src;
    viewerImg.alt = img.alt;
    viewer.style.display = "flex";
    document.documentElement.style.overflow = "hidden"; // no page scroll behind it
  }

  function closeViewer() {
    viewer.style.display = "none";
    document.documentElement.style.overflow = "";
  }
})();
