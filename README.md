# Teffaform Industries Vertical Mill Mastery Wiki Book

[![Deploy MkDocs][deploy-badge]][deploy-url]
[![Markdown Lint][lint-badge]][lint-url]

A comprehensive, open-source guide to vertical milling machine operation, from
fundamental concepts through advanced techniques.

## 📖 Read the Book

Visit the full documentation at:
**<https://terraform-industry.github.io/vertical-mill-mastery-wikibook/>**

## 🎯 Purpose

This wiki bridges the knowledge gap between traditional machinist wisdom and
modern documentation practices. By capturing shop floor expertise in an
accessible, searchable format, we ensure critical milling knowledge remains
available to future generations.

## 📚 Contents

The book covers 15 comprehensive chapters:

- **Fundamentals**: Machine basics, setup, and first operations
- **Basic Operations**: Milling techniques, stock preparation, and layout
- **Precision Techniques**: Feature location, cutting fluids, and measurement
- **Projects**: Hands-on T-nut making project
- **Advanced Topics**: DRO systems, fixturing, slotting, threading, and boring

## 🛠️ Development

This project uses [MkDocs](https://www.mkdocs.org/) with the
[Material theme](https://squidfunk.github.io/mkdocs-material/).

### Quick Start

Using Nix (recommended):

```sh
nix develop
mkdocs serve
```

Using pip:

```sh
pip install -r requirements.txt
mkdocs serve
```

Then visit <http://localhost:8000>

### Build Commands

```sh
make serve      # Start development server
make build      # Build static site
make lint       # Check markdown formatting
make lint-fix   # Auto-fix markdown issues
```

## 🤝 Contributing

We welcome contributions that improve clarity, accuracy, or completeness.
See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

Types of contributions needed:

- Technical corrections and clarifications
- Additional safety warnings
- Practical examples and projects
- Troubleshooting guides
- Advanced techniques

## 📄 License

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

You are free to:

- **Share** — copy and redistribute in any medium or format
- **Adapt** — remix, transform, and build upon the material

Under the terms of attribution and share-alike.

## 👥 Author

**Johanness A. Nilsson** - <Jo@terraformindustries.com>

## 🙏 Acknowledgments

Special thanks to the machinists and makers whose collective wisdom forms the
foundation of this work. See [AUTHORS.md](docs/AUTHORS.md) for full
acknowledgments.

---

_"In the machine shop, as in life, we stand on the shoulders of those who
came before us. This wiki ensures their knowledge lives on."_

[deploy-badge]: https://github.com/terraform-industry/vertical-mill-mastery-wikibook/actions/workflows/deploy-docs.yml/badge.svg
[deploy-url]: https://github.com/terraform-industry/vertical-mill-mastery-wikibook/actions/workflows/deploy-docs.yml
[lint-badge]: https://github.com/terraform-industry/vertical-mill-mastery-wikibook/actions/workflows/markdown-lint.yml/badge.svg
[lint-url]: https://github.com/terraform-industry/vertical-mill-mastery-wikibook/actions/workflows/markdown-lint.yml
[cc-by-sa]: https://creativecommons.org/licenses/by-sa/4.0/
