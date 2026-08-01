export function ReactIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  )
}

export function TailwindIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 6C8.6 6 6.4 7.8 5.4 11.4c.75-1.2 1.65-1.95 2.7-2.25.7-.2 1.44-.08 2.09.12.45.14.93.28 1.43.28 1.62 0 2.97-1.05 3.55-1.55.65-.56 1.2-1.06 1.2-2 0-1.4-1.2-2-4.37-2zm-6.6 5.1c-1.62 0-2.97 1.05-3.55 1.55-.65.56-1.2 1.06-1.2 2 0 1.4 1.2 2 4.35 2 3.4 0 5.6-1.8 6.6-5.4-.75 1.2-1.65 1.95-2.7 2.25-.7.2-1.44.08-2.09-.12-.45-.14-.93-.28-1.43-.28-1.62 0-2.97 1.05-3.55 1.55-.65.56-1.2 1.06-1.2 2 0 1.4 1.2 2 4.37 2z"
        fill="currentColor"
      />
    </svg>
  )
}

export function JavaScriptIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.2 17.1c-.5.4-1.15.65-1.8.65-1.05 0-1.7-.6-1.7-1.7v-3.3h1.4v3.1c0 .55.3.8.7.8.4 0 .75-.2 1.15-.55l1.05 1c-.25.25-.55.4-.8.5z" />
      <path d="M15.7 17.75c-.7 0-1.35-.2-1.85-.55l.6-1.15c.4.3.85.45 1.3.45.5 0 .85-.2.85-.6 0-.35-.25-.55-.85-.8-.8-.35-1.4-.85-1.4-1.75 0-1.05.85-1.8 2.1-1.8.65 0 1.2.15 1.6.45l-.6 1.1c-.3-.2-.6-.35-1-.35-.45 0-.75.2-.75.55 0 .35.3.5.9.75.85.35 1.35.9 1.35 1.8 0 1.1-.9 1.85-2.2 1.85z" />
    </svg>
  )
}

export function HtmlIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 2l-1.5 18 7.5 2 7.5-2L18 2H6z" />
      <path d="M9 7h6l-.4 4.5H10.5M10 13.5h4l-.3 3-1.7.5-1.7-.5-.1-1.2" />
    </svg>
  )
}

export function CssIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 2l-1.5 18 7.5 2 7.5-2L18 2H6z" />
      <path d="M8.5 8h7l-.3 3.2h-6.4M8.9 14.2h6l-.5 3.6-2.4.6-2.4-.6-.2-1.4" />
    </svg>
  )
}

export function GitIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="7" r="2.5" />
      <path d="M8.4 7.5L15.6 6M6 8.5v7M15.6 9.5l-6.9 5" />
    </svg>
  )
}

export function GithubIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0022 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

export function ViteIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12.4 2.2l8.7 15.2c.2.36-.06.8-.46.8l-8.3 1.6c-.1.02-.22.02-.34 0l-8.3-1.6c-.4-.08-.65-.44-.46-.8L11.6 2.2c.1-.17.27-.27.46-.27.18 0 .34.1.44.27z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path d="M12.5 5.3l1.2 5.1.4 1.7-3.8-.9 2.2-5.9z" fill="white" opacity="0.9" />
    </svg>
  )
}

export function MotionIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M4 5h11c4.5 0 6.5 2.5 6.5 5.5S19.5 16 15 16H9l-4 3.5V5z" />
      <path d="M9 8.5h.01M12 8.5h.01" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}
