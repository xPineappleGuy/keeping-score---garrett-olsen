input.onButtonPressed(Button.A, function () {
    Theodore += 1
    basic.showString("A")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Tie += 1
    basic.showString("Tie")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Frank += 1
    basic.showString("B")
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (Theodore))
    basic.clearScreen()
    basic.showString("" + (Frank))
    basic.clearScreen()
    basic.showString("" + (Tie))
    basic.clearScreen()
})
let Tie = 0
let Frank = 0
let Theodore = 0
Theodore = 0
Frank = 0
