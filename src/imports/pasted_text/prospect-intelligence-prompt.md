Figma Landing Page Design Prompt — Prospect Intelligence (v2, focused)

One-liner

AI sales intelligence platform: crawls public data (web, news, jobs, funding, sanctions/registries) → scores organizations for fit → generates outreach briefs and branded PPTX decks. Three intents on one engine: Prospects (who to sell to), Sponsors (who'd fund/back you), Partners (who'd co-sell/integrate with you).

Tagline: "Know who to call before they call you."

Target audience

•⁠  ⁠Primary: B2B sales reps / SDRs / AEs — want a ranked call list, not a raw lead spreadsheet.
•⁠  ⁠Secondary: Sales/RevOps managers — pipeline stage visibility, team analytics.
•⁠  ⁠Tertiary: Founders/BD leads running Sponsors or Partners search — same tool, different direction.
•⁠  ⁠Buyer already evaluates Gong/Clari/ZoomInfo-class tools; pitch is "AI-native, does discovery, not just enrichment."

Business goals

1.⁠ ⁠3-second category clarity: AI sales prospecting + discovery, not a CRM.
2.⁠ ⁠Primary CTA (signup/demo) repeated: hero, mid-page, footer.
3.⁠ ⁠Prove mechanics, not AI hand-waving: show crawl → score → brief pipeline concretely.
4.⁠ ⁠Differentiate via 3-in-1 engine (Prospects/Sponsors/Partners) — competitors do one direction.
5.⁠ ⁠Copy must tolerate EN/RU/HE localization; layout must survive RTL mirroring for Hebrew.

Capability set (be concrete, no vague AI claims)

Engine
•⁠  ⁠Crawls: company site (about/products/services/solutions/company/contact), news, job postings, funding announcements, social mentions, sanctions/compliance registries, company registries.
•⁠  ⁠Claude-extracted signals — tagged category + urgency (hot/warm/cold), e.g. "raised Series B," "hiring a CFO," "compliance gap flagged," "channel partnership open."
•⁠  ⁠Fit score (high/medium/low) + generated talking points per organization.
•⁠  ⁠Contact extraction: name, role, LinkedIn, best-effort email/phone, preferred outreach language.
•⁠  ⁠Pipeline stage tracking (new → qualified → contacted → won/lost), re-crawl on demand.
•⁠  ⁠Chat/discuss on a generated report — questions + notes persist and feed the next re-crawl.

Three directions
•⁠  ⁠Prospects (buyers), Sponsors (funders/backers), Partners (channel/reseller/co-marketing/tech-integration/JV) — each: discovery browse → deep-analysis report → chat.

PPTX export — customization, be specific
•⁠  ⁠One-click branded deck export per tracked record.
•⁠  ⁠Color customization: 8 curated presets (e.g. "Navy & Amber," "Indigo & Emerald," "Royal Blue & Green" — primary = dark full-slide background, secondary = accent) or free-form primary/secondary hex picker for full brand match.
•⁠  ⁠Design a small "Customize deck" control (palette swatch grid + two color-picker inputs) as its own landing-page feature callout, not folded into a generic bullet.

Profiles
•⁠  ⁠Seller profile: manual entry, PPTX/DOCX "Replace from doc" AI extraction, or autofill directly from a company URL.

Analytics & governance
•⁠  ⁠Dashboard: fit-score distribution, pipeline-stage breakdown, signal-category breakdown.
•⁠  ⁠AI usage admin: ML consent, API key management, usage tracking — for teams needing governance over AI spend/data.

Platform
•⁠  ⁠Multi-tenant, Postgres-backed, role-based access.
•⁠  ⁠Dark/light theme — user-togglable, not just a design mode; toggle exists in the live product header.
•⁠  ⁠i18n: English / Russian / Hebrew, with Hebrew rendering full RTL layout mirroring.

Themes — explicit design requirement

