class Set {

    constructor(player, kda, build) {
        this.player = player
        this.kda = kda
        this.build = build
    }

    generate() {
        return {
            title: `Build de ${this.player} qui a fini en ${this.kda}`,
            type: "custom",
            map: "SR",
            mode: "CLASIC",
            blocks: [
                {
                    type: "nom du bloc",
                    recMath: false,
                    minSummonerLevel: -1,
                    maxSummonerLevel: -1,
                    showIfSummonerSpell: "",
                    hideIfSummonerSpell: "",
                    items: this.build.map( (item) => { id: item } )
                }
            ]
        }
    }
}

module.exports = Set