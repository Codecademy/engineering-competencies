# Competency Explorerer

This is a tool to be able to parse the current set of Codecademy Engineering competencies & to turn them into an explorable github page. Because the GitHub page hosting is pretty simplistic on the server side, the recommendation is not to run this server through webpack-dev-server but to instead use the VS Code extension "Live Server"

## Technical 

This is a standard react-redux app with some markdown parsing. It is designed to not need updates when updates to the competencies are published. 

## Building Steps

1. Go to the `docs/competency-explorer` directory
2. In one terminal, run `yarn build` (or if making changes, run in watch mode with `yarn build -w`)
3. Host `/docs/index.html` with VS Code Live server
4. Go to localhost:5500 (or wherever you have configured your server)
5. Make sure that competencies are loading & being shown

## Fixes & Improvements

[ ] Make the font very readable in the matrix view
[ ] Collapse all prior competencies into one bucket
[ ] Use a diff tool to detect similar competencies