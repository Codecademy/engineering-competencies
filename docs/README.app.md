# Competency Explorerer

This is a tool to be able to parse the current set of Codecademy Engineering competencies & to turn them into an explorable github page. 

## Technical 

This is a standard react-redux app with some markdown parsing. It is designed to not need updates when updates to the competencies are published. It uses GitHub pages to render appropriately.

## Running Locally

1. Go to the `docs` directory
2. Run `yarn start` to open the live-reloading dev server
3. Go to `localhost:5000`
4. Make sure the competencies are being loaded and shown

## Publishing to Github Pages

1. Go to the `docs` directory
2. Run `yarn build` to generate the compiled script
3. Commit the updated version of `bundle.js` to the master branch
4. Github takes care of the rest!

## Fixes & Improvements

[ ] Make the font very readable in the matrix view
[ ] Collapse all prior competencies into one bucket
[ ] Use a diff tool to detect similar competencies