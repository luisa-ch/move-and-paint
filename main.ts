function level3 () {
    if (led.point(4, 0) && (led.point(4, 1) && (led.point(4, 2) && (led.point(4, 3) && led.point(4, 4))))) {
        game.addScore(1)
        basic.pause(100)
        basic.showNumber(game.score())
        basic.clearScreen()
    }
}
function level2 () {
    if (led.point(0, 3) && (led.point(1, 3) && (led.point(2, 3) && (led.point(3, 3) && led.point(4, 3))))) {
        game.addScore(1)
        basic.pause(100)
        basic.showNumber(game.score())
        basic.clearScreen()
    }
}
function level5 () {
    if (led.point(0, 0) && (led.point(1, 1) && (led.point(2, 2) && (led.point(3, 3) && led.point(4, 4))))) {
        game.addScore(1)
        basic.pause(100)
        basic.showNumber(game.score())
        basic.clearScreen()
        game.gameOver()
        control.reset()
    }
}
function level1 () {
    if (led.point(0, 0) && (led.point(0, 1) && (led.point(0, 2) && (led.point(0, 3) && led.point(0, 4))))) {
        game.addScore(1)
        basic.pause(100)
        basic.showNumber(game.score())
        basic.clearScreen()
    }
}
function level4 () {
    if (led.point(0, 4) && (led.point(1, 3) && (led.point(2, 2) && (led.point(3, 1) && led.point(4, 0))))) {
        game.addScore(1)
        basic.pause(100)
        basic.showNumber(game.score())
        basic.clearScreen()
    }
}
let y = 0
let x = 0
game.setScore(0)
basic.forever(function () {
    if (game.score() == 0) {
        level1()
    }
    if (game.score() == 1) {
        level2()
    }
    if (game.score() == 2) {
        level3()
    }
    if (game.score() == 3) {
        level4()
    }
    if (game.score() == 4) {
        level5()
    }
    while (input.buttonIsPressed(Button.A)) {
        y += 1
        basic.pause(200)
        if (led.point(x, y)) {
            led.unplot(x, y)
        } else {
            led.plot(x, y)
        }
    }
    while (input.buttonIsPressed(Button.B)) {
        x += 1
        basic.pause(200)
        if (led.point(x, y)) {
            led.unplot(x, y)
        } else {
            led.plot(x, y)
        }
    }
    while (input.pinIsPressed(TouchPin.P0)) {
        y += -1
        basic.pause(200)
        if (led.point(x, y)) {
            led.unplot(x, y)
        } else {
            led.plot(x, y)
        }
    }
    while (input.pinIsPressed(TouchPin.P1)) {
        x += -1
        basic.pause(200)
        if (led.point(x, y)) {
            led.unplot(x, y)
        } else {
            led.plot(x, y)
        }
    }
})
