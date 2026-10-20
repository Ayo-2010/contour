# Contour

An interactive trail atlas for a fictional corner of the Cascades. Six routes are drawn directly into an SVG topographic map, with live filtering, saved routes, waypoints and a scrubbable elevation profile.

## What is inside

- Hand-built SVG map with contour lines, forest texture, water, labels, spot heights and six colour-coded routes
- Pan and drag, wheel zoom, zoom controls, reset and a focus action that fits the selected route
- Contour and waypoint layer toggles
- Route index with search, difficulty filters and a saved-routes filter
- Route details with distance, time, ascent, shape, condition, season and waypoints
- Saved routes stored in localStorage
- Elevation profile generated from route data, with a pointer readout for distance and height
- Keyboard selection for map routes and responsive layouts down to 390px

## Running it

Open `index.html` in a browser. There is no build step and no dependencies to install.

## Files

```
index.html
styles.css
script.js
```

## Tech

Plain HTML, CSS, JavaScript and inline SVG. Kestrel Ridge is a fictional place; the map is drawn from route data rather than map tiles.
