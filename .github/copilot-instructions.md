# Copilot instructions for this repository

Purpose: Educational Node.js repository with minimal example scripts (`index.js`, `intro.js`). Includes a `package.json` for npm script management. Use these instructions to make targeted edits, add simple tooling, or refactor to modules.

Quick facts
- **Primary files:** `index.js` (minimal "Hello, world!"), `intro.js` (console experiments, incomplete code blocks)
- **Package management:** `package.json` exists but `start` script references non-existent `server.js`
- **Run locally:** in PowerShell at repo root use `node .\\index.js` or `node .\\intro.js`
- **Current state:** `intro.js` contains incomplete/experimental code with syntax errors (`nodule.exports` typo, orphaned function blocks)

What an AI coding agent should know
- This repo is educational/sample code — prefer small, reversible changes and add files rather than large destructive refactors
- Typical tasks: fix syntax errors, improve naming, extract/complete code blocks, update `package.json` scripts, or scaffold a basic test runner
- Keep changes explicit: include the target file path and a short description of the intent
- **Critical code issues to be aware of:**
  - `intro.js` line ~26: `nodule.exports` should be `module.exports` (typo — likely incomplete)
  - `intro.js` has orphaned code blocks (e.g., `if (typeof a !== 'number'...)`) that aren't part of any function
  - Unused variables: `IsAlive`, `colors` in `intro.js`

Examples of specific, high-value edits
- "Fix `intro.js`: correct `nodule.exports` → `module.exports` and remove orphaned code blocks."
- "Refactor `intro.js` to export the `greet` function as a CommonJS module and create `run.js` to import and call it."
- "Update `package.json` `start` script: change `server.js` to `index.js` and verify it runs without errors."
- "Normalize variable naming in `intro.js` to camelCase (`IsAlive` → `isAlive`) and remove unused variables."

Commands the agent may suggest or run (Windows PowerShell)
- Run a script: `node .\\index.js`
- Initialize npm (if adding tooling): `npm init -y`
- Add Jest for tests (optional): `npm install --save-dev jest` then add a `test` script.

Code patterns & conventions found here
- Files are top-level scripts using `const` and function declarations; minimal module system usage.
- Prefer non-breaking, incremental edits (add new files instead of rewriting existing ones) because this repo appears to be a learning/demo workspace.
- Note small style inconsistency visible in `intro.js`: `IsAlive` is PascalCase while other variables use camelCase.

When creating new files
- Add descriptive file names at repo root (e.g., `run.js`, `greet.js`, `package.json`).
- If you add tooling (linters, test frameworks), include minimal configuration and update README.md with run/test instructions.

Prompt guidance for humans working with the agent
- Be specific: name the file, the exact change, and desired outcome (behavior-preserving vs. behavior-changing).
- Ask for small PR-style patches rather than large open-ended refactors.

If `.github/copilot-instructions.md` already exists
- Merge by preserving any repository-specific notes; the authoritative source is the human maintainer — prefer non-destructive edits.
