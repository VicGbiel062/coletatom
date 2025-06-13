namespace SpriteKind {
    export const moeda = SpriteKind.create()
    export const AVISO = SpriteKind.create()
    export const tutorial = SpriteKind.create()
}
info.onScore(15, function () {
    while (true) {
        aleatorio_3 = randint(0, 3)
        if (aleatorio_3 == 0) {
            PERIGO3 = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO3.setPosition(74, 9)
            pause(500)
            sprites.destroy(PERIGO3)
            projetil_cima_3 = sprites.create(assets.image`myImage7`, SpriteKind.Enemy)
            projetil_cima_3.setScale(0.5, ScaleAnchor.Middle)
            projetil_cima_3.setPosition(randint(0, 160), 0)
            for (let index = 0; index < 120; index++) {
                pause(10)
                projetil_cima_3.y += 1
            }
            sprites.destroy(projetil_cima_3)
        } else if (aleatorio_3 == 1) {
            for (let index = 0; index < 1; index++) {
                PERIGO3 = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
                PERIGO3.setPosition(80, 115)
                pause(500)
                sprites.destroy(PERIGO3)
            }
            projetil_baixo_3 = sprites.create(assets.image`myImage8`, SpriteKind.Enemy)
            projetil_baixo_3.setScale(0.5, ScaleAnchor.Middle)
            projetil_baixo_3.setPosition(randint(0, 160), 120)
            for (let index = 0; index < 120; index++) {
                pause(10)
                projetil_baixo_3.y += -1
            }
            sprites.destroy(projetil_baixo_3)
        } else if (aleatorio_3 == 2) {
            for (let index = 0; index < 1; index++) {
                PERIGO3 = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
                PERIGO3.setPosition(149, 70)
                pause(500)
                sprites.destroy(PERIGO3)
            }
            projetil_direita_3 = sprites.create(assets.image`myImage6`, SpriteKind.Enemy)
            projetil_direita_3.setScale(0.5, ScaleAnchor.Middle)
            projetil_direita_3.setPosition(160, randint(0, 120))
            for (let index = 0; index < 160; index++) {
                pause(10)
                projetil_direita_3.x += -1
            }
            sprites.destroy(projetil_direita_3)
        } else if (aleatorio_3 == 3) {
            for (let index = 0; index < 1; index++) {
                PERIGO3 = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
                PERIGO3.setPosition(8, 54)
                pause(500)
                sprites.destroy(PERIGO3)
            }
            projetil_esquerda_3 = sprites.create(assets.image`myImage5`, SpriteKind.Enemy)
            projetil_esquerda_3.setScale(0.5, ScaleAnchor.Middle)
            projetil_esquerda_3.setPosition(0, randint(0, 120))
            for (let index = 0; index < 160; index++) {
                pause(10)
                projetil_esquerda_3.x += 1
            }
            sprites.destroy(projetil_esquerda_3)
        }
    }
})
info.onScore(10, function () {
    while (true) {
        aleatorio_2 = randint(0, 3)
        if (aleatorio_2 == 0) {
            posição_2 = randint(0, 160)
            PERIGO2 = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO2.setPosition(posição_2, 0)
            pause(500)
            sprites.destroy(PERIGO2)
            projetil_cima_2 = sprites.create(assets.image`myImage7`, SpriteKind.Enemy)
            projetil_cima_2.setScale(0.5, ScaleAnchor.Middle)
            projetil_cima_2.setPosition(posição_2, 0)
            for (let index = 0; index < 120; index++) {
                pause(7)
                projetil_cima_2.y += 1
            }
            sprites.destroy(projetil_cima_2)
        } else if (aleatorio_2 == 1) {
            posição_2 = randint(0, 160)
            PERIGO2 = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO2.setPosition(posição_2, 120)
            pause(500)
            sprites.destroy(PERIGO2)
            projetil_baixo_2 = sprites.create(assets.image`myImage8`, SpriteKind.Enemy)
            projetil_baixo_2.setScale(0.5, ScaleAnchor.Middle)
            projetil_baixo_2.setPosition(posição_2, 120)
            for (let index = 0; index < 120; index++) {
                pause(7)
                projetil_baixo_2.y += -1
            }
            sprites.destroy(projetil_baixo_2)
        } else if (aleatorio_2 == 2) {
            posição_2 = randint(0, 120)
            PERIGO2 = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO2.setPosition(160, posição_2)
            pause(500)
            sprites.destroy(PERIGO2)
            projetil_direita_2 = sprites.create(assets.image`myImage6`, SpriteKind.Enemy)
            projetil_direita_2.setScale(0.5, ScaleAnchor.Middle)
            projetil_direita_2.setPosition(160, posição_2)
            for (let index = 0; index < 160; index++) {
                pause(7)
                projetil_direita_2.x += -1
            }
            sprites.destroy(projetil_direita_2)
        } else if (aleatorio_2 == 3) {
            posição_2 = randint(0, 120)
            PERIGO2 = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO2.setPosition(0, posição_2)
            pause(500)
            sprites.destroy(PERIGO2)
            projetil_esquerda_2 = sprites.create(assets.image`myImage5`, SpriteKind.Enemy)
            projetil_esquerda_2.setScale(0.5, ScaleAnchor.Middle)
            projetil_esquerda_2.setPosition(0, posição_2)
            for (let index = 0; index < 160; index++) {
                pause(7)
                projetil_esquerda_2.x += 1
            }
            sprites.destroy(projetil_esquerda_2)
        }
    }
})
info.onScore(1, function () {
    inimigo = sprites.create(assets.image`globulo branco`, SpriteKind.Enemy)
    inimigo.setScale(0.5, ScaleAnchor.Middle)
    inimigo.setPosition(-3, -3)
    inimigo.follow(personagem, vBixo)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "O VÍRUS FOI CONTIDO")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.moeda, function (sprite, otherSprite) {
    sprites.destroy(moeda)
    info.changeScoreBy(1)
    moeda = sprites.create(assets.image`myImage4`, SpriteKind.moeda)
    moeda.setScale(0.5, ScaleAnchor.Middle)
    moeda.setPosition(randint(0, 160), randint(0, 120))
})
info.onScore(20, function () {
    while (true) {
        aleatorio_4 = randint(0, 3)
        if (aleatorio_4 == 0) {
            posição_4 = randint(0, 160)
            PERIGO4 = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO4.setPosition(posição_4, 0)
            pause(500)
            sprites.destroy(PERIGO4)
            projetil_cima_4 = sprites.create(assets.image`myImage7`, SpriteKind.Enemy)
            projetil_cima_4.setScale(0.5, ScaleAnchor.Middle)
            projetil_cima_4.setPosition(posição_4, 0)
            for (let index = 0; index < 120; index++) {
                pause(7)
                projetil_cima_4.y += 1
            }
            sprites.destroy(projetil_cima_4)
        } else if (aleatorio_4 == 1) {
            posição_4 = randint(0, 160)
            PERIGO4 = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO4.setPosition(posição_4, 120)
            pause(500)
            sprites.destroy(PERIGO4)
            projetil_baixo_4 = sprites.create(assets.image`myImage8`, SpriteKind.Enemy)
            projetil_baixo_4.setPosition(posição_4, 120)
            projetil_baixo_4.setScale(0.5, ScaleAnchor.Middle)
            for (let index = 0; index < 120; index++) {
                pause(7)
                projetil_baixo_4.y += -1
            }
            sprites.destroy(projetil_baixo_4)
        } else if (aleatorio_4 == 2) {
            posição_4 = randint(0, 120)
            PERIGO4 = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO4.setPosition(160, posição_4)
            pause(500)
            sprites.destroy(PERIGO4)
            projetil_direita_4 = sprites.create(assets.image`myImage6`, SpriteKind.Enemy)
            projetil_direita_4.setScale(0.5, ScaleAnchor.Middle)
            projetil_direita_4.setPosition(160, posição_4)
            for (let index = 0; index < 160; index++) {
                pause(7)
                projetil_direita_4.x += -1
            }
            sprites.destroy(projetil_direita_4)
        } else if (aleatorio_4 == 3) {
            posição_4 = randint(0, 120)
            PERIGO4 = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO4.setPosition(0, posição_4)
            pause(500)
            sprites.destroy(PERIGO4)
            projetil_esquerda_4 = sprites.create(assets.image`myImage5`, SpriteKind.Enemy)
            projetil_esquerda_4.setScale(0.5, ScaleAnchor.Middle)
            projetil_esquerda_4.setPosition(0, posição_4)
            for (let index = 0; index < 160; index++) {
                pause(7)
                projetil_esquerda_4.x += 1
            }
            sprites.destroy(projetil_esquerda_4)
        }
    }
})
info.onScore(5, function () {
    while (true) {
        sprites.destroy(moeda)
        moeda = sprites.create(assets.image`myImage4`, SpriteKind.moeda)
        moeda.setScale(0.5, ScaleAnchor.Middle)
        moeda.setPosition(randint(0, 160), randint(0, 120))
        aleatorio = randint(0, 3)
        if (aleatorio == 0) {
            posição_1 = randint(0, 160)
            PERIGO = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO.setPosition(posição_1, 0)
            pause(500)
            sprites.destroy(PERIGO)
            projetil_cima = sprites.create(assets.image`myImage7`, SpriteKind.Enemy)
            projetil_cima.setScale(0.5, ScaleAnchor.Middle)
            projetil_cima.setPosition(posição_1, 0)
            for (let index = 0; index < 120; index++) {
                pause(7)
                projetil_cima.y += 1
            }
            sprites.destroy(projetil_cima)
        } else if (aleatorio == 1) {
            posição_1 = randint(0, 160)
            PERIGO = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO.setPosition(posição_1, 120)
            pause(500)
            sprites.destroy(PERIGO)
            projetil_baixo = sprites.create(assets.image`myImage8`, SpriteKind.Enemy)
            projetil_baixo.setPosition(posição_1, 120)
            projetil_baixo.setScale(0.5, ScaleAnchor.Middle)
            for (let index = 0; index < 120; index++) {
                pause(7)
                projetil_baixo.y += -1
            }
            sprites.destroy(projetil_baixo)
        } else if (aleatorio == 2) {
            posição_1 = randint(0, 120)
            PERIGO = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO.setPosition(160, posição_1)
            pause(500)
            sprites.destroy(PERIGO)
            projetil_direita = sprites.create(assets.image`myImage6`, SpriteKind.Enemy)
            projetil_direita.setScale(0.5, ScaleAnchor.Middle)
            projetil_direita.setPosition(160, posição_1)
            for (let index = 0; index < 160; index++) {
                pause(7)
                projetil_direita.x += -1
            }
            sprites.destroy(projetil_direita)
        } else if (aleatorio == 3) {
            posição_1 = randint(0, 120)
            PERIGO = sprites.create(assets.image`WARNING`, SpriteKind.AVISO)
            PERIGO.setPosition(0, posição_1)
            pause(500)
            sprites.destroy(PERIGO)
            projetil_esquerda = sprites.create(assets.image`myImage5`, SpriteKind.Enemy)
            projetil_esquerda.setPosition(0, posição_1)
            projetil_esquerda.setScale(0.5, ScaleAnchor.Middle)
            for (let index = 0; index < 160; index++) {
                pause(7)
                projetil_esquerda.x += 1
            }
            sprites.destroy(projetil_esquerda)
        }
    }
})
let projetil_esquerda: Sprite = null
let projetil_direita: Sprite = null
let projetil_baixo: Sprite = null
let projetil_cima: Sprite = null
let PERIGO: Sprite = null
let posição_1 = 0
let aleatorio = 0
let projetil_esquerda_4: Sprite = null
let projetil_direita_4: Sprite = null
let projetil_baixo_4: Sprite = null
let projetil_cima_4: Sprite = null
let PERIGO4: Sprite = null
let posição_4 = 0
let aleatorio_4 = 0
let inimigo: Sprite = null
let projetil_esquerda_2: Sprite = null
let projetil_direita_2: Sprite = null
let projetil_baixo_2: Sprite = null
let projetil_cima_2: Sprite = null
let PERIGO2: Sprite = null
let posição_2 = 0
let aleatorio_2 = 0
let projetil_esquerda_3: Sprite = null
let projetil_direita_3: Sprite = null
let projetil_baixo_3: Sprite = null
let projetil_cima_3: Sprite = null
let PERIGO3: Sprite = null
let aleatorio_3 = 0
let moeda: Sprite = null
let personagem: Sprite = null
let vBixo = 0
vBixo = 60
music.play(music.createSong(assets.song`Som teste0`), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`level`)
personagem = sprites.create(assets.image`myImage0`, SpriteKind.Player)
personagem.setScale(0.5, ScaleAnchor.Middle)
controller.moveSprite(personagem, 120, 120)
personagem.setStayInScreen(true)
moeda = sprites.create(assets.image`myImage4`, SpriteKind.moeda)
moeda.setScale(0.5, ScaleAnchor.Middle)
moeda.setPosition(randint(0, 160), randint(0, 120))
info.setScore(0)
