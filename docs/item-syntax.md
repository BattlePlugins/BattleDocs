---
id: item-syntax
title: Item Syntax
sidebar_label: Item Syntax
---

For yaml files that allow you to specify items. To add a new item you must add a new element to the list. Colors are RGB format with values from 0-255.
* `- itemName: [options] <quantity>`
Examples:
* `- diamond_sword: sharp:5 knockback:3 fire:1 lore="Uber Sword!" 1`
* `- leather_helm: lore="My Helm Keeps Me Safe" color=255,255,255 1`

## Options
* `color=<red>,<green>,<blue>`
* `lore="<line1>\n<line2>"`
* `displayName="<string>"`
* `owner="<string>"` (Only works for heads)
* `modelData="<custom model data>"` (Only works in 1.14+, see [Custom Items](https://minecraft.gamepedia.com/User:Aeldrion/Tutorials/Custom_items))
* `unbreakable="<true/false>"`
* `effects="<effect 1> <effect 2> <effect...x>"` (See [potions](potions.md))
* [Valid Item Enchantments](enchants.md)

## Config Example
Inserting an item with giveClass inside of the Game configs. In this example it's being done onSpawn, but it can be done anywhere.
```yaml
Skirmish:
    onSpawn:
        giveItems:
        - gold_ingot: 2
        - leather_boots: color=0,0,0 displayName="StealthShoes" lore="Ancient Elven boots\nMade by Legolas Greenleaf" 1
```
As you can see, you can have multiple lines of lore using the new-line character to separate each line.

In the above example, line1 is
```yaml
Ancient Elven boots
```

And line2 is
```yaml
Made by Legolas Greenleaf
```
