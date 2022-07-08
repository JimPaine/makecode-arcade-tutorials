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
    // @highlight
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