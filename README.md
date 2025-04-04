<img width="1414" alt="beehive2" src="https://github.com/user-attachments/assets/cfff4c51-5b05-40f1-ad98-98265930f8af" />
<img width="1415" alt="beehive-1" src="https://github.com/user-attachments/assets/445e16e3-7400-4e38-8b77-1b0f17750a83" />

# beehive-dashboards

## Run

To run the project, use

```bash
$ npm install
$ npm start
```

### Run Storybook

You can edit the components of the projects using [Storybook](https://storybook.js.org/). To run Storybook, please use

```bash
npm run storybook
```

## Git Hooks

To setup local git hooks run the script `scripts/setup_git_hooks.sh`.
After running the script every git action for which a hook was created will
execute the hook at the set time.

### Installed Hooks

-   pre-commit - will execute before committing code and run lint to make sure
    source is pretty.

### Disable Hooks

To disable hooks permanently delete their files from `.git/hooks/` (eg.
`.git/hooks/pre-commit`). Commit hooks (and possibly others) can be disabled
a single time using:

```bash
$ git commit -n / --no-verify
```
