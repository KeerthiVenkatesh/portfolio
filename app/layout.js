import './globals.css';

export const metadata = {
  title: 'Keerthi Venkatesh — Data Analyst & Aspiring Data Scientist',
  description:
    'Portfolio of Keerthi Venkatesh: data analysis, visualization, and quantitative research using Python, SQL, and Power BI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Optional: loads real webfonts when the browser has internet access.
            The site is fully styled with system-font fallbacks in globals.css,
            so it never depends on this for a working build or first paint. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-ink font-body antialiased dark:bg-night dark:text-mist transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
