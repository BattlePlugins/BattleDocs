---
id: templates
title: Wiki Templates Page
sidebar_label: Templates
---

# Templates

These are the current templates:

## New Arena Plugin Template

This template is to be used for creating new Arena plugins using the currently established format.

Examples of this template in use are:

- (ArenaSpleef)[ext/ArenaSpleef/index.md]

### Using Template

Copy `/ext/Template` to `/ext/ArenaPlugin` replacing ArenaPlugin with the name of your Arena plugin.

Edit `id`. `title`, and `sidebar_label` as you see fit. Update other MD files as well.

To add plugin to the doc menu sidebar, see `/website/sidebar.json` and update accordingly.

### Template Layout

```
Template Directory
├── index.md
├── commands.md
├── permissions.md
└── changelog.md
```
