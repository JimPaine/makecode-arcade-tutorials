# MakeCode Arcade - Catch Game (6 - 8 year olds)

## Adding our player

Select ``||characters:Characters||``

Then ``||characters: create player []||``

And move it under the ``||scene:set background image to []||``

Click on the grey box

Then click **Gallery** again and change the picture if you want to.

Filling like a challenge? Try the animated version by clicking the ➕

```blocks
scene.setBackgroundImage(img``)
// @highlight
characters.createPlayer(img``)
```
## Controlling our player

To make our player move we need to add the code that controls the player.

Click ``||controller:Controller||``

Then select ``||controller: move player with controls||``

```blocks
scene.setBackgroundImage(img``)
characters.createPlayer(img``)
// @highlight
controller.movePlayer()
```

## Lets play!

Click on the game console icon on the top left and try your game out!

**Discussion**

Is this fun?

What else does it need?

```
Nothing to catch?
A game needs an objective
Something to do
```