•⁠  ⁠Design the hero, feature grid, and CTA band in both dark theme (navy #020617 bg) and light theme (white/near-white bg) as two real Figma frames, not one frame with a note.
•⁠  ⁠Include a visible theme-toggle control in the nav mockup (sun/moon icon), matching the real product's ThemeToggle component — this is a feature to demonstrate, not just a stylistic choice for the marketing page itself.

Accessibility — explicit design requirement

•⁠  ⁠WCAG AA contrast minimum for all text/background pairs in both themes (verify green #22c55e/#16a34a accent against navy and white — check AA at body-text sizes, not just large-text).
•⁠  ⁠Visible focus states on all interactive elements (nav links, CTA buttons, theme toggle) — draw the focus ring as a design token, not an afterthought.
•⁠  ⁠Design mirrored RTL layout variant for at least the hero + nav (logo/CTA swap sides, text-align flips) — product ships Hebrew, page should visually prove RTL is a first-class layout, not a hack.
•⁠  ⁠Icon-only controls (theme toggle, language switcher) need visible label/tooltip treatment in the mock, not bare icons — signals real accessibility intent to a technical buyer evaluating the product.

Visual identity (fixed — reuse, don't reinvent)

•⁠  ⁠Primary accent: green #22c55e (light) / #16a34a (dark). Backgrounds: navy #020617 or white/near-white.
•⁠  ⁠Wordmark: "Prospect" neutral fg, "Intelligence" in accent green.
•⁠  ⁠Typography: geometric sans, medium/bold (Inter/Manrope/General Sans).
•⁠  ⁠Reference tier: Linear, Vercel, Stripe, Clari, Gong. Avoid: playful/cartoonish, spy/binoculars clichés, AI-brain/circuit-board stock imagery, heavy gradients, 3D bevels.
•⁠  ⁠Motif: radar/signal-wave ping — "detecting opportunity," not surveillance.

Page structure

1.⁠ ⁠Nav — logo, anchors (How it works / Prospects / Sponsors / Partners / Pricing), theme toggle, language switcher, Login, primary CTA.
2.⁠ ⁠Hero — headline + tagline, one-sentence mechanism ("crawls N sources, scores fit, briefs you"), primary + secondary CTA, visual: mocked signal card (e.g. "🟢 High fit — Acme Corp just raised Series B").
3.⁠ ⁠How it works — exactly 3 steps, one line each, icon-led: Crawl (public sources) → Score (AI fit + signals) → Brief (talking points + branded PPTX). Keep this section small/scannable, not a long explainer.
4.⁠ ⁠Three-engine showcase — Prospects/Sponsors/Partners as 3 cards, one value line + one example signal each.
5.⁠ ⁠Feature grid (6 cards) — AI fit scoring, signal detection, contact + language intelligence, customizable PPTX branding (palette swatches shown), pipeline analytics, chat/discuss on reports.
6.⁠ ⁠Product screenshot — dashboard in browser-chrome frame; show once in dark theme, once in light (paired, side-by-side or toggle-style).
7.⁠ ⁠PPTX customization callout — dedicated small section: palette-preset grid + before/after deck-color mock, since this is a concrete differentiator worth its own visual proof, not a bullet point.
8.⁠ ⁠CTA band — full-width, high-contrast, navy bg + green button (or inverse in light theme).
9.⁠ ⁠Footer — links, language selector (EN/RU/HE), legal.

Figma deliverable spec

•⁠  ⁠Frames: Desktop 1440px + Mobile 390px, ×2 for theme (dark/light) = 4 frame sets minimum for hero/CTA; other sections at minimum dark-theme desktop+mobile.
•⁠  ⁠One RTL-mirrored frame (hero + nav, Hebrew theme) to prove layout survives mirroring.
•⁠  ⁠Components from shadcn/ui conventions (button, card, badge, tooltip) — auto-layout, registered text/color styles (not flat hex fills) so tokens map to the Tailwind theme.
•⁠  ⁠Focus-state variant shown explicitly on at least the primary CTA button component.