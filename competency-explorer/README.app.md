# Competency Explorerer

This is a tool to be able to parse the current set of Codecademy Engineering competencies & to turn them into an explorable github page.

## Technical

This is a standard react app using the `react-markdown-to-matrix` library to render competencies in a matrix form. It is designed to not need updates when updates to the competencies are published. It uses GitHub pages to render appropriately.

## Running Locally

1. Go to the `competency-explorer` directory
2. Run `yarn start` to open the live-reloading dev server
3. Go to `localhost:5000`
4. Make sure the competencies are being loaded and shown

## Publishing to Github Pages

1. Go to the `competency-explorer` directory
2. Run `yarn build` to generate the compiled script
3. Commit the updated version of `bundle.js` to the master branch
4. Github takes care of the rest!

## Fixes & Improvements

[x] Make the font very readable in the matrix view

[x] Collapse all prior competencies into one bucket

[x] Use a diff tool to detect similar competencies

[x] Switch to the library version of this app

See issues on [kipprice/markdown-matrix](https://github.com/kipprice/markdown-matrix/issues) for additional upcoming features.