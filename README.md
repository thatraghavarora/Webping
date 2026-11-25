# Webping

WebPing marketing website source code.

The repository contains the public HTML, CSS, JavaScript, PHP, images, documentation, blog, administration interface, and city landing pages used by the marketing website. The `/app` CRM is a separate Next.js application and is not included here.

Server credentials and `leads-config.php` are intentionally excluded.

## React migration, phase 1

Run `npm install`, then `npm run dev`. For production output, run
`npm run build` followed by `npm start`.

The Next.js renderer builds React elements from the original static page
markup. The original styles and browser scripts remain compatibility inputs.
Tailwind utilities are available without Preflight, and cards reveal on scroll
on browsers that support scroll-driven animations and allow motion.

The city landing pages and their sitemap entries have been removed. The
PHP-backed blog, lead administration and disclosure workflows still require
their original backend. The React app alone does not serve those workflows.
