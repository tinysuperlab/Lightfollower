basic.forever(() => {
    if (input.buttonIsPressed(Button.A)) {
        lightfollower.readLightfollower(DigitalPin.C17)
    } else {
        lightfollower.readLightfollower(DigitalPin.C19)
    }
})