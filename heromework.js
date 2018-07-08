var hero = {
      name: "",
      heroic: new Boolean(true),
      inventory: [],
      health: 10,
      weapon: {
        type: "string",
        damage: 2,
      }
    }

    

var rest = function (hero){
    const inn = document.getElementById('inn')
    hero.health = 10
    return hero
    
}


var pickUpItem = function(hero, weapon){
    const weapon = document.getElementById('dagger')
    var inventoryLength = hero.inventory.length
    weapon >> hero.inventory
    
}

var equipWeapon = function (hero){
    const bag = document.getElementById('bag')
    hero.weapon
    hero.weapon = hero.inventory[0]
    


}

var displayStats = function (hero){
    window.alert(hero)
    var askForHeroName = function(hero){
        window.prompt('what is your hero\'s name?')
    }
}