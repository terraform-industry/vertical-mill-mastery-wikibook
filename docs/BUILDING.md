# Building the Book

This guide explains how to build and deploy the Vertical Mill Mastery Wiki
Book using MkDocs.

## Quick Start

### Using Nix (Recommended)

If you have Nix installed, simply run:

```bash
nix develop
mkdocs serve
```

This provides a complete, reproducible development environment with all
dependencies pre-configured.

### Using pip

For traditional Python environments:

```bash
pip install -r requirements.txt
mkdocs serve
```

## Development Commands

### Local Preview

Start the development server:

```bash
mkdocs serve
# or
make serve
```

Then open <http://localhost:8000> in your browser. Changes to markdown files
will automatically reload.

### Build Static Site

Generate the static HTML site:

```bash
mkdocs build
# or
make build
```

The generated site will be in the `site/` directory.

### Markdown Linting

Check markdown files for style compliance:

```bash
make lint        # Check for issues
make lint-fix    # Auto-fix issues
```

## Project Structure

```bash
vertical-mill-mastery-wikibook/
├── docs/                 # Source markdown files
│   ├── index.md         # Home page
│   ├── 01_*.md          # Chapter files
│   └── competency-test/ # Hidden test system
├── mkdocs.yml           # MkDocs configuration
├── flake.nix            # Nix development environment
├── requirements.txt     # Python dependencies
├── Makefile            # Build automation
└── .markdownlint.yml   # Markdown style rules
```

## Configuration

### Site Settings

Edit `mkdocs.yml` to modify:

- Site name and metadata
- Navigation structure
- Theme settings
- Plugin configuration

### Theme Customization

The site uses Material for MkDocs theme with:

- Light/dark mode toggle
- Search functionality
- Mobile-responsive design
- Table of contents integration

## Deployment

### GitHub Pages

The site can be automatically deployed to GitHub Pages:

```bash
mkdocs gh-deploy
```

This builds the site and pushes to the `gh-pages` branch.

### Manual Deployment

1. Build the static site: `mkdocs build`
2. Upload the `site/` directory to your web server
3. Configure your server to serve static files

## Development Environment

### Nix Flake

The `flake.nix` provides a reproducible environment with:

- Python 3.11
- MkDocs and Material theme
- All required markdown extensions
- Markdown linting tools
- Git hooks for quality checks

To enter the environment:

```bash
nix develop
```

### Dependencies

Core requirements (see `requirements.txt`):

- `mkdocs>=1.5.0`
- `mkdocs-material>=9.0.0`
- `pygments>=2.16.0`
- `pymdown-extensions>=10.0`
- `mdx-truly-sane-lists>=1.3`

## Quality Assurance

### Pre-commit Hooks

Git hooks automatically fix markdown issues on commit. Set up with:

```bash
git config core.hooksPath .githooks
```

### Testing

Before deploying:

1. Run `make lint` to check markdown
2. Build with `mkdocs build --strict`
3. Test all internal links
4. Verify navigation works
5. Check mobile responsiveness

## Troubleshooting

### Common Issues

**Port already in use:**

```bash
mkdocs serve -a localhost:8001
```

**Build warnings:**

Use strict mode to catch issues:

```bash
mkdocs build --strict
```

**Nix develop fails:**

Ensure Nix flakes are enabled:

```bash
nix develop --experimental-features 'nix-command flakes'
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on submitting changes.

---

_For additional help, open an issue on the GitHub repository._
