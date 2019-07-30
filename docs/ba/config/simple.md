---
id: config-simple
title: Edting the `config.yml` File
sidebar_label: Config (Simple)
---
## `config.yml`
The current default [Default Config](https://github.com/BattlePlugins/BattleArena/blob/master/src/java/config.yml)

## Reloading the config
Once you change a config option you will need to reload the config.  
* `/arena reload`

Or if you are changing the config of one of the plugins that uses BattleArena (like CTF, Spleef, or Paintball), reload the appropriate Config.
Spleef Example:
* `/spleef reload`

## Victory Conditions
Victory Conditions are the conditions under which a match will end. Currently these are the valid victory conditions
* LastManStanding: Match will end when there is only one team left (or player if teamSize: 1)
* nLives: Every player has a set number of lives. Match ends when only one team is left (or player if teamSize: 1)
* InfiniteLives: teams have infinite lives
* TimeLimit: Only use a time limit, or when not enough teams remain
* HighestKills: Players have infinite lives and the team with the highest kills wins

**NOTE:** If the `nLives` victory condition is being used, a new `nLives` line needs to be added below the victory condition with the amount of livesthat are needed.

Here is an Example:
```yml
  victoryCondition: nLives
  nLives: 3 # 3 lives for example
```

## Scheduled Event Options 

### Running events after a restart
There is a config option called `onServerStart: []`.  If you want to start running scheduled events continuously add the option `startContinuous`, if you just want to start the next event, put `startNext`.
Example:
```yaml
defaultOptions:
    onServerStart: [startContinuous]
```

## Message Options 

### Changing who gets match announcements
If you want to change the announcement settings for `all` matches/events then change the options found inside of `defaultOptions:`
Example:
```yaml
defaultOptions:
    announcements:
        onPreStart: [ dontannounce ]  
        onStart: [ dontannounce ]  
        onVictory:  [ dontannounce ] 
```

If you just want to change the announcement settings for one particular match type. then add the lines to the match type you want.
Example using skirmish
```yaml
skirmish:
    announcements:
        onPreStart: [ dontannounce ]  
        onStart: [ dontannounce ]  
        onVictory:  [ dontannounce ] 
```

### Changing who gets event announcements 
By default most event messages get announced to the server. If you want it to only be to people inside the event then change "announce" to "dontannounce".  If you have herochat or another vault based chat plugin you can change the channel of the messages by putting in "channel=&lt;channel>"
```yaml
    eventAnnouncements:
        onCountDownToEvent: [ announce, server ]  ## event is now open
        onOpen: [ announce, server ]  ## event is now open
        onStart: [ announce, server ]  ## event is starting
        onVictory:  [ announce, server ] ## event has been won
        onCancel:  [ announce, server ] ## event has been cancelled
```


## Team Options
=== Giving Teams Wool Heads ===
* add the option `woolTeams` in the option area where you want players to start having wool heads (usually when they first get teleported into the arena, the option `teleportIn`)
Example:
```yaml
### Skirmish 
skirmish:
    enabled: true
    onStart:
        options: [teleportIn, pvpOn, blockBreakOff, woolTeams]
```

* Additionally, using `alwaysWoolTeams` will force everyone to receive a wool head even if teams are 1v1.
### Changing the number of teams
* add the option `nTeams:` with the amount of teams to the base match/event type config
#### Example 1
only 2 teams will play
```yaml
skirmish:
    nTeams: 2
```

#### Example 2
Allow 3 teams or up to 5 teams play
```yaml
skirmish:
    nTeams: 3-5
```

#### Example 3
Allow 2 or more teams to play
```yaml
skirmish:
    nTeams: 2+
```

### Changing the number of players on each team 
* Add the option `teamSize:` with the team size to the base match/event type config
#### Example 1
Example to set 4 players per team:
```yaml
skirmish:
    teamSize: 4
```

#### Example 2
Example to set 2 through 5 players per team:
```yaml
skirmish:
    teamSize: 2-5
```

#### Example 3
Allow any number of players to join a team
```yaml
skirmish:
    teamSize: 1+
```

## Match & Event Options
### Changing the length of a match 
* Add the option `matchTime: &lt;x>` to specify how long you want the match to last ( add this option if it doesn't exist).  set to -1 if you want it to run forever until someone wins
#### Example 
```yaml
skirmish:
  times:
    matchTime: 240 ## <- match will now last 240 seconds
```

### Infinite Time Example 
```yaml
skirmish:
  times:
    matchTime: -1 ## <- match will now last until someone wins
```

### Giving money for winning/losing

#### Option 1:
* Add the option `money=&lt;amount>` into the `winner:` config section.  Create the section `winner:` if it doesn't exist.
* To give money to the losers, do the same but in the section `losers:`
##### Example:
```yaml
    winner:
        options: [money=100]
    losers:
        options: [money=5]
```

#### Option 2:
* Add Poolmoney=<percentage in decimal form> into `winner:` config section.  Create the section `winner:` if it doesn't exist.
* Valid percentages (decimal form): 0.0 (0%) - 1.0 (100%). (Basically take the percentage you want and move the decimal 2 places to the left. ex. .5 (50%), .25 (25%) .15 (15%) and so on.)
* Pool money allows you to pay the winner a percentage of the pot.
* For team based arenas this provides a way to dynamically adjust the winners pay out depending on how many entrants their are. More entrants. Bigger Payout. Fewer Entrants. Smaller Payout.
##### Example:
```yaml
    winner:
        options: [poolmoney=1.0]
```

### Giving items for winning/losing
* Create the section `winner:` if it doesn't exist.
* Add an `options:` node. The value is a yaml list, so [] is an empty list.
* Add the option: `giveItems`. This merely turns this option on.
* Add a node `items:` or `giveItems:` with a list of items to give.

#### Example:
```yaml
    winner:
        options: [giveItems]
        giveItems:
          - diamond: 1
          - gold_ingot: 1
    losers:
        options: [giveItems]
        items:
          - fish: 1
```

### Giving money for getting first place/participating in a tournament
* Add the option `money=&lt;amount>` into the `winner:` config section.  Create the section `firstPlace:` if it doesn't exist.
* To give money to the losers, do the same but in the section `losers:`
#### Example:
```yaml
    firstPlace:
        options: [money=100]
    participants:
        options: [money=5]
```

### Giving items for getting first place/ participating in a tournament
* Add the option `giveItems` into the `firstPlace:` config section.  Create the section `firstPlace:` if it doesn't exist.  After that you will need to list out your items: in a list below the options (see below example) 
* To give items to the losers, do the same but in the section `participants:`
#### Example:
```yaml
    firstPlace:
        options: [giveItems]
        items:
          - diamond: 1
          - gold_ingot: 1
    participants:
        options: [giveItems]
        items:
          - fish: 1
```

### Clearing Inventory on Death
* Add the option `clearInventory` into the `onDeath:` config section.  Create the section `onDeath:` if it doesn't exist.
#### Example:
```yaml
    onDeath:
        options: [clearInventory]
```

### Respawning on Death
* Add the option `respawn` or `randomRespawn` into the `onDeath:` config section.  Create the section `onDeath:` if it doesn't exist.
#### Example:
```yaml
    onDeath:
        options: [randomRespawn]
```
* You will also need to add/change the `victoryCondition` to `HighestKills` (otherwise it defaults to the last person alive wins).
#### Example:
```yaml
battleground:
    victoryCondition: highestKills
```


### Running commands
Add in a section called "doCommands" inside of the stage you want (probably onEnter).
The format is
* &lt;player or console> &lt;commands that you want to run>
The first player or console makes you run as the command as the operating console or as the player.

If in the commands the word "player" appears it will then be substituted with the player name.

For example.  Lets say alkarin_v is entering the arena, and the command is "- player fly stop player".  This will run the command "fly stop alkarin_v" as the player "alkarin_v"

```yaml
    onStart:
        doCommands:
            - player fly stop
            - console deop player
```


### Changing how a match is won (victoryCondition)
Add a configuration section `victoryCondition` to the match/event. 

Current Valid victoryConditions
* `lastManStanding`
* `highestKills`
* `nLives`
* `timeLimit` (Nobody will ever win)
* `noTeamsLeft` (All teams are dead)

#### Example:
```yaml
battleground:
    victoryCondition: highestKills
```

## Joining Options
### Limit arena joining to same world
Add the config option `sameWorld` to the preReqs: section (add it if it doesn't exit)

#### Example:
```yaml
battleground:
    preReqs:
        options: [sameWorld]
```

### Limit arena joining to within a certain distance of an arena 
Add the config option `withinDistance=&lt;distance>` to the preReqs: section (add it if it doesn't exit). Distance is based off of distance to spawn points.

#### Example:
```yaml
battleground:
    preReqs:
        options: [withinDistance=30] # limit joining to players within 30 blocks of the arena 
```

### Allow Players to join at any time
Add the config option `alwaysJoin` to the onJoin: section.

#### Example:
```yaml
battleground:
    onJoin:
        options: [alwaysJoin]
```

### Adding a price to join
* Add the option `money=&lt;amount>` into the `preReqs:` config section.  Create the section `preReqs:` if it doesn't exist.
#### Example:
```yaml
    preReqs:
        options: [money=100]
```

## Stages and Transitions

All stages and transitions can have `any` of the 'options'.

### Match Stages
A match is composed of different stages.

1. `onOpen`: For events this happens when you open the event. For matches when players get matched from the queue.
2. `onPrestart`: time between onOpen and onStart.
3. `onStart`: Match starts
4. `onVictory`: One player or team is victorious
5. `onComplete`: match was completed successfully
6. `onCancel`: match was cancelled
7. `onFinish`: happens after onComplete or onCancel

### Match Transitions 
During the match many different transitions can happen

1. `onSpawn`: Happens on teleport or on player Respawn ( if respawn is set within onDeath)
2. `onDeath`: What happens when a player dies
3. `onJoin`: player joining a match
4. `onEnter`: Happens when the player first enters the arena.  right after before they are teleported in.  
5. `onLeave`: Happens when the player leaves the arena(aka if they win(after onComplete), or if they die(and dont respawn) )
6. `losers`: Happens after onVictory, before onComplete, used for prizes
7. `winner`: Happens after onVictory, before onComplete, used for prizes
8. `drawers`: Happens after onVictory, before onComplete, used for prizes
9. `firstPlace`: Prizes for tournaments
10. `participants`: Prizes for tournaments
