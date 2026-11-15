# NASA Space Apps 2026 -- Complete Project Structure & Concept

**Project challenge:** *Abandoned but not Forgotten: Storytelling about
NASA's Discarded Equipment on the Moon and Mars*

**Project concept:** An interactive educational website for children
aged **9--15**, transforming NASA's inactive, abandoned, or retired
space equipment into engaging stories.

The experience should feel like an interactive space adventure---not a
traditional educational website.

> **Central concept:** Every spacecraft has a story, and every story has
> a scientific legacy.

------------------------------------------------------------------------

# 1. Main Idea

The website begins with an engaging space environment. Children are
introduced to NASA and space exploration, then enter an interactive
solar-system scene where they choose a destination:

-   **The Moon**
-   **Mars**
-   **Deep Space**

After selecting a destination, children discover spacecraft and
equipment associated with it. Each featured spacecraft has its own
interactive story, explaining its journey from the beginning of its
mission through its final status.

------------------------------------------------------------------------

# 2. Complete Website Structure

``` text
HOME / LANDING PAGE
    |
    v
EXPLORE SPACE
Interactive solar system and destination selection
    |
    +----------------+----------------+----------------+
    |                |                |
  THE MOON          MARS          DEEP SPACE
    |                |                |
    +----------------+----------------+
                     |
                     v
          SPACECRAFT DISCOVERY
       Choose a spacecraft and discover it
                     |
                     v
        INTERACTIVE MISSION JOURNEY
       Follow the spacecraft lifecycle
                     |
                     v
             THE FINAL CHAPTER
       Final status, discoveries and legacy
                     |
                     v
          KNOWLEDGE & DISCOVERY
       Facts and optional learning activities
```

## Section 1 -- Landing Page: Welcome to NASA

**Purpose:** Capture children's attention immediately.

The landing page should include:

-   A full-screen cinematic space background.
-   A short introduction to NASA.
-   A brief explanation of space exploration.
-   An animated welcome message.
-   A prominent **START YOUR JOURNEY** button.

Suggested introduction:

> Every machine sent into space has a mission. Some explored the Moon,
> others traveled to Mars, and some went farther than humanity had ever
> imagined.
>
> But what happened to them after their missions ended?
>
> Let's discover their stories!

**Interactions:**

-   Smooth scrolling.
-   Animated stars and planets.
-   Subtle background movement.
-   A clear Start Exploring button.

Keep the landing page concise; avoid overwhelming children with text.

## Section 2 -- Explore the Solar System

This is one of the most important sections.

The child enters a large interactive space environment containing:

-   The Moon.
-   Mars.
-   Earth and other planets.
-   Spacecraft and probes.
-   Space exploration objects.

Each destination should be clickable.

When the child hovers over or selects a destination:

-   The destination becomes highlighted.
-   A small information panel appears.
-   A short description is displayed.
-   A button invites the child to explore.

Example:

**Mars**

"Discover the robotic explorers that traveled across the Red Planet."

`EXPLORE MARS`

The same concept applies to the Moon and Deep Space.

**Important:** Spacecraft that are not included in the full storytelling
experience can still appear visually in the main scene as discovery
objects.

## Section 3 -- Destination Pages

Each destination has its own visual environment and displays the
available spacecraft through attractive cards or interactive visual
elements.

### The Moon

Explore equipment left behind by lunar exploration missions.

Initial examples from the project proposal:

-   Apollo Lunar Modules.
-   Lunar Roving Vehicles.
-   ALSEP.
-   Surveyor Landers.

### Mars

Discover robotic explorers that investigated the Martian surface.

Initial examples from the project proposal:

-   Sojourner.
-   Spirit.
-   Opportunity.
-   Viking 1 and 2.
-   Phoenix.
-   InSight.

### Deep Space

Explore spacecraft that traveled beyond Earth and investigated distant
worlds or the wider universe.

Initial examples from the project proposal:

-   Dawn.
-   NEAR Shoemaker.
-   Pioneer 10 and 11.
-   Kepler Space Telescope.

Each featured spacecraft should have its own complete storytelling
experience. Other equipment may appear visually without a full
interactive story.

------------------------------------------------------------------------

# 3. Individual Spacecraft Experience

**This is the core feature of the project.**

Every featured spacecraft should have a dedicated interactive journey.

For example, when a child selects Opportunity, they should not simply
see a page containing information. They should enter its story.

