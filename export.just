# Lint all files
[no-cd]
lint *args:
    eslint --max-warnings=0 . {{args}}

lint-fix:
    just lint --fix
