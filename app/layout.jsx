import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/site.css?v=101" precedence="webping-site" />
        <link rel="stylesheet" href="/assets/webping-leads.css?v=3" precedence="webping-leads" />
      </head>
      <body>{children}</body>
    </html>
  );
}
