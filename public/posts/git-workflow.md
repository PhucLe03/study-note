# My Git Workflow

Notes on the Git commands and workflow I use daily.

## Basic Workflow

### Starting Work

```bash
# Update main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/new-feature
```

### Making Changes

```bash
# See what changed
git status
git diff

# Stage changes
git add .
# or selectively
git add -p

# Commit with message
git commit -m "feat: add new feature"
```

### Pushing Changes

```bash
# First push
git push -u origin feature/new-feature

# Subsequent pushes
git push
```

## Useful Commands

### Undo Changes

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Discard working changes
git checkout -- <file>
```

### Stashing

```bash
# Save work in progress
git stash

# List stashes
git stash list

# Apply stash
git stash pop

# Apply specific stash
git stash apply stash@{0}
```

### Branch Management

```bash
# List branches
git branch -a

# Delete local branch
git branch -d feature-name

# Delete remote branch
git push origin --delete feature-name

# Rename branch
git branch -m old-name new-name
```

### Syncing with Remote

```bash
# Fetch changes without merging
git fetch origin

# Pull with rebase
git pull --rebase origin main

# Update all branches
git fetch --all
```

## Advanced Techniques

### Interactive Rebase

Clean up commits before pushing:

```bash
git rebase -i HEAD~3
```

Options:
- `pick` - keep commit
- `reword` - change message
- `squash` - combine with previous
- `drop` - remove commit

### Cherry Pick

Apply specific commits:

```bash
git cherry-pick <commit-hash>
```

### Bisect

Find when bug was introduced:

```bash
git bisect start
git bisect bad
git bisect good <commit-hash>
# Git will checkout commits to test
git bisect good/bad
git bisect reset
```

## Commit Message Convention

Using conventional commits:

```
feat: new feature
fix: bug fix
docs: documentation
style: formatting
refactor: code restructuring
test: adding tests
chore: maintenance
```

## Gitignore Patterns

Common patterns I use:

```
# Dependencies
node_modules/
vendor/

# Environment
.env
.env.local

# Build
dist/
build/
*.log

# IDE
.vscode/
.idea/
*.swp
```

## Merge vs Rebase

**Merge**: Preserves history
```bash
git merge feature-branch
```

**Rebase**: Clean linear history
```bash
git rebase main
```

I use:
- Merge for main branches
- Rebase for feature branches

## Quick Tips

1. Commit early, commit often
2. Write clear commit messages
3. Pull before starting new work
4. Use branches for everything
5. Review changes before committing
6. Keep commits focused and atomic
