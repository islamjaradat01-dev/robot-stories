# Robot Stories: NASA's Discarded Equipment on the Moon and Mars

An interactive, bilingual (English / Arabic) storytelling website for children aged 9–15, built for the **NASA Space Apps Challenge 2026** challenge *"Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars"*.

Children choose a destination (the Moon, Mars, or Deep Space and Beyond) and pick a spacecraft. They then follow its story chapter by chapter, from launch to landing, its discoveries, how its mission ended, and where it is today. Every fact comes from a NASA or NSSDCA page and shows its source, and the pictures are real NASA images with their credits.

## Links

| | |
|---|---|
| Live site | https://islamjaradat01-dev.github.io/robot-stories/ |
| GitHub repository | https://github.com/islamjaradat01-dev/robot-stories |
| Pitch deck (7 slides) | https://islamjaradat01-dev.github.io/robot-stories/pitch/ |
| Slides as PDF | https://islamjaradat01-dev.github.io/robot-stories/pitch/NASA_Project_Presentation.pdf |
| Slides as PowerPoint | https://islamjaradat01-dev.github.io/robot-stories/pitch/NASA_Project_Presentation.pptx |
| Demo video | none |

## Data status

- 21 mission journeys: 8 on the Moon, 8 on Mars and 5 in Deep Space.
- Every mission is still marked `"unverified": true`. A human fact-check is in progress:
  - The Moon corrections have been applied and the Moon data is frozen (`freeze/README.md`).
  - The Mars fact-check report is written (`NASA_Human_Fact_Check_Mars.md`). Its corrections are not yet applied.
  - Deep Space has not been checked yet.
- Facts carry an evidence label: NASA page, disputed between NASA pages, not stated by NASA, or challenge page only.

## Run it locally

```
npm install
npm run dev          # development server
npm test             # unit and regression tests (includes the Moon freeze check)
npm run validate     # data checks: both languages present, sources, credits
npm run build:pages  # builds the site into docs/ for GitHub Pages
```

Built with React, Vite, TypeScript and Tailwind CSS. The site has no backend; all content is static JSON in `src/data/`.

## Credits

Images: NASA and its partner institutions, as credited under each picture. Text sources: NASA Science, NASA.gov and the NASA Space Science Data Coordinated Archive (NSSDCA). The project is not endorsed by NASA.
