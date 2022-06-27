/*
* Create basic custom functions that abstract lower level functions
*/
enum MovingItemType {
    Nice,
    Bad
}

let player: Sprite = null

//% color=#667FFF icon="\uf073" block="Events"
namespace events {
    //% block="every $seconds seconds"
    //% seconds.min=0 seconds.max=5
    //% seconds.defl=5
    export function everyNSeconds(seconds: number, handler: () => void) {
        game.onUpdateInterval(seconds * 1000, handler);
    }

    //% block="when player catches $type item"
    //% type.shadow="MovingItemType.Nice"
    export function whenPlayerCatchesItem(type: MovingItemType, handler: () => void) {
        let kind = SpriteKind.Food

        if (type == MovingItemType.Bad) {
            kind = SpriteKind.Enemy
        }

        sprites.onOverlap(SpriteKind.Player, kind, function (sprite, otherSprite) {
            otherSprite.destroy()
            handler();
        })
    }
}

//% color=#FF4D88 icon="\uf443" block="Characters"
namespace characters {
    //% block="create $image | which is $type"
    //% image.shadow="screen_image_picker"
    //% type.shadow="MovingItemType.Nice"
    export function createMovingItem(image = img``, type: MovingItemType) {
        let kind = SpriteKind.Food

        if (type == MovingItemType.Bad) {
            kind = SpriteKind.Enemy
        }
        sprites.createProjectileFromSide(image,randint(-50, 50),randint(-50, 50)).setKind(kind)
    }

    //% block="Create player $image"
    //% image.shadow="screen_image_picker"
    export function createPlayer(image = img``) {
        player = sprites.create(image, SpriteKind.Player);
        player.setStayInScreen(true);
    }
}

//% color=#006400 icon="\uf11b" block="Controller"
namespace controller {
    //% block="Move player with controls"
    export function movePlayer() {
        controller.moveSprite(player);
    }
}