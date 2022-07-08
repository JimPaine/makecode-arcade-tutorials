# MakeCode Arcade - Catch Game (6 - 8 year olds)

## How about some music?

Start by clicking on ``||loops:Loops||``

Then drag ``||loops:forever||``

Now click on ``||music:Music||``

And move ``||music:play melody () at tempo 120 (bpm)||`` into the new loop

**Discussion**

What might a forever loop do?

Try changing the values on the melody what is happening?

```blocks
forever(function () {
    music.playMelody("- - - - - - - - ", 120)
})
```

## Lets add some sound effects

Now lets add some sound effects when our player catches an item.

Click on ``||music:Music||``

And move ``||music:play sound||`` into ``||events:when player catches Nice item||``

Pick a sound that sounds happy!

Now do the same for when you catch a bad item.

```blocks
music.playSound(melody) {

}
```

## Congratulations

You have built your very own game!

Click **Done** and go through the steps to save your game for later!

You will now have access to all of the coding options, have an explore and see what else you can do!

**Discussion**

What did you learn?

- What is an event?
- What is a handler?