if (typeof LIBDOGE == 'undefined') {
  var libdoge = document.createElement("script");
  libdoge.setAttribute("src",
    "https://raw.github.com/ljalonen/libdoge/master/libdoge/libdoge-min.js");
  document.body.appendChild(libdoge);

  setInterval(function(){LIBDOGE.moar()},1500);
}
