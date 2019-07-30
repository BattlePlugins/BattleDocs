---
id: stage
title: Stage Settings & Options
sidebar_label: Stage
---

# Stage Options

## Valid Options

## Normal Options

Valid options for all stages (excluding preReqs):

- `clearInventory` : Clears the inventory of the player
- `giveItems` : Gives the player the specified items. Needs a list under items (See: [Item Syntax](item-syntax.md)).
- `teleportWaitroom` : Teleports a player into a waitroom
- `teleportIn` : Teleports a player into the arena
- `teleportOut` : Teleports a player out of the arena
- `teleportTo` : <world,x,y,z> : Teleport players to the given location (This is placed underneath options)
- `noTeleport` : Prevents users from teleporting
- `noWorldChange` : Prevents users from teleporting across worlds
- `health=<amount>` : Sets the health of the player (20 is max)
- `healthp=<amount>` : Sets the percentage health of a player (100 is max)
- `hunger=<amount>` : Sets the hunger of the player (20 is max)
- `money=<amount>` : Gives the player money
- `experience=<amount>` : Gives the player experience
- `pvpOn` : Sets PvP damage to be on (overrides most other plugins). Friendly fire is off
- `pvpOff` : Sets PvP damage to be off (overrides most other plugins). No damage between players permitted
- `invincible` : Makes players invincible
- `invulnerable=<time in seconds>` : Make players invulnerable for the given seconds
- `blockBreakOff` : Turns off block breaking
- `blockBreakOn` : Turns on block breaking (overrides most other plugins)
- `blockPlaceOff` : Turns off placing blocks
- `blockPlaceOn` : Turns on placing blocks (overrides most other plugins)
- `dropItemOf` : Disallows player to drop items
- `disguiseAll=disguise>` : Disguises all players with the given disguise
- `undisguise` : Undisguise players
- `enchants` : Needss a list of potion effects under enchants.  (See: [Potions](potions.md))
- `deEnchant` : Gets rid of all potion effects on player. If you have Heroes it will also remove heroes effects.
- `gameMode=<gamemode>` : Sets the gamemode of the player, (survival, creative, adventure, spectator)
- `doCommands` : Runs the specified commands as the console or player. Needs a list underneath called commands:
- `storeExperience/restoreExperience` : Stores/restores experience
- `storeItems/restoreItems` : Sstore/restores items
- `storeAll/restoreAll` : Stores/restore experience, items, health, hunger, magic, gamemode
- `flightOff` : Sets the players flight off
- `flightOn` : Sets the players flight on
- `flightSpeed=<speed>` : Set the players flight speed

## Defaults Options

Options that are only valid inside defaults:

- `alwaysOpen` : This game once started never ends (automatically sets alwaysJoin as well)
- `individualWins` : A player can win or lose separately and not end the game
- `armorTeams` : Use colored armor for teams
- `woolTeams` : if there is more than 1 player on a team, give them wool heads
- `alwaysWoolTeams` : always give the players wool heads
- `alwaysTeamNames` : always use the team names (like red/blue) as opposed to the player names

## Prerequisite Options

Options that are valid preReqs:

- `noInventory` : Players can not join or be teleported into the arena if they have items.
- `needArmor` : Players need to have armor to join or be teleported in
- `needItems` : Players will need items to join, needs a list under items:
- `money=<money>` : Charge money for players to join this type of match/event.
- `sameWorld` : Players will need to be in the same world as the arena to join
- `withinDistance=<distance>` : make players be within x blocks of the arena in order to join (based off of the arena spawnpoints)
- `levelRange=<range>` : Only allow players that have the specified levels to join.
  
**Level Range Example:**
- `levelRange=10+` : Only allow players that have 10 or more levels to join (Works with Heroes classes). 
- `levelRange=2-5` : Only allow players from levels 2 through 5 to join

## Example

An example that will save/restore a players inventory, charge them 10 money, and only allows players to join between levels 2 and 10.

```yaml
skirmish:
    preReqs:
        options: [money=10, levelRange=2-10]
    onEnter:
        options: [storeAll]
    onLeave:
        options: [restoreAll]
```

An example that will require players to bring in their own equipment that will charge them 10 money. They will also have to have at least a diamond sword and a bow with 16 arrows. They will take whatever they get from the loser.

```yaml
skirmish:
    preReqs:
        options: [money=10, levelRange=2-10, needItems]
        items:
            - diamond_sword: 1
            - bow: 1
            - arrow: 1
    onEnter:
        options: []
    onLeave:
        options: []
```
