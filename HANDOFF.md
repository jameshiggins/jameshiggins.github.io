# Handoff: jameshiggins.ca copy review

Context for picking this work up in a new chat. Read this and `README.md` first.

## What this repo is

Single static page, no build step. `index.html` holds all content. GitHub Pages
publishes the `master` branch to https://jameshiggins.ca within a few minutes
of a push. `CNAME` carries the custom domain.

## State of the work

Branch `copy-review-2026-10` holds a copy review pass over the whole page.
It is up as a draft pull request against `master`. Merging it publishes the
changes. Nothing on `master` has changed yet.

What the branch changes:

- Title, Open Graph and Twitter titles use a pipe instead of an em dash. The
  page now contains no em dashes. Date ranges keep their en dashes.
- Hero availability line reads "Open to full-time and contract roles".
- Hero nav gained an Education link, since the section already existed.
- About heading now leads with the project management tenure: "Six years
  leading web delivery, grounded in 12+ years of hands-on development."
- About paragraph: "developers get clear answers without a hand-off" became
  "developers get technical answers from me directly, not relayed through
  someone else."
- Selected Work and the Falcon bullets no longer repeat each other. The cards
  carry the project detail. The Falcon bullets for Bing Blogs and
  BritishColumbia.ca are one clause each, and the HealthStream bullet is gone.
- Falcon first bullet absorbed the estimates, architecture and DevOps
  guidance points from the deleted last bullet. The KPMG note is its own
  sentence: "Current projects are delivered through Falcon's partnership
  with KPMG."
- Naming is consistent: "Province of British Columbia" everywhere, and
  "Bing Blogs" in both the card and the bullet.
- Experience is ordered by end date, newest first, with the freelance
  practice last: Falcon, NativeAds, Ryders Eyewear, Noble Pixels, Soulpepper,
  The Rand Group, James Higgins Web Development. Rand Group had been listed
  above two roles that ended later.
- Rand Group bullet opens with "At a Microsoft Dynamics solutions partner"
  so the client list no longer reads as if built for a partner.
- Noble Pixels bullet: "Developed CMS interfaces across three production
  applications, working from user stories on an in-house Agile team."
- Soulpepper bullet names the store owner: RoderickAllan.com was a Magento
  store for the agency's client Solidsteel.
- Freelance entry dropped the "Hold every build to professional standards"
  bullet, which repeated the About section.
- HealthStream card ends at "reusable components".
- Education reads "Associate Certificate, Applied Web Development" to match
  the PDF and the "BA, Philosophy" pattern.
- Skills tools line: removed Basecamp, Trello, Microsoft Teams, Sitefinity,
  and the duplicate Bitbucket Pipelines and Webpack (both stay under
  Engineering and in the Falcon tags). Added "AI-assisted development
  (Claude Code, OpenAI Codex)". Microsoft Teams and Sitefinity also came out
  of the Falcon tags.
- `sitemap.xml` lastmod bumped.
- `assets/James-Higgins-Resume.pdf`: the hyphen in "AI-assisted" was a
  non-breaking hyphen (U+2011), which applicant tracking systems would not
  match against "AI-assisted". The fix remaps that one glyph in the font's
  ToUnicode table to a plain hyphen, so the rendering is pixel-identical and
  only the extracted text changes. The PDF's Title metadata was "Resume
  creation request" (left over from the page that generated it) and is now
  "James Higgins Resume", with Author set.

## Decisions to confirm with James

- Sitefinity was removed from tags and tools because no project on the page
  mentions it. If it is a real skill, add it back in one line, ideally with a
  bullet that says where it was used.
- The heading says "Six years leading web delivery". Falcon alone is just
  over six years; with NativeAds it is closer to seven. The meta description
  says "6+ years". Adjust if a different number is preferred.
- The store domain is kept as RoderickAllan.com. The instruction to credit
  Solidsteel arrived as "Roger Allen", which looks like dictation. Check the
  spelling.
- The freelance entry is the only role with years but no months
  ("2013 – present"). Add a month if known.
- The phone number is public on the page and in the print stylesheet. Left
  as is.

## About the PDF

The PDF was produced by Chromium from a source that is not in this repo. Its
content is a condensed version of the page and already differs from
`index.html` in several places (shorter bullets, "(IBM partnership)" on the
BritishColumbia.ca card, the old About heading, the old availability line).
The `README.md` command that prints the page with the print stylesheet will
produce a different-looking PDF, not a refreshed copy of this one.

Options, in order of preference:

1. Do the planned move to a `resume.json` (JSON Resume) source and render
   both the page and the PDF from it, as `README.md` describes.
2. Regenerate the PDF from the page with the print stylesheet and accept the
   layout change.
3. Keep hand-editing the PDF source wherever it lives, and re-export. If so,
   make sure the export uses a plain hyphen and sets a proper document title.

## Working rules for this site

- No em dashes anywhere. Pipe in title tags, en dash in date ranges.
- Canadian spelling (catalogue) and plain language. Avoid filler
  like "custom widgets and features".
- Keep Selected Work and Experience from repeating each other.
- Experience order: by end date, newest first, freelance practice last.
- Verify locally with `python3 -m http.server` and a browser, including the
  print preview, before pushing to `master`.
