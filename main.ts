let strip = neopixel.create(DigitalPin.P16, 30, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(250)
})
