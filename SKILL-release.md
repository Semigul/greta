---
name: greta-shop-release
model: MAI-Code-1-Flash
description: Use this skill to publish the Greta Shop website by staging, committing, and pushing changes in one command.
---

# Greta Shop Release Skill

Use this skill when you want to release website updates in a single step.

## Purpose
This skill is for publishing the current static website changes to GitHub in one command. It should verify the local git state, create a commit if needed, and push to the configured remote branch.

## When to use
- You have finished edits in `index.html`, `src/css/style.css`, or `src/js/app.js`.
- You want to publish the current state to GitHub quickly.
- You want an easy release flow without manually typing multiple git commands.

## Instructions
- Check `git status` first.
- If there are no changes, explain that nothing needs to be released.
- If there are changes, stage them with `git add .`.
- Commit with a meaningful message, preferably in Swedish, e.g. `git commit -m "Uppdatera webbplatsen"`.
- Push to the remote branch, usually `main`.
- If the repo has a different branch or remote, mention it clearly.

## Quality bar
- Do not introduce unnecessary files or frameworks.
- Keep the release flow simple and safe.
- Always verify the git state before pushing.

## Example prompt
"Use the release skill to publish the current Greta Shop changes with one git commit and push."
