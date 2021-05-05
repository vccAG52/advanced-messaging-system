enum RadioMessage {
    message1 = 49434,
    shake = 2851,
    FreeFall = 38525,
    A = 18289,
    B = 9031,
    A_B = 5036,
    Screen_Down = 39183,
    Tilt_Left = 43278,
    Tilt_Right = 43333,
    Pin_P1 = 40472,
    Pin_P0 = 43012,
    Pin_P2 = 56830
}
input.onPinPressed(TouchPin.P0, function () {
    radio.sendMessage(RadioMessage.Pin_P0)
})
radio.onReceivedMessage(RadioMessage.Pin_P0, function () {
    basic.showString("It's Saturday!!")
})
radio.onReceivedMessage(RadioMessage.Tilt_Right, function () {
    basic.showString("Yes!")
})
radio.onReceivedMessage(RadioMessage.A, function () {
    basic.showString("Meh.")
})
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.A)
})
input.onGesture(Gesture.FreeFall, function () {
    radio.sendMessage(RadioMessage.FreeFall)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendMessage(RadioMessage.Tilt_Left)
})
radio.onReceivedMessage(RadioMessage.Tilt_Left, function () {
    basic.showString("No.")
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendMessage(RadioMessage.Pin_P2)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendMessage(RadioMessage.Screen_Down)
})
radio.onReceivedMessage(RadioMessage.FreeFall, function () {
    basic.showString("How are you?")
})
radio.onReceivedMessage(RadioMessage.Pin_P2, function () {
    basic.showString("Are you excited?!")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.A_B)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.B)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendMessage(RadioMessage.Pin_P1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendMessage(RadioMessage.shake)
})
radio.onReceivedMessage(RadioMessage.B, function () {
    basic.showString("Good.")
})
radio.onReceivedMessage(RadioMessage.A_B, function () {
    basic.showString("Are you awake?")
})
radio.onReceivedMessage(RadioMessage.Pin_P1, function () {
    basic.showString("Minecraft!!")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendMessage(RadioMessage.Tilt_Right)
})
radio.onReceivedMessage(RadioMessage.shake, function () {
    basic.showString("Good night!")
})
radio.onReceivedMessage(RadioMessage.Screen_Down, function () {
    basic.showString("I love you!")
})
radio.setGroup(562)
