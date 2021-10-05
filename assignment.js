let country = "india";
let continent = "asia";
let population = 140;
let isIsland = true;
const language = "hindi"
console.log(country)
console.log(population)
console.log(continent)
console.log(isIsland)
console.log(language)
isIsland = false
console.log(isIsland);
console.log(population / 2);
population++;
console.log(population);
console.log(population < 6);
//let description1 = "country" + is in europe + and + "population" + million + and speak + "language";
//console.log(description1);
let des = `${country} is in europe and ${population} million and speak ${language}`;
console.log(des);
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log("most njmber of native speakers");
    case 'spanish':
        console.log("second");
    case 'english':
        console.log("third");
        break;
    default:
        console.log("great language too");
}
