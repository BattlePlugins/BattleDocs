---
id: enchants
title: Enchantment Info
---

## Item Enchants

Valid formats are

- `<name>`
- `<name>:<power>`

### Example

- `- diamond_sword sharp:3 fire:2 1` ( give 1 diamond sword with sharpness 3 and fire 2)

## Enchant Table

Enchant ID | Plugin Abbr.          | Minecraft Name        | Bukkit API Class         | Max Level | Description
---------- | --------------------- | --------------------- | ------------------------ | --------- | -----------------------------------------------------------------------------
0          | prot                  | Protection            | PROTECTION_ENVIRONMENTAL | 4         | Reduces damage
1          | protfire              | Fire Protection       | PROTECTION_FIRE          | 4         | Reduces damage from fire
2          | protfall              | Feather Falling       | PROTECTION_FALL          | 4         | Reduces damage from falling
3          | protblast             | Blast Protection      | PROTECTION_EXPLOSIONS    | 4         | Reduces damage from explosions
4          | protproj or protarrow | Projectile Protection | PROTECTION_PROJECTILE    | 4         | Gives protection against projectiles
5          | respiration, oxygen   | Respiration           | OXYGEN                   | 3         | Decreases rate of air use when underwater
6          | aqua                  | Aqua Affinity         | WATER_WORKER             | 1         | Increase underwater mining speed
7          | thorns                | Thorns                | THORNS                   | 3         | Chance of attacker receiving damage
8          | strider               | Depth Strider         | DEPTH_STRIDER            | 3         | Increases underwater movement speed
9          | frost_walker          | Frost Walker          | FROST_WALKER             | 2         | Creates a frosted ice pathway when walking over water
10         | binding_curse         | Curse of Binding      | BINDING_CURSE            | 1         | Makes the item unable to be unequipped if in an armor slot
16         | sharp                 | Sharpness             | DAMAGE_ALL               | 5         | Gives extra damage to all targets
17         | smite                 | Smite                 | DAMAGE_UNDEAD            | 5         | Extra damage to undead targets
18         | arth                  | Bane of Arthropods    | DAMAGE_ARTHROPODS        | 5         | Extra damage to spiders and silverfish
19         | knockback             | Knockback             | KNOCKBACK                | 2         | Knocks back targets when hit
20         | fire                  | Fire Aspect           | FIRE_ASPECT              | 2         | Chance of setting fire to target
21         | loot                  | Looting               | LOOT_BONUS_MOBS          | 3         | Gives a chance for extra loot from mobs
22         | sweep                 | Sweeping Edge         | SWEEPING_EDGE            | 3         | Increases sweep attack damage
32         | eff                   | Efficiency            | DIG_SPEED                | 5         | Increase the speed at which you mine or dig
33         | silk                  | Silk Touch            | SILK_TOUCH               | 1         | Allows blocks to drop instead of fragments (ie: stone instead of cobblestone)
34         | unbreaking            | Unbreaking            | DURABILITY               | 3         | Increases item durability
35         | fortune               | Fortune               | LOOT_BONUS_BLOCKS        | 3         | Increases chance of extra drops from blocks
48         | power                 | Power                 | ARROW_DAMAGE             | 5         | Increases damage from arrows fired from bow
49         | punch                 | Punch                 | ARROW_KNOCKBACK          | 2         | Arrows knock back target
50         | flame                 | Flame                 | ARROW_FIRE               | 1         | Shoot flaming arrows
51         | inf                   | Infinity              | ARROW_INFINITE           | 1         | Gives infinite arrows when using a bow
61         | luck                  | Luck of the Sea       | LUCK                     | 3         | Increases luck when fishing
62         | lure                  | Lure                  | LURE                     | 3         | Increases the chance of catching fish
70         | mending               | Mending               | MENDING                  | 1         | Repairs items when xp is gathered
71         | vanishing_curse       | Curse of Vanishing    | VANISHING_CURSE          | 1         | Removes the enchanted item on death

## 1.13+ Enchants

These enchantments currently have no ID as they were added in 1.13+ which removed the usage of IDs. Due to how the enchantment system is built in BattleArena, there is still support for using enchantment IDs for the enchants that have them.

Plugin Abbr. | Minecraft Name | Bukkit API Class | Max Level | Description
------------ | -------------- | ---------------- | --------- | --------------------------------------------------------------------------------------
channeling   | Channeling     | CHANNELING       | 1         | Trident enchant that strikes lightning on impact
impaling     | Impaling       | IMPALING         | 5         | Adds damage to trident (equivalent of Sharpness for tridents)
loyalty      | Loyalty        | LOYALTY          | 3         | Returns trident to player when thrown
riptide      | Riptide        | RIPTIDE          | 3         | Turns the trident into a fast transportation device when in water or raining
multishot    | Multishot      | MULTISHOT        | 1         | Shoots 3 arrows on each shot from crossbows whilst only consuming 1 from the inventory
piercing     | Piercing       | PIERCING         | 4         | Allows arrows from crossbows to pierce through ''level +1'' entities when shot
quick_charge | Quick Charge   | QUICK_CHARGE     | 3         | Reduces reload time for crossbow
