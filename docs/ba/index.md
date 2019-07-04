---
id: index
title: BattleArena
sidebar_label: Plugin Info
---

![BattleArena](https://wiki.battleplugins.org/images/6/62/BATTLEARENA.png "BattleArena")

# Latest Plugin Info

Bleeding Edge V: ![GitHub package.json version](https://img.shields.io/github/package-json/v/battleplugins/battlearena.svg?style=flat-square) ![GitHub release](https://img.shields.io/github/release/battleplugins/battlearena.svg?style=flat-square) Stable Build V: ![GitHub package.json version](https://img.shields.io/github/package-json/v/battleplugins/battlearena.svg?style=flat-square) ![GitHub release](https://img.shields.io/github/release/battleplugins/battlearena.svg?style=flat-square) Long Team Support Build V: ![GitHub package.json version](https://img.shields.io/github/package-json/v/battleplugins/battlearena.svg?style=flat-square) ![GitHub release](https://img.shields.io/github/release/battleplugins/battlearena.svg?style=flat-square)

BattleTracker V: ![GitHub package.json version](https://img.shields.io/github/package-json/v/battleplugins/battletracker.svg?style=flat-square) ![GitHub release](https://img.shields.io/github/release/battleplugins/battlearena.svg?style=flat-square)

**GitHub**: [GitHub Repo](https://github.com/battleplugins/battlearena) - ![GitHub stars](https://img.shields.io/github/stars/battleplugins/battlearena.svg?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/battleplugins/battlearena.svg?style=social) Dev Activity: ![GitHub last commit](https://img.shields.io/github/last-commit/battleplugins/battlearena.svg?style=flat-square) Issue Tracking: ![GitHub issues](https://img.shields.io/github/issues/battleplugins/battlearena.svg?style=flat-square)

Some of the most frequent questions can be found in the [FAQ](ba/faq.md) section.

## Getting Started

You can get the latest `jars` for BattleArena from:

-   [Stable Download - Spigot](https://www.spigotmc.org/resources/battle-arena.2164/)
-   [Stable Download - BukkitDev](https://dev.bukkit.org/projects/battlearena2)
-   [Bleeding Download - Jenkins Server](https://ci.battleplugins.org)

BattleArena is tested and runs on the latest `Spigot` and `PaperMC` builds. Please make sure you're running the latest builds before reporting any issues!

-   [PaperMC Server Jar](https://papermc.io/downloads) _`recommended`_
-   [Spigot Server Jar](https://www.spigotmc.org/wiki/spigot-installation)

## Features & Fame

BattleArena features a complete Event system for Minecraft.

-   Comes default with several Match and Event Types.
-   Huge amounts of customization through the configs and in game commands.
-   Framework and API for easily creating custom matches/events.
-   Support for custom arena types such as \[[Spleef]] and \[[CTF]].
-   ... and a whole lot more!

We've been featured in the following YouTube videos and reviews:

**Tutorial by LtJim007:**

[![ltjim007](https://img.youtube.com/vi/dR0tmySt5ac/0.jpg)](https://www.youtube.com/watch?v=dR0tmySt5ac)

**Tutorial by OGCraftVids:**

[![ogcraftvids](https://img.youtube.com/vi/m6E-q_w7tOM/0.jpg)](https://www.youtube.com/watch?v=m6E-q_w7tOM)

## Statistics

[![BattleArena Statistics](https://bstats.org/signatures/bukkit/BattleArena.svg)](https://bstats.org/plugin/bukkit/BattleArena)

## Read the Docs

Here are most popular doc pages to read right now:

1.  [Getting Started](ba/getting-started.md)
2.  [Creating your first Arena](ba/arenas/simple.md)
3.  [BattleArena FAQ](ba/faq.md)

## Add-On Plugins/Extensions

BattleArena comes with support for developers to create their own BattleArena addons. These extensions allow you to go beyond what is currently able to be done in the plugin and allows for even more awesome games! Here is a list of a few extensions:

**Official Extensions:**

-   ArenaSpleef
-   ArenaCTF
-   ArenaFutbol
-   ArenaParkour
-   ArenaPaintball
-   BombArena
-   HostageArena

**Unofficial Extensions:**

-   ArenaTOW
-   ArenaBattleRoyale
-   ArenaTowerRush

If you have an extension that you would like listed here, please \[[contact us]].

## Dependencies

These are all the dependencies that are currently built into BattleArena right now! We're always open for new suggestions or ideas, please reach out on [Discord](https://discord.gg/tMVPVJf) or [Github](https://github.com/BattlePlugins/BattleArena/issues/new)!

### Types

These are the three different levels of dependencies that are built into BattleArena:

-   _Soft Dependencies_: These are not required plugins, they'll hook into BattleArena if they're running compatible versions side by side to extend your experience.
-   _Rec Dependencies_: We strongly recommend running these along with BattleArena as they'll vastly expand BAs core features.
-   _Hard Dependencies_: You need to run these side by side with BattleArena. Thankfully, we don't have any of those and don't plan too!

### Dependencies

| Plugin Dependency                                                                                                         | Support Provided / Features                                                    | Type |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---- |
| [Heroes Legacy](https://www.spigotmc.org/resources/305/) / [Heroes Premium](https://www.spigotmc.org/resources/24734/)    | Class Integrations and Proper Inventory Storing / Restoring Support.           | Soft |
| [CombatTag](https://dev.bukkit.org/projects/combat-tag) / [CombatTagPlus](https://www.spigotmc.org/resources/4775/)       | Combat Tag support and customization support within Arenas.                    | Soft |
| [DisguiseCraft](https://dev.bukkit.org/projects/disguisecraft) / [LibsDisguises](https://www.spigotmc.org/resources/202/) | Disguise support and customization support within Arenas.                      | Soft |
| [MobArena](https://www.spigotmc.org/resources/34110/)                                                                     | MobArena detection and protection, both in MobArenas and BA Arenas.            | Soft |
| [Essentials](https://dev.bukkit.org/projects/essentials) / [EssentialsX](https://www.spigotmc.org/resources/9089/)        | God Mode (`/egod`) and `/back` command support within Arenas.                  | Soft |
| [VanishNoPacket](https://dev.bukkit.org/projects/vanish)                                                                  | "Unvanish after leaving an arena"                                              | Soft |
| [Vault](https://www.spigotmc.org/resources/34315/)                                                                        | Support for most popular economy plugins, provides money hook.                 | Soft |
| [Multiverse](https://dev.bukkit.org/projects/multiverse-core)                                                             | Multiworld support for Arenas.                                                 | Soft |
| [BattleTracker](https://www.spigotmc.org/resources/2165/)                                                                 | Sister plugin for stats and tracking in Arenas. Leaderboards and Sign support. | Rec  |
| [Herochat](https://dev.bukkit.org/projects/herochat) / [HeroChat Pro](https://www.spigotmc.org/resources/34305/)          | Support for Herochat chat and custom messaging.                                | Soft |
| [WorldEdit](https://dev.bukkit.org/projects/worldedit)                                                                    | Arena Regeneration, Terrain Control, and Region Selections support.            | Soft |
| [WorldGuard](https://dev.bukkit.org/projects/worldguard)                                                                  | Region Selection Support and Advanced Arena Region Flags intergration.         | Soft |
| [mcMMO Classic](https://www.spigotmc.org/resources/2445/) / [mcMMO Returns](https://www.spigotmc.org/resources/64348/)    | Support for skill force enabling / disabling in Arenas.                        | Soft |
| [VirtualPlayers](https://dev.bukkit.org/projects/virtualplayers2)                                                         | Support to use VirtualPlayers in Arenas for testing and experimentation!       | Soft |
| [NameTagEdit](https://www.spigotmc.org/resources/3836/)                                                                   | Update and Support for Custom and Colored Nametags within Arenas.              | Soft |
| _Example Plugin_                                                                                                          |                                                                                | Hard |

## Developer Info

If you're interested in contributing to BattleArena, please take a look at our [GitHub Page](https://github.com/BattlePlugins/BattleArena) for BattleArena. If you are interested in creating your own arena extensions, please take a look at the \[[Deveeloper API]] page.

## Project Lifetime

-   Project Creation:

-   Total Commits:

-   Total Contributors: ![GitHub contributors](https://img.shields.io/github/contributors/battleplugins/battlearena.svg?style=flat-square)

-   Commit Activity: ![GitHub commit activity](https://img.shields.io/github/commit-activity/y/battleplugins/battlearena.svg?style=flat-square)

-   Most Recent Commit: ![GitHub last commit](https://img.shields.io/github/last-commit/battleplugins/battlearena.svg?style=flat-square)