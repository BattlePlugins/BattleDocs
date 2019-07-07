---
id: classes
title: Arena Classes & Options
sidebar_label: Classes
---

# Classes

## Creating new classes

Just add another class underneath `classes:` inside of the `classes.yml` in the BattleArena folder.

items and enchant sections are both optional.

Players will still need permissions to use see [[BattleArena/Permissions#Class_Signs|Class Perms]]

### Example

```yaml
classes:
    myNewClassName:
        items:
            - diamond_chest: 1
            - diamond_sword: sharp:2 knockback:1 1
            - bread: 3
        enchants:
            - speed:2
```

### Charging money for classes

This feature will have to be added: As a temporary solution, use the doCommands section.

```yaml
classes:
    myNewClassName:
        items:
            - diamond_chest: 1
            - diamond_sword: sharp:2 knockback:1 1
            - bread: 3
        enchants:
            - speed:2
        doCommands:
            - console money take player 100
```

Just substitute `money take` with the equivalent command of your economy plugin.

### Default Classes

- Gladiator
- Archer
- Monk

### Adding a Class Sign

This allows players to click on a sign and receive a class. This only works for players inside an arena so there is no fear of players getting classes in the world.

To create a class sign simply add a sign with the first line as the name of the class.

### Example

line1: `Gladiator`

This should create a sign with line1: `* Gladiator`

Only players inside a match will be able to use this sign.

## Giving people default classes inside of a match/event

Chooses which stage/transition they should get the class in, onSpawn is usually a good place. Then put in the field `giveClass` underneath `options:` inside of the `config.yml` in the BattleArena folder.

### Example

```yaml
    onSpawn:
        options: []
        giveClass:
            default: gladiator
```

## Giving different teams different classes

Say you wanted team1 to be all gladiators, team2 to be all archers, and any other team to be monks. under `giveClass`. put `team1: gladiator`, `team2: archer`, and `default: monk`

### Example

```yaml
    onSpawn:
        options: []
        giveClass:
            team1: gladiator
            team2: archer
            default: monk
```

## Using Heroes classes

To use heroes as classes you will first need to add the items and enchants you want to give for each Heroes class into the [BattleArena/classes.yml](https://github.com/BattlePlugins/BattleArena/blob/master/default_files/classes.yml).

Once you have created your classes you can specify them like normal through the giveClass.

### Example

```yaml
    onSpawn:
        options: []
        giveClass:
            default: Warrior
```

There is also a new class used only used for Heroes `chosenClass` which will allow players to receive the items configured in the BattleArena/classes.yml for their already chosen class.

### Example

```yaml
    onSpawn:
        options: []
        giveClass:
            default: chosenClass
```
