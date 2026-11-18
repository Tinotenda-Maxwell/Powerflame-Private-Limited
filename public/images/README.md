# Images & videos: slot guide

Every photo on the site has a named **slot**. Until a file exists at the slot's path, the site
shows a branded placeholder (flame-gradient card with a flame icon), so nothing ever looks broken.

All slots are defined in **`src/content/images.ts`**: that file holds the path, size and alt text.
To add a photo:

1. Find or take a photo (suggested search terms below).
2. Crop it to the aspect ratio listed, resize to the size listed.
3. Export as **WebP** (quality 75–80). Optionally also export an **AVIF** with the same name
   (e.g. `blue-gas-flame.avif`) next to it; browsers that support AVIF will use it automatically.
4. Save it at the exact path below, then run `npm run build`.

Aim for **under 150 KB per image** (under 250 KB for the hero). Free tools: [Squoosh](https://squoosh.app).

> Only use photos you have the right to use. Pexels, Unsplash and Pixabay photos are free for
> commercial use. Avoid photos with competitor logos or recognisable branded cylinders.

## Photo slots

| Slot (in `images.ts`) | File path (inside `/public`)                               | Size (px)  | Ratio | Suggested search terms                                                        |
| --------------------- | ---------------------------------------------------------- | ---------- | ----- | ----------------------------------------------------------------------------- |
| `heroMain`            | `/images/hero/blue-gas-flame.webp`                         | 1200×1400  | 6:7   | "blue gas flame stove", "gas burner close up", "lit gas hob"                  |
| `aboutStory`          | `/images/about/powerflame-team-harare.webp`                | 1200×900   | 4:3   | Your own team photo (recommended), or "African business team portrait"        |
| `aboutSafety`         | `/images/about/cylinder-safety-inspection.webp`            | 1200×900   | 4:3   | "gas cylinder inspection", "technician checking valve", "LPG cylinder valve"   |
| `safetyGuide`         | `/images/services/gas-safety-leak-test.webp`               | 1200×900   | 4:3   | "soapy water leak test", "gas regulator", "gas hose connection"                |
| `serviceRefills`      | `/images/services/lpg-gas-refills.webp`                    | 1200×800   | 3:2   | "LPG cylinders", "gas refill station", "gas cylinder scale"                    |
| `serviceCylinders`    | `/images/services/gas-cylinders-and-accessories.webp`      | 1200×800   | 3:2   | "gas cylinders row", "gas regulator and hose", "propane tanks"                 |
| `serviceAppliances`   | `/images/services/gas-appliances-and-safety-equipment.webp`| 1200×800   | 3:2   | "gas stove kitchen", "fire extinguisher kitchen", "gas cooker"                 |
| `serviceInstallation` | `/images/services/gas-installation-and-repairs.webp`       | 1200×800   | 3:2   | "gas technician installing", "plumber gas pipe", "technician kitchen stove"    |
| `industryHomes`       | `/images/industries/homes.webp`                            | 800×600    | 4:3   | "African family cooking", "mother cooking gas stove", "home kitchen Africa"    |
| `industryRestaurants` | `/images/industries/restaurants-and-takeaways.webp`        | 800×600    | 4:3   | "restaurant kitchen flames", "chef wok fire", "commercial kitchen"             |
| `industryHotels`      | `/images/industries/hotels-and-lodges.webp`                | 800×600    | 4:3   | "safari lodge kitchen", "hotel breakfast buffet", "lodge dining"               |
| `industrySchools`     | `/images/industries/schools-and-institutions.webp`         | 800×600    | 4:3   | "large cooking pots", "school kitchen", "institutional catering"               |
| `industryBusinesses`  | `/images/industries/businesses.webp`                       | 800×600    | 4:3   | "street food vendor Africa", "small bakery", "food stall gas"                  |
| `industryFarms`       | `/images/industries/farms.webp`                            | 800×600    | 4:3   | "chicks under brooder", "poultry farm", "farm Zimbabwe"                        |
| `articleSwitching`    | `/images/articles/lpg-vs-firewood-and-paraffin.webp`       | 1200×630   | 1.9:1 | "cooking firewood smoke", "clean gas flame pot", "outdoor cooking fire"        |
| `articleLeaks`        | `/images/articles/check-gas-cylinder-for-leaks.webp`       | 1200×630   | 1.9:1 | "gas valve close up", "soap bubbles leak", "gas cylinder valve"                |
| `articleSizes`        | `/images/articles/choosing-gas-cylinder-size.webp`         | 1200×630   | 1.9:1 | "gas cylinders different sizes", "LPG bottles", "propane cylinders row"        |

## Video slots (optional)

Videos are optional. If they are missing, the hero shows the animated canvas flame and the
"How a safe refill works" section shows the `aboutSafety` photo slot instead.

On phones, on Data Saver connections and for visitors who prefer reduced motion, the site shows
the **poster image only** (no video download), to save customers' mobile data.

| Slot         | Files (inside `/public/videos/`)                                   | Size      | Notes                                         | Search terms (Mixkit, Coverr, Pexels Videos)              |
| ------------ | ------------------------------------------------------------------ | --------- | --------------------------------------------- | --------------------------------------------------------- |
| `hero`       | `hero.mp4`, `hero.webm`, `hero-poster.webp`                        | 1920×1080 | 8–15 s loop, no audio, **under 3 MB** (mp4)   | "gas stove flame", "blue flame slow motion", "lighting gas burner" |
| `safeRefill` | `safe-refill.mp4`, `safe-refill.webm`, `safe-refill-poster.webp`   | 1280×720  | 8–15 s loop, no audio, **under 2 MB** (mp4)   | "gas cylinder", "industrial valve", "technician inspection" |

Tips for small video files (with [HandBrake](https://handbrake.fr) or ffmpeg):

```bash
ffmpeg -i input.mov -an -vf "scale=1920:-2" -c:v libx264 -crf 28 -preset slow -movflags +faststart hero.mp4
ffmpeg -i input.mov -an -vf "scale=1920:-2" -c:v libvpx-vp9 -crf 38 -b:v 0 hero.webm
ffmpeg -i hero.mp4 -frames:v 1 -q:v 3 hero-poster.webp
```

## Brand assets (generated, do not edit by hand)

`/logo.svg`, `/favicon.ico`, `/icons/*` and `/og/*.png` are generated from the brand colours by
`npm run brand`. Replace `/logo.svg` with a designer's logo when you have one (keep the file
name). Social share images in `/og/` are 1200×630.
