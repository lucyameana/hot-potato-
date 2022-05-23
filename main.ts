radio.onReceivedNumber(function (receivedNumber) {
    potatoe = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    if (true) {
        radio.sendNumber(potato)
        potato = -1
    }
})
input.onButtonPressed(Button.AB, function () {
    potatoe = randint(10, 20)
})
let potatoe = 0
let potato = 0
radio.setGroup(555)
potato = -1
basic.forever(function () {
    if (potato == 0) {
        basic.showIcon(IconNames.Skull)
        soundExpression.sad.play()
    }
    if (potato) {
        basic.clearScreen()
    }
    if (potato > 0) {
        basic.showIcon(IconNames.Target)
        potato += -1
    }
})
