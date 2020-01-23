# Frontend Takehome Grading

Hi!
Thanks for looking at our frontend takehome grading rubric!
These are the scores by which our engineering team evaluate frontend takehome assignments.
We _don't_ establish a hard minimum of score for any opening -- these scores are a general rubric, not a hard rule.

## Why?

We believe in openness and transparency in our engineering practices.
There must be _some_ criteria by which we evaluate takehome submissions, and if candidates are meant to be taking them, we'd like them to be clear to everyone.

We also welcome any feedback you have on these!

## Takehome Assignment Specifications

In our opinion, an ideal takehome assignment should:

* Expect (and state) a maximum time spent as 2-3 hours
* Explain clear, easy-to-understand instructions, including:
    * Minimum requirements for a successful submission
    * Areas of work we expect the candidate to focus on
    * Areas of work we do not expect the candidate to focus on or tackle at all
* Provide enough range of complexity for submissions to demonstrate excellence in implementation
* Request a limited 'delighter' feature set, with multiple options suggested to match various skill sets

## Section Scores

### Solution Completion

All requirements are met as outlined by the assignment's requirements.

* 💖 4: Completely completed, including discoverable edge cases
* 👍 3: Completed except for one or two minor edge cases
* 👎 2: Missing a major feature or a several smaller features
* 🛑 1: Missing major features or is generally not functional

### Solution Quality

Application can be used smoothly and without visible bugs.

* 💖 4: Works smoothly and delightfully without any bugs
* 👍 3: Works well with little to no buggy behavior on edge cases
* 👎 2: Moderate bug or two on a major feature, or major bugs on edge cases
* 🛑 1: Significant buggy behavior

### Code Quality

Code is generally well-organized and easy to understand.

* 💖 4: Well-organized and understandable; clear names; no major [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) or [SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle) violations
* 👍 3: All but one or two pieces of 4
* 👎 2: All but one or two pieces of 1
* 🛑 1: Sloppy and difficult to reason with; poor naming; major [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and/or [SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle) violations

### Frontend Knowledge
Core HTML5 and framework (e.g. React) fundamentals. See [Frontend Specifics](#frontend-specifics) below.

* 💖 4: Reasonable APIs choices; no major anti-patterns; consistent and logical syntax choices 
* 👍 3: All but one or two pieces of 4
* 👎 2: All but one or two pieces of 1
* 🛑 1: Suboptimal API choices; common anti-patterns; inconsistent or misleading syntax choices

### Delighters

Non-core features encouraged for completion after the core features.

* 💖 +2: One piece of delighter content completed fully and Solution Completion is 💖4
* 👍 +1: One delighter completed with bugs, or completed well but Solution Completion is 👍3
* 👎 0: No delighter content was completed, or Solution Completion is 🛑1 or 👎2

## Frontend Specifics

### What We Look For

* Use of framework best practices, particularly when it showcases understanding of proper use.
* Concise, readable code that uses declarative constructs (e.g. .map) reasonably
* React and other UI frameworks:
    * DOM: no unnecessary DOM manipulation (i.e. unless for 3rd party libraries)
    * State: immutability, pure functions, and isolated side effects per the framework's preferences

### What We Ignore

We don't penalize candidates for consistent style choices that don't demonstrate significant knowledge gaps, such as ones that could legitimately be preferable. 

* Nitpicks: we don't require completely optimal declarative or functional patterns
* Performance: e.g. .forEach vs. for-const-of
* Style: e.g. files and folder structures;  formatting/whitespace; grouping, naming, or sorting...
* Syntax: e.g. `let` vs. `const`; traditional vs. arrow functions; import style...

We don't have a preference for patterns or APIs the applicant wouldn't need to know:

* CSS: naming principles such as [BEM](https://en.wikipedia.org/wiki/Single_responsibility_principle)
* Style choices within frameworks; for example, within React, class components vs. function components _(not everyone has been taught hooks yet!)_
