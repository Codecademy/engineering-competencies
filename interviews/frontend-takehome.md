# Frontend Takehome Grading

## Section Scores

### Code Quality

Code is generally well-organized and easy to understand.

- ⭐️ 4: Well-organized and understandable; clear names; no major [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) or [SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle) violations
- 👍 3: All but one or two pieces of 4
- 👎 2: All but one or two pieces of 1
- 🛑 1: Sloppy and difficult to reason with; poor naming; major [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and/or [SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle) violations

### Frontend Knowledge

Core HTML5 and framework (e.g. React) fundamentals.
See [Frontend Specifics](#frontend-specifics) below.

- ⭐️ 4: Reasonable APIs choices; no major anti-patterns; consistent and logical syntax choices
- 👍 3: All but one or two pieces of 4
- 👎 2: All but one or two pieces of 1
- 🛑 1: Suboptimal API choices; common anti-patterns; inconsistent or misleading syntax choices

### Solution Completion

All requirements are met as outlined by the assignment's requirements.
Application can be used smoothly and without visible bugs.

- ⭐️ 4: Completely completed, including discoverable edge cases
- 👍 3: Completed except for one or two minor edge cases and/or a little buggy behavior on edge cases
- 👎 2: Missing a major feature or several smaller features, and/or is very buggy
- 🛑 1: Missing major features or is generally not functional

### Delighters

Non-core features encouraged for completion after the core features.

- ⭐️ 4: Requested delighter content completed fully
- 👍 3: Requested delighter mostly completed or completed with a few minor bugs/flaws
- 👎 2: Little to no delighter content was completed

## Frontend Specifics

### What We Look For

- Use of framework and language best practices
- Concise, readable code that uses declarative constructs (e.g. .map) reasonably
- React and other UI frameworks:
  - DOM: no unnecessary DOM manipulation (i.e. unless for 3rd party libraries)
  - State: immutability, pure functions, and isolated side effects per the framework's preferences

### What We Ignore

We don't penalize candidates for consistent style choices that don't demonstrate significant knowledge gaps.

- Nitpicks: we don't require completely optimal declarative or functional patterns
- Performance: e.g. .forEach vs. for-const-of
- Style: e.g. files and folder structures; formatting/whitespace; grouping, naming, or sorting...
- Syntax: e.g. `let` vs. `const`; traditional vs. arrow functions; import style...

We don't have a preference for patterns or APIs the applicant wouldn't need to know:

- CSS: naming principles such as [BEM](http://getbem.com/introduction/)
- Style choices within frameworks; for example, within React, class components vs. function components _(not everyone has been taught hooks yet!)_
