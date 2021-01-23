import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: {
      push: (p: Record<string, never>) => void;
    };
  }
}

type GoogleAdSenseProps = {
  html: string;
};

function GoogleAdSense({ html }: GoogleAdSenseProps): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current && html) {
      ref.current.innerHTML = html;

      const hasScript = document.querySelector(
        'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
      );

      if (!hasScript) {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.onload = () => {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        };

        document.body.appendChild(script);
      } else {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }
  }, []);

  return <div ref={ref} />;
}

export default GoogleAdSense;
