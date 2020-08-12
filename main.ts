// When you shake the microbit it will display a number
input.onGesture(Gesture.Shake, function () {
    // This the range of number of groups you might have
    basic.showNumber(randint(1, 2))
})
