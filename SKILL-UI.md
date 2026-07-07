---
name: GretaShopUIUpdates
description: Use this skill when you need to update specific UI elements on the Greta Shop page such as the hero, assistant, catalog cards, or cart bar while preserving the current style and behavior.
---

# GretaShopUIUpdates

Use this skill when the request is about changing a specific part of the page rather than redesigning the whole site.

## Scope
Apply this skill to updates involving:
- the hero header
- the shopping assistant steps and options
- catalog cards
- the cart bar and add-to-cart actions
- small section additions or content refreshes

## What to do
1. Identify the exact element the user wants to change.
2. Update the relevant HTML, CSS, and JavaScript together if behavior changes.
3. Keep the update consistent with the boutique, warm, playful design direction.
4. Preserve existing interactions and accessibility.
5. Keep the implementation lightweight and easy to maintain.

## Preferred approach
- Prefer small, focused edits over large rewrites.
- Reuse existing classes and structure where possible.
- Keep spacing, typography, colors, and button states consistent.
- Use Swedish copy and SEK pricing unless the user explicitly asks otherwise.

## File targets
- HTML changes: index.html
- Styling changes: src/css/style.css
- Interactive updates: src/js/app.js

## Example requests
- Update the hero section copy
- Make the catalog cards look more polished
- Improve the assistant buttons
- Add a clearer cart summary
- Refresh the recommendation cards
