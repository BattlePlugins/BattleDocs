---
id: creating-advanced
title: Creating Advanced Arenas
sidebar_label: Creating (Advanced)
---

# Creating Different Type Arenas

There are many different [types](ba/arenas/types.md) of arenas and they all behave uniquely out of the box, however they can be further edited through the config to act even more individually.

You can create any of the base BattleArena arenas like: `arena`, `skirmish`, `battleground`, `coliseum`, `freeforall`, and `deathmatch`.

You can also install BattleArena extension plugins to add additional gamemodes and features like `spleef`, `paintball`, `capture the flag`, `parkour`, and more!

To create different types of arena's, refer to above guide on **Creating a Basic Arena** and check the below examples:

## Creating an Arena for a BG `battleground` Custom Arena

1. In this tutorial we are creating a BattleGround arena, this means we'll use the `/bg` command alias to create the arena. By default a battleground match has 4 people fighting it out, so we should add at least 4 spawns.
2. Stand at the location where you want the `myBGArena` **first spawn location** to be and:
3. Type: `/arena create myBGArena` (creates arena called `myBGArena` and sets 1st spawn).

> I. Stand at the location where you want the `myBGArena` **next spawn location** to be and:

> II. Type: `/arena alter myBGArena 2` (creates the `2` spawn for arena `myBGArena`).

1. Repeat `I` & `II` replacing #`2` until you've set all `4` needed spawn points.
2. Make sure players have the correct permission to join. Permission needed is: `arena.bg.join`
3. Type: `/bg join`.
4. Have 3 other players also type `/bg join`.

_Optionally you can configure join-phases, waiting rooms, equipment, rewards, and more using `Customization` section of the sidebar!_

After this all players will be transported in where the person with the most kills at the end of 1 minute wins.

## Creating an Arena for a FFA `free-for-all` Custom Arena

1. In this tutorial we are creating a Free-For-All Arena, this means we'll use the `/ffa` command alias to create the arena. By default a Free-For-All usually has many players fighting, so we're going to add a bunch of spawn points.
2. Stand at the location where you want the `myFFA` **first spawn location** to be and:
3. Type: `/ffa create myFFA` (creates arena called `myFFA` and sets 1st spawn).

> I. Stand at the location where you want the `myFFA` **next spawn location** to be and:

> II. Type: `/ffa alter myFFA 2` (creates the `2` spawn for arena `myFFA`).

1. Repeat `I` & `II` replacing #`2` until you've set all `4` needed spawn points.
2. Make sure players have the correct permission to join. Permission needed is: `arena.ffa.join`
3. Type: `/ffa join`.
4. Have a bunch other players also type `/ffa join`.

_Optionally you can configure join-phases, waiting rooms, equipment, rewards, and more using `Customization` section of the sidebar!_
