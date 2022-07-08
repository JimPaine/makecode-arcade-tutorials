# MakeCode Arcade - Catch Game (6 - 8 year olds)

## Now lets add some game play.

Lets start by adding another **event**

Click on ``||events:Events||``

Then drag ``||events: every (5) seconds||`` to an empty space on the screen.

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

```blocks
events.everyNSeconds(5, function () {
    // @highlight
    characters.createMovingItem(img``, MovingItemType.Nice)
})
```

## Lets make it a little harder

Lets add another character to our event, but this time make it bad.

This will be an item we won't want to catch!

**Discussion**

What might happen when we catch this item?

Remember to check the hints if you are unsure about your code.

Filling like a challenge? Try the animated version by clicking the ➕

```blocks
events.everyNSeconds(5, function () {
    characters.createMovingItem(img``, MovingItemType.Nice)
    // @highlight
    characters.createMovingItem(img``, MovingItemType.Bad)
})
```