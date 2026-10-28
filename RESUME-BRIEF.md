# Resume update brief

Paste this into the Claude Design conversation that produced the current
resume PDF. It lists every content change needed to bring the PDF in line
with jameshiggins.ca as of 28 October 2026. Keep the existing layout, fonts
(Newsreader and Work Sans) and colours. Only the text changes.

## Header

Replace the availability line:

- Old: Open to both full-time and contract-based opportunities
- New: Open to full-time and contract roles

## About

Replace the whole About paragraph with:

> **Six years leading web delivery, grounded in 12+ years of hands-on development.** I lead web projects from scoping and estimation through launch and long-term support, coordinating designers, developers, content creators and QA. Because I have had a hand in every stage myself, designing mockups, writing code from front end to back end, and deploying it to production servers, I am better placed to manage the whole process. I understand what each stage involves, so my estimates reflect how the work actually gets done, my architecture and DevOps guidance is practical, and developers get technical answers from me directly, not relayed through someone else. I hold every project to the same standard: disciplined version control, repeatable deployments, documented decisions and clean handovers.

## Selected work

- Bing Blogs card: change the title from "Microsoft Bing Blogs" to "Bing Blogs". The subline "Microsoft · Technical Project Manager, Falcon Software" stays.
- BritishColumbia.ca card: drop "(IBM partnership)" from the subline, so it reads "Province of British Columbia · Technical Project Manager, Falcon Software". The IBM work is covered in the Experience bullet below.
- HealthStream.com card: end the description at "reusable components". Remove "alongside custom widgets and features".

## Experience

Falcon Software Company Inc. Replace the first three bullets with these. The HSAS and CI/CD bullets stay as they are.

- Manage web projects for public-sector, healthcare and member-organization clients, owning scope, time and cost estimates, schedule, architecture and DevOps guidance, and stakeholder reporting. Current projects are delivered through Falcon's partnership with KPMG.
- Led the Bing Blogs engagement for Microsoft, from scoping through the Kentico 13 launch on Azure App Service.
- Led IBM partner projects for the Province of British Columbia, including the development phase of the BritishColumbia.ca redesign.

Order of roles. Move The Rand Group below Soulpepper so the list runs by end date, newest first: Falcon, NativeAds, Ryders Eyewear, Noble Pixels, Soulpepper, The Rand Group, James Higgins Web Development.

Noble Pixels. Replace the first bullet with:

- Developed CMS interfaces across three production applications, working from user stories on an in-house Agile team.

Soulpepper. Replace the store description so the owner is named. If the bullet stays merged as it is in the PDF, it reads:

- Managed and developed RoderickAllan.com, a Magento store for the agency's client Solidsteel, set up its Git deployment workflow on Beanstalk, and integrated third-party stock data from Google Sheets into Magento with Magmi through a custom PHP cron job.

The Rand Group. Replace the first bullet with:

- At a Microsoft Dynamics solutions partner, managed and developed the company's own sites, RandGroup.com and Dynamics101.com, and client sites including HoustonSymphony.org, itsolutions.bdo.ca and LSRetail.com.

NativeAds, Ryders Eyewear and James Higgins Web Development are unchanged.

## Skills

Replace the Tools row with:

Jira, Asana, Monday.com, Git, Bitbucket, Docker, Lando, Linux, WP Engine, Pantheon, Microsoft Azure, Kentico, AI-assisted development (Claude Code, OpenAI Codex)

Removed: Basecamp, Trello, Microsoft Teams, Bitbucket Pipelines, Webpack, Sitefinity. Use a plain hyphen in "AI-assisted". The current PDF has a non-breaking hyphen there, which applicant tracking systems do not match against "AI-assisted".

Delivery and Engineering rows are unchanged.

## Education

Change "Applied Web Development (Associate Certificate)" to "Associate Certificate, Applied Web Development". The BA, Philosophy line is unchanged.

## Export

Set the document title to "James Higgins Resume" before exporting. The current PDF's title is "Resume creation request", which shows in the browser tab when the PDF opens from the site. Save over `assets/James-Higgins-Resume.pdf` in the site repo, keeping the file name.
