export default function Footer() {
  return (
    <footer className="border-t border-line py-8 dark:border-line-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-ink/45 dark:text-mist/45 sm:flex-row">
        <span>&copy; {new Date().getFullYear()} Keerthi Venkatesh</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
