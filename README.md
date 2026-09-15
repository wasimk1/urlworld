# The URL World

A responsive personal link directory built with plain HTML, CSS, and JavaScript. Open `index.html` in a browser. No installation or build step is needed.

## Adding links

Copy an existing `<article class="card">` inside the appropriate section in `index.html`. Change the title, icon, URL, accessible link label, and optional `data-keywords`. Keep `target="_blank" rel="noopener noreferrer"` on external links. Search and counts update automatically.

To add a section, copy a `.link-section`, give it a unique ID and heading ID, and add a filter button whose `data-filter` matches its ID. Empty sections are hidden automatically when JavaScript is enabled.

Colors and responsive layouts are in `style.css`; filtering is in `script.js`. All icons are inline SVG or text, with no external dependencies.

Share Text is a local-network service and requires access to that network.