## Mission Story Structure

  Stage                    What the child discovers
  ------------------------ ------------------------------------------
  01\. The Beginning       Why was this spacecraft created?
  02\. The Mission         What was its purpose?
  03\. The Launch          How did it leave Earth?
  04\. The Journey         How did it travel through space?
  05\. The Landing         How did it reach its destination?
  06\. The Exploration     What did it investigate?
  07\. The Discoveries     What scientific discoveries did it make?
  08\. The Final Chapter   How and when did its mission end?
  09\. The Legacy          Why is this mission important today?

The structure should be reusable, but the exact stages and content must
reflect each spacecraft's real mission. Not every spacecraft will have a
landing stage, for example.

## How the Interaction Should Work

Instead of displaying all information at once, reveal the story
progressively.

### Example: Opportunity Rover

**Stage 1 -- The Beginning**

Display a realistic visual of the rover and a short explanation:

"Meet Opportunity! NASA created this robotic explorer to investigate the
surface of Mars and search for evidence of past water."

The child clicks:

`CONTINUE THE JOURNEY`

The environment transitions to the next scene.

**Stage 2 -- The Launch**

Show a realistic rocket launch scene.

Explain:

-   Launch date.
-   Launch vehicle.
-   Launch location.
-   Mission objective.

**Stage 3 -- The Journey**

Show the spacecraft traveling toward Mars.

Use animated paths, stars, and visual transitions.

**Stage 4 -- Landing**

Show the arrival and landing process. Explain how NASA placed the rover
on the Martian surface.

**Stage 5 -- Exploration**

Show real images from the mission. Explain what Opportunity investigated
and how it operated.

**Stage 6 -- Discoveries**

Present its most important scientific findings using visual
explanations.

**Stage 7 -- The Final Chapter**

Explain what happened to Opportunity, how its mission ended, and its
final communication.

**Stage 8 -- The Legacy**

End with the impact of the mission and what scientists learned.

The same storytelling structure should be reusable for every featured
spacecraft, with mission-specific stages and content.

------------------------------------------------------------------------

# 4. Visual Design and Animation Direction

The visual identity should be consistent across the website.

## Suggested Color Palette

  Color             Usage
  ----------------- -------------------------
  Deep Space Navy   Main background
  Dark Blue         Sections and panels
  White             Main text
  Cyan              Interactive elements
  Orange            Mars-related highlights
  Purple            Deep-space elements

## Animation Ideas

-   Slowly moving stars in the background.
-   Planets rotating as visual animations.
-   Smooth transitions between mission stages.
-   Animated spacecraft travel paths.
-   Parallax effects.
-   Cinematic scene transitions.
-   Highlight effects when hovering over objects.
-   Animated mission progress indicators.

**Important visual constraint:** Use realistic 2D imagery and
animations. Do not build interactive, rotatable 3D spacecraft models at
this stage.

------------------------------------------------------------------------

# 5. Educational Interaction Features

These additional features can make the experience more memorable. They
should not interrupt the main storytelling experience.

## Mission Timeline

Show important dates and milestones during the spacecraft's lifetime.

## Did You Know?

Display short, surprising facts throughout the journey.

## Discovery Questions

Add small questions after selected stages to help children remember what
they learned.

## Mission Achievements

Present scientific achievements and mission records visually.

------------------------------------------------------------------------

# 6. Technical Project Architecture

This is a recommended technical structure, not a technology stack
prescribed by NASA.

## Recommended Technology Stack

-   **React** -- Main frontend framework.
-   **Vite** -- Development and build tooling.
-   **TypeScript** -- More reliable and maintainable code.
-   **Tailwind CSS** -- Styling and responsive layouts.
-   **Framer Motion** -- Animations and transitions.
-   **Lucide Icons** -- Interface icons.

For the initial version, use a frontend-only architecture with
structured mission data. A backend is not necessary unless the project
later introduces accounts, saved progress, or other server-dependent
functionality.

## Suggested Folder Structure

``` text
nasa/
│
├── public/
│   ├── images/
│   │   ├── planets/
│   │   ├── moon/
│   │   ├── mars/
│   │   ├── spacecraft/
│   │   └── backgrounds/
│   │
│   ├── videos/
│   └── audio/
│
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── SpaceScene/
│   │   ├── PlanetSelector/
│   │   ├── SpacecraftCard/
│   │   ├── MissionTimeline/
│   │   ├── StoryStage/
│   │   ├── FactCard/
│   │   └── ProgressIndicator/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Explore/
│   │   ├── Moon/
│   │   ├── Mars/
│   │   ├── DeepSpace/
│   │   ├── Spacecraft/
│   │   └── FinalChapter/
│   │
│   ├── data/
│   │   ├── missions/
│   │   ├── spacecraft/
│   │   └── destinations/
│   │
│   ├── hooks/
│   ├── animations/
│   ├── assets/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
└── README.md
```

