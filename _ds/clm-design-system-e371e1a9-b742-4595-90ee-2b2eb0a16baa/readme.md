# CLM Design System

Design system for HotelKey's **CLM** (Contract Lifecycle Management) product: an admin app for
generating and tracking lease documents, plus a public Signing Portal for the people who sign them.
Shares its foundation with HotelKey's TenantKey product — Tailwind-v4-style tokens, Lato, the same
Untitled-UI-derived brand-blue ramp.

**Sources**: component styles, color ramps, radii and shadows are taken from the TenantKey component
library (`tenantkey-ui-components`: `src/styles/theme.css`, `src/utils/variantClasses.js`, and each
`Tk*.vue`). Each `.jsx` names the Tk component it mirrors in a header comment. Copy rules and
CLM-only patterns (ListCard, PageHeader, SearchFilterBar, ConfirmDeletePopup) come from hk-clm-ui
`src/components/helpers`, and copy rules from the original brief.
Page layouts in `ui_kits/clm-admin` are rebuilt from the hk-clm-ui repo (Home.vue,
DocumentManagement.vue, DocumentRequests.vue and each list view) plus app screenshots. CLM logo and
sidebar icons are the real assets from `hk-clm-ui/src/assets` (copied to `assets/clm/`).

No mark exists beyond the CLM wordmark logo (`assets/clm/CLM-Logo.svg`, white, used in AppHeader).

## Two surfaces
- **CLM Admin** — Requests, Template Groups, Tags, Template Group Types, Template Rules, Accounts,
  Fonts (7 sidebar screens).
- **Signing Portal** — document canvas, signature fields, sign modal, bottom action bar. Public-facing,
  used once per signer.

## Content fundamentals
**Admin**: terse, label-like, never "you". Field labels/values, not sentences. Buttons are imperative
and short — "Add New", "Save", "Apply", "Clear". Search placeholders state the mechanic — "Search
Items by Name or Code". Statuses are sentence-case for display, `UPPER_SNAKE` only in raw data.
Delete confirmations name the type and the item verbatim: "Are you sure you want to delete this
Template Group Standard Lease?"

**Portal**: plain and direct, not warm — no greeting, no emoji. This is a one-time legal transaction,
not a returning-user product. Copy states what's needed or left, not how the user feels about it:
"3 fields remaining", "All fields signed", "Type your name", "Apply signature", "Complete signing".
Field prompts are commands: "Sign here — Guarantor signature".

Every string is effectively a translation key in production — keep copy short and self-contained,
never built by concatenating fragments.

## Visual foundations
**Color**: Tk gray ramp + brand blue ramp (action = brand-600 #1199d6, hover = brand-700 #0d7aab).
Three semantic hues (error/warning/success) plus one purple reserved exclusively for the
stamped-vs-signed PDF distinction — the system's only non-brand hue, deliberately kept narrow.
App shell header is navy (#154273) — the one place a gradient could ever apply, and even there
none is used by default. One focus ring color everywhere: brand-500, 2px, offset.

Status colors come from hk-clm-ui `colorMap.js` (fallback secondary): Completed/Signed/Active = success,
In Progress/Pending Sign = warning, Not Started/Failed/Inactive = danger, Expired = orange,
Sent/Non Signing/Partially Signed/Draft = secondary (gray).

**Type**: Lato only (300/400/700/900), fallback Helvetica Neue/Arial. 14px body is the workhorse.
Two title sizes exist for the same conceptual role (popup title 17px vs dialog title 18px) —
kept as measured rather than unified; don't "fix" this.

**Spacing & size**: 4px base unit, steps 4/8/12/16/20/24/28/32/40px. Four load-bearing radii:
xs 2px (tags), sm 4px (buttons/inputs/list-cards — the workhorse), md 6px (dropdown options, code
pills), lg 8px (cards, popups, app shell). Exactly three control heights (sm 36 / md 40 / lg 44) —
no per-instance overrides. Three popup widths (sm 30rem / md 40rem / lg 62rem).

**Shadows**: xs/sm at rest on inputs and dropdowns, md appears only on list-card hover, lg on popups.
Nothing floats by default.

**Backgrounds**: flat white/light-gray surfaces only. One gradient total, implicit in the navy header
(kept subtle/near-solid) — no gradients anywhere else. The signing document canvas is the one
full-bleed white surface in the whole system.

**Motion**: gentle only — 0.2s color transitions on hover, 0.3s ease-out toast slide-in from the
right. No bounce, no decorative animation, nothing else moves.

**Hover/press**: hover states shift border/text to brand tones (e.g. list-card border → brand-300 +
shadow-md); no opacity fades, no scale/shrink press effects — this system doesn't use them.

**Borders**: 1px gray-200 is the default card/list border; brand-300 on hover. No inner shadows, no
glass/blur effects, no protection gradients — none of that vocabulary is used here.

## Iconography
Real TkIcon SVGs (48 copied to `assets/icons/`, inlined into `components/core/Icon.jsx`). Strokes are
recolored to `currentColor`, matching TkIcon's mount-time recolor. Sizes: `sm` 16px, `md` 20px
(default). Use Tk names (`search-lg`, `x-close`, `trash-03`…); legacy camelCase names still resolve.
To add an icon, copy its SVG from `TkIcon/icons/` into `assets/icons/` and regenerate the map.

## Index
- `styles.css` — root stylesheet, imports all tokens.
- `tokens/` — `colors.css`, `typography.css` (incl. `@font-face` for Lato), `spacing.css` (spacing,
  radii, control heights, popup widths, shadows).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups) shown in the
  Design System tab.
- `components/` — reusable primitives, grouped by concern: `forms/`, `display/`, `navigation/`,
  `overlay/`, `data/`.
- `ui_kits/clm-admin/` — CLM Admin screens (Requests, Template Groups, Tags, Template Group Types,
  Template Rules, Accounts, Fonts).
- `ui_kits/signing-portal/` — public Signing Portal screens.
- `assets/` — no real logo/icon assets were provided this run; see Iconography above.
- `SKILL.md` — Claude Code-portable skill wrapper for this design system.

## Component → Tk mapping
Button→TkButton (19 variants), Tag/StatusTag→TkTag (+ CLM colorMap via ColorMap), Input→TkInput (44px),
Select/FilterSelect→TkSelect + TkSelectOption (+ CLM FilterSelect/StatusFilter), Checkbox→TkCheckbox,
Toggle→TkToggle, UploadFile→CLM TkUploadFile, DateRangeInput→TkDatePicker range trigger, StatsCard→TkStatsCard,
CustomStatsCard→TkCustomStatsCard, EmptyState→CLM EmptyState (TkEmptyState geometry), Popup→TkPopup,
Toast→TkNotification, Table→TkTable, Pagination→TkPLMSPagination, Sidebar→TkSidebar (CLM Admin menu),
SideNav→TkSideNav (navy, not used by CLM Admin), AppHeader→hk-clm-ui Header.vue.
CLM helpers (hk-clm-ui `components/helpers`): ListCard, PageHeader, SearchFilterBar, ConfirmDeletePopup.

Known Tk quirks kept as-is: inputs focus with a blue-500 ring while buttons/checkboxes focus with
brand-500; Select trigger is 40px while Input is 44px. Font is Lato (hk-clm-ui `style.scss`), not the
Inter set in Tk's `.font-sans`.
