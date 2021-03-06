---
id: regions
title: Arena Regions
sidebar_label: Arena Regions
---

# Adding regions with WorldGuard

## Adding a worldGuard region to your arena

- First, use your //wand to select an area, then
- `/arena alter <arena name> addregion`

# Adding different options to your arena

- Open up your config.yml
- Add in the worldguard options to any stages you would like them in
- Reload the config `/arena reload` (if you are using an addon plugin like spleef `/spleef reload`) Example: Say you want to make it so that items on the floor are cleared when a match is complete. While they are fighting you want to make them not be able to run away. Let's edit the skirmish to make this happen. This is what the config looks like before:

  ```yaml
  ### Skirmish
  skirmish:
    enabled: true
    type: versus
    onStart:
        options: [teleportIn, pvpOn]
    onComplete:
        options: [teleportOut]
    winner:
        options: [health=20, hunger=20]
  ```

   After changing, adding in `wgNoLeave` and `wgClearRegion`

  ```yaml
  ### Skirmish
  skirmish:
    enabled: true
    type: versus
    onStart:
        options: [teleportIn, pvpOn, wgNoLeave]
    onComplete:
        options: [teleportOut]
    onFinish:
        options: [wgClearRegion]
    winner:
        options: [health=20, hunger=20]
  ```

# Resetting an arena

You can now reset an arena back to the state it was at when you first typed `/arena alter <arena name> addRegion`. To do this you simply add `wgResetRegion` to whichever stage you would like. You can add the stage if it doesn't exist (just make sure it lines up appropriately with other stages! Yaml Files are very finicky!) Steps:

## Open up your config.yml

1. Add in the worldguard option `wgResetRegion` Example: Where the map is reset both when the match is opened, and when it is finished.

  ```yaml
  ### Skirmish
  skirmish:
   onOpen:
       options: [wgResetRegion]
   onComplete:
       options: [teleportOut]
   onFinish:
       options: [wgResetRegion]
  ```

## Valid Options

More options will be added as requested

- `wgClearRegion` : clears the region of any items
- `wgNoLeave` : players in the arena can't leave the region
- `wgNoEnter` : players cant enter the arena region (except for fighting players)
- `wgResetRegion` : resets the region to the way it was when you added it via `/arena alter addRegion`.
