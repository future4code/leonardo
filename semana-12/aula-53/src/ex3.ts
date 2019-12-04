function whatEraItIs(ano: number, era?: string): string {
    if (!era || era === 'DC') {
        if (ano >= 1789) {
            return "Idade Contemporanea"
        } else if (ano < 1789 && ano >= 1453) {
            return "Idade moderna"
        } else if (ano < 1453 && ano >= 476) {
            return "Idade media"
        } else if (ano < 476) {
            return "Idade antiga"
        }
    } else {
        if (era === "AC" && ano < 4000) {
            return "Idade Antiga"
        } else {
            return "Pré Historia"
        }
    }
}
console.log(whatEraItIs(1790))
console.log(whatEraItIs(1790, "DC"))
console.log(whatEraItIs(1780, "DC"))
console.log(whatEraItIs(3000, "AC"))
console.log(whatEraItIs(30000, "AC"))