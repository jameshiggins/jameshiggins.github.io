# jameshiggins.ca

Personal site and online resume for James Higgins, Technical Project Manager
and Full-Stack Developer in Vancouver, BC.

Live at <https://jameshiggins.ca>, served by GitHub Pages from the `master`
branch of this repo.

## What is here

The site is a single static page with no build step.

| Path | Purpose |
| --- | --- |
| `index.html` | All page content: hero, selected work, experience, skills, education, contact. |
| `assets/css/main.css` | Hand-written CSS with custom properties, including print styles. |
| `assets/js/main.js` | Starts the hero particle background. Skipped when the visitor prefers reduced motion. |
| `assets/img/` | Share image and icons. |
| `robots.txt`, `sitemap.xml`, `site.webmanifest` | Crawler and browser metadata. |
| `CNAME` | Custom domain for GitHub Pages. |

The only third-party runtime dependency is `particles.js` 2.0.0, pinned by
version on the jsDelivr CDN. Fonts come from Google Fonts.

## Editing

Edit `index.html` directly and open it in a browser. There is nothing to
compile. Push to `master` and GitHub Pages publishes it within a few minutes.

To check the page locally with a server, any static server works, for example:

```
npx serve .
```

## Resume PDF

Print the page from a browser to get a resume-style PDF. The print stylesheet
hides the hero background, navigation and buttons and prints link URLs after
link text.

## Planned

Move the resume content into a `resume.json` file in the
[JSON Resume](https://jsonresume.org/schema/) format and render the page from
it, so the site, the PDF and the source of truth cannot drift apart.

## License

MIT. See `LICENSE.txt`. The original layout started from the
[Particle](https://github.com/nrandecker/particle) Jekyll theme, which has
since been replaced with hand-written markup and CSS.
