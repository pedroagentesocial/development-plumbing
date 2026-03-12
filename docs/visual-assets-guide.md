# Visual Assets Guide

## Photographic Style Direction

- Look and feel: clean, premium, trustworthy, local field realism
- Color profile: neutral whites, deep navy shadows, controlled warm highlights
- Lighting: natural or soft directional, avoid hard flash and over-saturated edits
- Composition: subject-first framing with negative space for copy overlays
- Wardrobe and props: branded workwear, tools in use, service vans, real property context
- Authenticity: prioritize real work scenes over staged stock expressions

## Core Image Recommendations

### Hero

- Goal: establish trust and response capability in the first viewport
- Preferred scene: technician on-site in a residential setting, active diagnostic moment
- Ratio: 3:2
- Display target: 720–960px wide card on desktop
- Asset slot: `heroMain`
- Source key: `visualAssets.heroMain`

### Services

- Goal: support service intent without visual clutter
- Preferred scene: one clear action per service category
- Ratio: 4:3
- Recommended minimum: 1440x1080
- Asset slots:
  - `serviceEmergency`
  - `serviceDrain`
  - `serviceWaterHeater`
  - `serviceLeak`
  - `serviceSewer`
  - `serviceCommercial`

### Team

- Goal: increase trust and local credibility
- Preferred scene: technician portraits in real field context
- Ratio: 4:5
- Recommended minimum: 1200x1500
- Asset slot: `teamPortrait`

### Testimonials

- Goal: reinforce social proof with visual consistency
- Preferred scene: natural portrait or property context image
- Ratio: 1:1
- Recommended minimum: 1200x1200
- Asset slot: `testimonialPhoto`

## Named Placeholders

Available in `public/images/placeholders/`:

- `hero-utah-plumber.svg`
- `service-emergency-plumbing.svg`
- `service-drain-cleaning.svg`
- `service-water-heater.svg`
- `service-leak-detection.svg`
- `service-sewer-line.svg`
- `service-commercial-plumbing.svg`
- `team-technician-portrait.svg`
- `testimonial-customer-portrait.svg`

## Icon System

Service and trust icon mapping:

- Emergency service: `ZapIcon`
- Drain cleaning: `DrainIcon`
- Water heater: `FlameIcon`
- Leak detection: `DropletIcon`
- Sewer line: `PipeIcon`
- Commercial plumbing: `BuildingIcon`
- Licensed & insured: `LicenseIcon`
- Same-day service: `ClockBoltIcon`

## Performance and Loading Rules

- Hero image uses `loading="eager"` and high fetch priority
- Non-critical visuals use `loading="lazy"` and normal priority
- Always set explicit `width` and `height` to prevent layout shift
- Use `decoding="async"` for responsive image delivery
- Keep hero assets near 1920px max width unless needed for zoom-heavy layouts
- Keep service, team, and testimonial images compressed to visually lossless quality

## Responsive Usage Targets

- Hero desktop: `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 720px"`
- Service grid cards: 4:3 visual container
- Team cards: 4:5 visual container
- Testimonial avatars or portraits: 1:1 visual container

## Implementation Reference

- Asset registry: `src/lib/media.ts`
- Hero implementation: `src/components/react/pages/HomePage.tsx`
- Service icon system: `src/components/react/blocks.tsx`
- Trust badge icons: `src/components/react/SiteShell.tsx`
