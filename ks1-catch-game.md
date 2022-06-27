# Gaming Making for KS1

## Game making with Microsoft MakeCode @showdialog

We are going to be building a computer game! So lets be:

- Curious
- Confident
- Creative
- Caring
- Proud of our work

So lets get coding

Check the **hints** by clicking on the bulb at the bottom!

## What is coding

There are lots of different ways to code, but the two things we will use to make our game today are **events** and **handlers**

**Discussion**

What are these?

Talk them through with your teacher.

## On start

Our first event ``||loops:On Start||`` which happens when our game starts.

**Discussion**

What might we want to do when the game starts?

## The first thing to handle!

Setting up our game.

- Creating our level
- Adding a player
- Adding controls

## Adding a background

Select ``||scene:Scene||``

Then drag ``||scene:set background image to []||`` inside the ``||loops:on start||`` block.

Now we can create our background. So click the little grey box.

Click **Gallery** and pick a picture, even take a few minutes to change it!

```blocks
scene.setBackgroundImage(img``)
```

## Adding our player

Select ``||characters:Characters||``

Then ``||characters: create player []||``

And move it under the ``||scene:set background image to []||``

Click on the grey box

Then click **Gallery** again and change the picture if you want to.

```blocks
scene.setBackgroundImage(img``)
characters.createPlayer(img``)
```
### Controlling our player

To make our player move we need to add the code that controls the player.

Click ``||controller:Controller||``

Then select ``||controller: move player with controls||``

```blocks
scene.setBackgroundImage(img``)
characters.createPlayer(img``)
controller.movePlayer()
```

## Lets play!

Click on the game console icon on the top left and try your game out!

**Discussion**

Is this fun?

What else does it need?

## Now lets add some game play.

Lets start by adding another **event**

Click on ``||events:Events||``

Then drag ``||events: every (5) seconds||`` to an empty space on the screen.

**Discussion**

What happens if you change the number?

Could this help make it harder or easier? Or even impossible!

```blocks
events.everyNSeconds(5, function () {

})
```

## Lets play catch

Click ``||characters:Characters||``

Then drag ``||characters: create [] which is Nice||`` inside our latest event.

Click on the grey square and pick something to be your item to catch, maybe something to eat.

**Discussion**

What happens if you change the number of seconds?

Could this help make it harder or easier? Or even impossible!

## Lets make it a little harder

Lets add another character to our event, but this time make it bad.

This will be an item we won't want to catch!

**Discussion**

What might happen when we catch this item?

Remember to check the hints if you are unsure about your code.

```blocks
events.everyNSeconds(5, function () {
    characters.createMovingItem(img``, MovingItemType.Nice)
    characters.createMovingItem(img``, MovingItemType.Bad)
})
```

## Scoring points

Time for another **event**!

This time we want to do something when our player catches a nice item.

Click ``||events:Events||``

Then drag ``||events: when player catches Nice item||``

**Discussion**

When is this event happening?

Can you explain when it would happen?

```blocks
events.whenPlayerCatchesItem(MovingItemType.Nice, function () {

})
```

## Now lets add the code for our handler

Click ``||info:Info||``

Then drag ``||info:change score by 1||`` into our new handler

```blocks
events.whenPlayerCatchesItem(MovingItemType.Nice, function () {
	info.changeScoreBy(1)
})
```

## What about the bad item?

Try doing to last two steps again for our bad item.

But this time instead of adding points, take away a life.

Remember you can always look at the **hints** if you need help

```blocks
events.whenPlayerCatchesItem(MovingItemType.Bad, function () {
	info.changeLifeBy(-1)
})
```

## How about some music?

Start by clicking on ``||loops:Loops||``

Then drag ``||loops:forever||``

What might this do?

Now click on ``||music:Music||``

And move ``||music:play melody () at tempo 120 (bpm)||`` into the new loop

Try changing the values and see what happens?

```blocks
forever(function () {
    music.playMelody("- - - - - - - - ", 120)
})
```

## Lets add some sound effects

Now lets add some sound effects when our player catches an item.

Click on ``||music:Music||``

And move ``||music:play melody () at tempo 120 (bpm)||`` into ``||events:when player catches Nice item||``

Try making your own melody to make a happy sound.

No do the same for when you catch a bad item.

## Congratulations

You have built your very own game!

Click **Done** and go through the steps to save your game for later!

You will now have access to all of the coding options, have an explore and see what else you can do!

**Discussion**

What did you learn?

- What is an event?
- What is a handler?

Where you
- Curious
- Confident
- Creative
- Caring
- A good craftsman

