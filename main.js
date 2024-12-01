class Guerrier{
    constructor(name, life, attack, precision){
        this.name = name
        this.life = life
        this.attack = attack
        this.precision = precision
    }
}

    let guerrier1 = new Guerrier("Bob l'eponge", 136, 20, 0.7)
    let guerrier2 = new Guerrier('Patrick', 136, 10, 0.8)

    while (guerrier1.life > 0 && guerrier2.life > 0) {
        let attack1 = guerrier1.attack * guerrier1.precision
        let attack2 = guerrier2.attack * guerrier2.precision
        guerrier1.life -= attack2
        console.log(`${guerrier2.name} attaque ${guerrier1.name}, sa vie est maintenant de ${guerrier1.life} HP`)
        if(guerrier1.life > 0){
            guerrier2.life -= attack1
            console.log(`${guerrier1.name} attaque ${guerrier2.name}, sa vie est maintenant de ${guerrier2.life} HP`)
        }
        if (guerrier1.life <= 0) {
            console.log(`${guerrier2.name} a gagné !`)
        }
        if (guerrier2.life <= 0) {
            console.log(`${guerrier1.name} a gagné !`)
        }
}