---
id: rooms
title: Arena Rooms & Waitrooms
sidebar_label: Rooms
---

# Waitrooms

An area where the player waits before a match or event starts.

## Adding Waitrooms

Many people like to have waitrooms for their games. To add a waitroom to the game you need to do the following.

- `<game> setOption onJoin teleportWaitRoom` Once this is done, you need to add at least one waitroom to each of your arenas.
- To add a waitroom to your arena, stand in the place you want it to be and type `/<game> alter <arena name> waitroom 1` You can choose to teleport the players in `onJoin` which will happen when they join the game, or `onPrestart` which will teleport them to the waitroom some seconds before the game starts. If you want to allow people to join through signs see [Sign Support](ba/signs.md).

## Example

Say you want to add a waitroom for the skirmish game, and you have a skirmish arena called SkArena

- `/skirmish setOption onJoin teleportWaitRoom`
- `/skirmish alter SkArena waitroom 1` : make sure you are standing where you want it to be
