allDice1 = ["#one1", "#two1", "#three1", "#four1", "#five1", "#six1"]
allDice2 = ["#one2", "#two2", "#three2", "#four2", "#five2", "#six2"]

function randomDice(){
    rand1 = Math.floor(Math.random() * 6)
    rand2 = Math.floor(Math.random() * 6)

    document.querySelector(":not(.invisible).dice").classList.add("invisible")
    document.querySelector(":not(.invisible).dice").classList.add("invisible")

    document.querySelector(allDice1[rand1]).classList.remove("invisible")
    document.querySelector(allDice2[rand2]).classList.remove("invisible")
}