Mission data should be separated from the UI so adding a new spacecraft
does not require rebuilding the entire website.

------------------------------------------------------------------------

# 7. NASA Data and Scientific Accuracy

The project proposal identifies NASA resources, including the **NASA
Space Science Data Coordinated Archive (NSSDCA)**, as an important
source for spacecraft and mission information.

Use NASA sources as the primary scientific references.

For every featured spacecraft:

-   Verify historical facts.
-   Verify mission dates and technical specifications.
-   Verify scientific discoveries.
-   Verify the final operational status and location.
-   Distinguish verified facts from unavailable information.
-   Provide source references and links for educational content.

Do not fabricate historical facts, dates, mission results, or technical
specifications.

NASA data must be the foundation of the stories, not merely images used
as decoration.

------------------------------------------------------------------------

# 8. How the Project Meets NASA Judging Criteria

The project should be designed around all five judging criteria.

  -----------------------------------------------------------------------
  Criterion                           Our approach
  ----------------------------------- -----------------------------------
  **Impact**                          Make space science accessible and
                                      inspiring to children.

  **Creativity**                      Turn historical missions into
                                      interactive storytelling journeys.

  **Validity**                        Use accurate NASA data, reliable
                                      sources, and functional
                                      interactions.

  **Relevance**                       Directly tell the stories of NASA's
                                      abandoned and inactive equipment.

  **Presentation**                    Deliver a cinematic, organized,
                                      visually engaging experience.
  -----------------------------------------------------------------------

These criteria must influence the actual implementation, not just the
project description.

------------------------------------------------------------------------

# 9. Development Priorities

Implement the project in the following order.

1.  **Phase 1 -- Foundation:** Establish the React project, design
    system, navigation, responsive layouts, and reusable components.
2.  **Phase 2 -- Landing Page:** Build the introduction, cinematic
    background, and main navigation experience.
3.  **Phase 3 -- Interactive Solar System:** Build the main space scene
    and clickable destination selection.
4.  **Phase 4 -- Destination Pages:** Create the Moon, Mars, and Deep
    Space environments and spacecraft selection.
5.  **Phase 5 -- Mission Storytelling Engine:** Build a reusable
    interactive journey that supports different spacecraft and mission
    histories.
6.  **Phase 6 -- NASA Content Integration:** Add verified mission data,
    real images, videos, scientific discoveries, and citations.
7.  **Phase 7 -- Animations and Educational Features:** Add transitions,
    timeline interactions, facts, and discovery questions.
8.  **Phase 8 -- Testing and Final Presentation:** Test all
    interactions, responsive layouts, content accuracy, and the complete
    experience.

------------------------------------------------------------------------

# 10. Strategic Design Principles

1.  **Storytelling over information:** Children should experience a
    spacecraft's journey rather than read a long article about it.
2.  **One consistent experience:** Every featured spacecraft should
    follow a recognizable storytelling structure.
3.  **Real NASA content:** Historical and scientific accuracy must be
    maintained.
4.  **Visual-first design:** Images, animations, and scenes should
    communicate information before long paragraphs.
5.  **Simple navigation:** A child should always understand where they
    are and what to do next.
6.  **Meaningful ending:** The final chapter should explain why an
    inactive spacecraft still matters to humanity.

------------------------------------------------------------------------

# 11. Recommended Final Experience

Imagine a child entering the website.

They see Earth from space.

They start their journey.

They enter the solar system and choose Mars.

They discover Opportunity.

They follow its launch, its journey, its landing, its discoveries, and
finally its last days.

At the end, they understand that even though Opportunity stopped
communicating with Earth, its scientific achievements remain valuable.

Then the website asks:

> **"The mission may have ended, but its discoveries will never be
> forgotten. Which explorer will you discover next?"**

That is the emotional and educational experience we want to create.

------------------------------------------------------------------------

# 12. Final Recommendation

Use this document as the project's master blueprint.

One important decision remains: the initial proposal lists equipment,
but does not establish exactly which spacecraft will receive full
interactive journeys and which will appear only in the main solar-system
scene.

Preserve the original project decision:

-   Every selected featured spacecraft gets a complete interactive
    experience.
-   Other equipment can appear visually in the main space scene without
    a complete story.

**The Mission Storytelling Engine should be the most important technical
component.** If it is built properly, new spacecraft and stories can be
added without redesigning the website every time.

The goal is a working educational storytelling platform---not simply a
beautiful landing page.
