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

There are lots of different ways to code, but the two things we will use to make our game our **events** and **handlers**

## On start

Our first event ``||loops:On Start||`` happens when our game starts

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

Select ``||sprites:Sprites||``

Then ``||variables: set mySprite to ||`` ``|| sprites: sprite [] of kind player||``

And move it under the ``||scene:set background image to []||``

Check the **hints** at the bottom by clicking on the bulb!

Click on the grey box

Then click **Gallery** again change the picture if you want to.

```blocks
scene.setBackgroundImage(img``)
let mySprite = sprites.create(img``, SpriteKind.Player)
```

## Wait nothing happens!

### Making our player move

To make our player move we need to add the code that controls the player.

Click ``||controller:Controller||``

Then select ``||controller: move mySprite with buttons +||``

```blocks
scene.setBackgroundImage(img``)
let mySprite = sprites.create(img``, SpriteKind.Player)
controller.moveSprite(mySprite)
```

## Hang on, where did my player go?

Player left the screen? Let's keep them trapped on the screen.

Click ``||sprites:Sprites||``

Then select ``||sprites: set ||`` ``||variables:mySprite||`` ``||sprites:stay in screen **on**||``

```blocks
scene.setBackgroundImage(img``)
let mySprite = sprites.create(img``, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
```

## Is this fun?

Now lets add some game play to our game.

Lets start by adding another **event**

Click on ``||game:Game||``

Then drag ``||game:on game update every 500ms||`` to an empty space on the screen.

Now change the value to 5 seconds

```blocks
game.onUpdateInterval(5000, function () {

})
```

## Catch

Click ``||sprites:Sprites||``

Then drag ``||variables:set projectile to||`` ``||sprites:projectile [] from side with vx 50 vy 50||``

Now click on the grey square and pick something to be your item to catch, may be something to eat.

Click ``||sprites:Sprites||``

Then drag ``||sprites:set||`` ``||variables:mySprite||`` ``||sprites:kind to Player||``

Now change **mySprite** to **projectile** and **Player** to **Food**

```blocks
let projectile: Sprite = null
game.onUpdateInterval(5000, function () {
	projectile = sprites.createProjectileFromSide(img``, 50, 50)
    projectile.setKind(SpriteKind.Food)
})
```

## How about some points?

Time for another **event**!

This time we want to do something when our player overlaps with our food.

Click ``||sprites:Sprites||``

Then drag ``||sprites:on||`` ``||variables:sprite||`` ``||sprites:of kind player overlaps||`` ``||variables:otherSprite||`` ``||sprites:of kind player||``

Change the second **Player** to **Food**

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {

})
```

## Now lets add the code for our handler

Click ``||info:Info||``

Then drag ``||info:change score by 1||`` into our new handler

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
})
```

## Something is not right but what?

Because our player and our food keep touching we keep getting points.

Click ``||sprites:Sprites||``

Then move ``||sprites:destroy||`` ``||variables:mySprite||`` under ``||info:change score by 1||``

Update the value **mySprite** to be **otherSprite** by dragging **otherSprite** ontop of **mySprite**

### Click the **+** and test out some options

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    otherSprite.destroy()
})
```


## This is a little easy....

Our item we want to catch is coming from the same direction everytime, so how can we not catch it.

How about we make it more random.

But what is Random?

## Random

Lets take a look at ``||game:on game update every||``

The two items set to **50** are what decide where and what direction the item moves in our game.

How about we change this.

Click ``||math:Math||``

Then move ``||math:pick random 0 to 10||`` over each of the 50s

Now changes **0** to **-50** and **10** to 50**

### Check out the lightbulb to make sure your on progress.

```blocks
let projectile: Sprite = null
game.onUpdateInterval(5000, function () {
	projectile = sprites.createProjectileFromSide(
        img``,
        randint(-50, 50),
        randint(-50, 50))
    projectile.setKind(SpriteKind.Food)
})
```