input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(num)
})
input.onButtonPressed(Button.B, function () {
    num += -2
    basic.showNumber(num)
})
input.onGesture(Gesture.Shake, function () {
    num = 0
    basic.showNumber(num)
})
let num = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
