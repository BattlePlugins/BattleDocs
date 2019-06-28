---
id: commands
title: VirtualPlayers Commands
sidebar_label: Commands
---

# VirtualPlayers Commands

All currently documented commands for VirtualPlayers.

## Player Commands

command                                                 | description
:------------------------------------------------------ | :---------------------------------------------------------------
`dc <virtual player>`                                   | any command you would normally do as a player
`dc <virtual player> op`                                | op virtual player
`dc <virtual player> deop`                              | deop virtual player
`dc <virtual player> respawn`                           | respawn the virtual player
`dc <virtual player> connect`                           | virtual player connects to the server
`dc <virtual player> disconnect`                        | virtual player disconnects from the server
`dc <virtual player> reconnect`                         | virtual player reconnects to the server
`dc <virtual player> health <amount>`                   | give the virtual player some health ( or kill them if 0 )
`dc <virtual player> inv`                               | print out their inventory
`dc <virtual player> giveinv <item>`                    | give them an item
`dc <virtual player> tp <location>`                     | teleport them to the given location ( "world,3,3,3" )
`dc <virtual player> chat my message`                   | have the virtual player talk in chat
`dc <virtual player> hit <player2> [damage]`            | attack other players, defaults to 5 damage
`dc <virtual player> interact <left, right> <location>` | do a PlayerInteractEvent on the specified block location
`/dc <virtual player> bpe <block> <location>`           | do a BlockPlaceEvent of the given material at the given location
`/dc <virtual player> bbe <location>`                   | do a BlockBreakEvent at the given location
`/dc <virtual player=""> pie</virtual>`                 | Trigger a PlayerPickupItemEvent

## Admin / Misc Commands

command                        | description
:----------------------------- | :-------------------------
`/virtualplayers hideMessages` | hide messages from players
`/virtualplayers showMessages` | show messages from players

## Example

- `dc p1 spawn`
- `dc p1 chat Hello Server!``
- `dc p1 bpe iron_block world,311,75,400` : Place an iron_block at `world,311,75,400`

Virtual Players will print out to the console if they teleport, speak, receive a message, respawn, connect/reconnect.
