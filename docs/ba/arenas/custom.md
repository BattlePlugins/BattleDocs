---
id: custom
title: Custom Arena Modes
sidebar_label: Custom Modes
---

# Creating Custom Arenas

You can create your own custom matches and events with separate names, commands, messages, and options. To do this you will have to make a new config file with the properties you will want. The important thing is that the name of the config file and the configuration section be named the same thing. For example if you have a SuperArenaConfig.yml, then the inside should look like. Notice the config name and the configuration section match.

## Example 1

Example creating a new Paintball match called SuperPaintball.

1. Copy the [ArenaPaintball/PaintballConfig.yml](https://github.com/BattlePlugins/ArenaPaintball/blob/master/PaintballConfig.yml) and make a new config file called ArenaPaintball/SuperPaintballConfig.yml
2. Now open up SuperPaintballConfig.yml and edit it to look like the following: 
```yaml configVersion: 2.0
SuperPaintball: 
  enabled: true 
  database: SuperPaintball # or delete if you dont want wins/losses/top, needs BattleTracker 
  arenaClass: Paintball ## needs to be Paintball, (giving this match the abilities of a normal paintball) 
  rated: true # if database is enabled 
  prefix: "&f[SuperPaintball]&e" 
  joinType: Queue 
  victoryCondition: LastManStanding 
  nTeams: 2+ 
  teamSize: 1 
  cmd: spb #what they will have to type to join in this case /spb join
### You can delete any stages/transitions that have no options
### for a list of options see wiki
defaults:
    options: []
preReqs: ## Prerequisites for joining
    options: []
onEnter:
    options: [storeAll]
onLeave:
    options: [restoreAll]
onJoin:  ## when they join the match
    options: []
onPreStart: ## x seconds before onStart
    options: []
onStart: ## Starting
    options: [teleportIn, pvpOn]
onSpawn: ## what happens when a player spawns
    options: [giveItems, hunger=20, health=20]
    items:
        - snowball: 128
onDeath: ## what happens when a player dies
    options: []
onComplete: ## what happens when things end
    options: [teleportOut, clearInventory]
winner: ## what to give the winner
    options: [health=20, hunger=20]
losers: ## what to give the losers
    options: []
```

The important lines are switching over places that have Paintball to SuperPaintball and adding the two lines, arenaType and arenaClass. 

`arenaType` specifies what type of arenas this new competition will use. If you specify spleef, it would use spleef arenas, if you specify battleground, it will use battleground arenas. Normally you will want to set this to whatever your custom competition is, in this case "SuperPaintball". 

`arenaClass` specifies what properties this competition will have. Paintball has the property of increasing snowball damage, so we want to use this. So we want to set it to `Paintball`.

### Example 2
Recreating the old event(JoinPhase) paintball, EPaintball
1\. Copy the [ArenaPaintball/PaintballConfig.yml](https://github.com/BattlePlugins/ArenaPaintball/blob/master/PaintballConfig.yml) and make a new config file called ArenaPaintball/EPaintballConfig.yml
2\. Now open up EPaintballConfig.yml and edit it to look like the following
```yaml
configVersion: 2.0

## This should be places in the plugin directory
## for more help configuring see the wiki
## https://github.com/alkarinv/BattleArena/wiki
## Change this file to customize your event

EPaintball:
    enabled: true
    command: epb
    arenaClass: Paintball ## needs to be Paintball, (giving this match the abilities of a normal paintball)
    database: ePaintball # or delete if you dont want wins/losses/top, needs BattleTracker
    prefix: "&a[ePaintball]&e"
    joinType: JoinPhase
    victoryCondition: LastManStanding
    nTeams: 2+
    teamSize: 1
    matchTime: 300
    preReqs:
        options: []
    onEnter:
        options: [storeAll]
    onLeave:
        options: [restoreAll]
    onJoin:
        options: [teleportIn, woolTeams, pvpOff]
    onPrestart:
        options: [pvpOff]
    onStart:
        options: [pvpOn]
    onComplete:
        options: [teleportOut]
    onDeath:
        options: [randomRespawn, clearInventory]
    onSpawn:
        options: [enchants, giveItems, health=20, hunger=20, deEnchant, invulnerable=2]
        items:
            - snow_ball: 128
    winner:
        options: [health=20, hunger=20]
    losers:
        options: [health=20, hunger=20]
````

The important lines are switching over places that have Paintball to SuperPaintball and adding the two lines, arenaType and arenaClass. 

`arenaType` specifies what type of arenas this new competition will use. If you specify spleef, it would use spleef arenas, if you specify battleground, it will use battleground arenas. Normally you will want to set this to whatever your custom competition is, in this case "SuperPaintball". 

`arenaClass` specifies what properties this competition will have. Paintball has the property of increasing snowball damage, so we want to use this. So we want to set it to `Paintball`.
