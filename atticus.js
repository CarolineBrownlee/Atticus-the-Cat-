const atticusTheCat = {

    name: "Atticus",
    species: "cat",
    nicknames: ["Atticus", "Kitty", "Cat", "Asshole"],
    age: 2,
    favoriteToys: [],
    meow: function(){
        window.alert("Meow")
    },
    sleep: function(){
        window.alert("Zzz")
    },
    purr: function(){
        window.alert("Purr")
    }, 
    play: function (toy) {
        if ((toy) === "ball") {
            this.favoriteToys.push(toy);
    }}
}

// atticusTheCat.meow()
// atticusTheCat.sleep()
// atticusTheCat.purr()

atticusTheCat.play("ball")
console.log(atticusTheCat.favoriteToys)