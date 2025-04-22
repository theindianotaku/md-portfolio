import Script from 'next/script';

export default function UtmScriptCleaner() {
  return (
    <Script id="utm-cleaner" strategy="afterInteractive">
      {`
        if (window.location.search.includes('utm_')) {
          // Preserve the hash when cleaning the URL
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname + window.location.hash
          );
        }
      `}
    </Script>
  );
}
