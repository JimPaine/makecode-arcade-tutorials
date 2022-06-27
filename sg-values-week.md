# SG Values Week

## Welcome to Spring Grove Values week! @showdialog

We are going to be building a computer game! So lets be:

- Curious
- Confident
- Creative
- Caring
- Proud of our work

So lets get coding

## What is coding

There are lots of different ways to code, but the two things we will use to make our game today are **events** and **handlers**

## On start

Our first event ``||loops:On Start||`` is an **event** that happens when our game starts

## The first thing to handle!

The look and feel of our game

### Adding a background

Select ``||scene:Scene||``

Then drag ``||scene:set background image to []||`` inside the ``||loops:on start||`` block.

Now we can create our background. So click the little grey box.

Click **Gallery** and pick a picture, even take a few minutes to change it!

```blocks
scene.setBackgroundImage(img``)
```

## Lots more things to handle!

Select ``||characters:Characters||``

Then ``||characters: create player []``

And move it under the ``||scene:set background image to []||``

Check the **hints** at the bottom by clicking on the bulb!

Click on the grey box

Then click **Gallery** again and change the picture if you want to.

```blocks
scene.setBackgroundImage(img``)
characters.createPlayer(img``)
```

## Wait nothing happens!

### Making our player move

To make our player move we need to add the code that controls the player.

Click ``||controller:Controller||``

Then select ``||controller: move player with controls||``

```blocks
scene.setBackgroundImage(img``)
characters.createPlayer(img``)
controller.movePlayer()
```

## Is this fun?

Now lets add some game play to our game.

Lets start by adding another **event**

Click on ``||events:Events||``

Then drag ``||events: every (5) seconds||`` to an empty space on the screen.

**Don't** change the value just yet, we will look at this later!

```blocks
events.everyNSeconds(5, function () {

})
```

## Lets play catch

### Nice

Click ``||characters:Characters||``

Then drag ``||characters: create [] which is Nice||`` inside our latest event.

Click on the grey square and pick something to be your item to catch, maybe something to eat.

### Not nice

Click ``||characters:Characters||``

Then drag ``||characters: create [] which is Nice||`` under our previous step.

Now change **Nice** to **Bad**

This will be an item we won't want to catch!

```blocks
events.everyNSeconds(5, function () {
    characters.createMovingItem(img``, MovingItemType.Nice)
    characters.createMovingItem(img``, MovingItemType.Bad)
})
```

## How about some points?

Time for another **event**!

This time we want to do something when our player catches a nice item.

Click ``||events:Events||``

Then drag ``||events: when player catches Nice item||``

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