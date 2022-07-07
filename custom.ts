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
    //% block="every %seconds seconds"
    //% seconds.min=0 seconds.max=5
    //% seconds.defl=5
    export function everyNSeconds(seconds: number, handler: () => void) {
        game.onUpdateInterval(seconds * 1000, handler);
    }

    //% block="when player catches %type item"
    //% type.shadow="MovingItemType.Nice"
    export function whenPlayerCatchesItem(type: MovingItemType, handler: () => void) {
        let kind = SpriteKind.Food;

        if (type == MovingItemType.Bad) {
            kind = SpriteKind.Enemy;
        }

        sprites.onOverlap(SpriteKind.Player, kind, function (sprite, otherSprite) {
            otherSprite.destroy();
            handler();
        });
    }
}

//% color=#FF4D88 icon="\uf443" block="Characters"
namespace characters {
    //% block="create character $image which is %type||left movement %left right movement %right"
    //% image.shadow="screen_image_picker"
    //% type.shadow="MovingItemType.Nice"
    //% left.shadow="animation_editor"
    //% right.shadow="animation_editor"
    //% inlineInputMode=inline
    //% expandableArgumentMode=toggle
    export function createMovingItem(image: Image, type: MovingItemType, left?: Image[], right?: Image[]) {
        let kind = SpriteKind.Food;

        if (type == MovingItemType.Bad) {
            kind = SpriteKind.Enemy;
        }

        let x = randint(-50, 50);
        let sprite = sprites.createProjectileFromSide(image,x,randint(-50, 50));
        sprite.setKind(kind);

        if (left == null || right == null) return;

        if (x < 0) {
            animation.runImageAnimation(
                sprite,
                left,
                200,
                true
            );
        } else {
            animation.runImageAnimation(
                sprite,
                right,
                200,
                true
            );
        }
    }

    //% block="Create player %image || left movement: %left right movement: %right"
    //% image.shadow="screen_image_picker"
    //% left.shadow="animation_editor"
    //% right.shadow="animation_editor"
    //% inlineInputMode=inline
    //% expandableArgumentMode=toggle
    export function createPlayer(image: Image, left?: Image[], right?: Image[]) {
        player = sprites.create(image, SpriteKind.Player);
        player.setStayInScreen(true);

        if (left == null || right == null) return;

        controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function() {
            animation.runImageAnimation(
                player,
                left,
                200,
                true
            );
        });

        controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function() {
            animation.runImageAnimation(
                player,
                right,
                200,
                true
            );
        });

        controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
            animation.stopAnimation(animation.AnimationTypes.All, player);
        });

        controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
            animation.stopAnimation(animation.AnimationTypes.All, player);
        });
    }
}

//% color=#006400 icon="\uf11b" block="Controller"
namespace controller {
    //% block="Move player with controls"
    export function movePlayer() {
        controller.moveSprite(player);
    }
}