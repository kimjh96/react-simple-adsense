import React, { useRef, useEffect } from 'react';

function GoogleAdSense(_ref) {
  var html = _ref.html;
  var ref = useRef(null);
  useEffect(function () {
    if (ref.current && html) {
      ref.current.innerHTML = html;
      var hasScript = document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]');

      if (!hasScript) {
        var script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;

        script.onload = function () {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        };

        document.body.appendChild(script);
      } else {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref
  });
}

export default GoogleAdSense;
