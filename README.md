# Webping

WebPing marketing website source code.

The repository contains the WebPing marketing site. The `/app` CRM is a separate deployment.

Server credentials and `leads-config.php` are intentionally excluded.

## React migration, phase 1

Run `npm install`, then `npm run dev`. For production output, run
`npm run build` followed by `npm start`.

Edit page components in `app/site-pages/` and register new URLs in
`app/site-pages/routes.js`. The shared header and footer live in
`app/components/`. Next.js renders these JSX modules directly. The source tree
does not require HTML page files or HTML fragments.

Existing styles and browser scripts are retained to preserve the design and
interactions. Tailwind utilities are available without Preflight, and cards
reveal on scroll on browsers that support scroll-driven animations and allow
motion.

The city landing pages and their sitemap entries have been removed. The
PHP-backed blog, lead administration and disclosure workflows still require
their original backend. The React app alone does not serve those workflows.
