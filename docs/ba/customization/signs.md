---
id: signs
title: Signs
sidebar_label: Signs
---

# Creating Signs to Join Competitions

You can create signs for Joining and Leaving competitions. To do it you simply write the name of the competition in the first line, then on the second line add what command you would like to do, like join/leave, and on the third line you put the arena name. You will know you did the sign correctly because it will change to colored text.

## Creating Signs

Inside of the BattleArena files, there is a yml file known as [signs.yml](https://github.com/BattlePlugins/BattleArena/blob/master/default_files/signs.yml). In here, you are able to customize most everything visible on the sign.

In order to create a sign, you must specify the lines below in the exact order or else it may not work properly. Once you type this in and press done, the sign will update accordingly to your signs.yml templates.

```
Line 1: [ArenaType]
Line 2: join/leave
Line 3: ArenaName TeamColor (optional)
Line 4: Nothing Here (optional)
```

You may also notice an option in the signs.yml called `blockAttatchment`. This is used for setting the block behind the sign. This can be used if you want to assign a color to the current state of the game. However if you don't want to use this feature, just set it to `none`.

Here is an example image:

![Example Sign Usage](https://i.imgur.com/Hs6CTSk.png)

## Example 1

To make a sign to join Spleef in the arena called "NetherFort" you simply put the following into the sign:

```yml
[spleef]
join
NetherFort
```

And the outcome will be (Note: you don't put anything on the fourth line!): [[File:Sign_-_Simple_1.png|center]]

## Example 2

```yml
[Skirmish]
join
Arena1
```

## Example 3

To make a sign to join BattleGround (note: for a shorter version, BattleGround is also called 'bg') in the arena called "Battle1" you simply put the following into the sign:

```yml
[bg]
join
Battle1
```

# Creating signs to Leave

## Example 1

To make a sign to leave a battleground. The word "bg" goes on the first line, the word "leave" goes on the second line. We can write out the word battleground, but its long, so instead lets use it's command `bg`

```yml
[bg]
leave
```

# Creating signs to join a specific team

It is possible to set up the signs to join a specific team for the game. By using the signs to select the team, the team selection is not always guaranteed, it also relies on the data from the BattleTracker in order to make the teams evenly strong. To create such sign you have to simply follow the basics rule of creating the sign to join, with the addition to the 3rd row. In the first row you put in the name of the competition, in the second line you put 'join' and in the third line you put the name of the arena and after a space you put in the name of the team.

## Example 1

To make a sign to join BattleGround (note: for a shorter version, BattleGround is also called 'bg') in the arena called "Battle3" and in order to join the team "red" you simply put the following into the sign:

```yml
[bg]
join
Battle3 red
```

## Example 2

To make a sign to join BattleGround (note: for a shorter version, BattleGround is also called 'bg') in the arena called "Battle3" and in order to join the team "blue" you simply put the following into the sign:

```yml
[bg]
join
Battle3 blue
```

## Example 3

You can create as many signs and teams as you want. The following example is for the competition of BattleGround set up by the server of DreadCraft. They have a simple join signs on the front of the board, and in the back they have the specific join signs for the teams.
![Dreadcraft Sign Example](https://wiki.battleplugins.org/images/4/41/Sign_-_Teams.png)
