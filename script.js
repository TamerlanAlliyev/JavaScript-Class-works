const athletes = [
    {
        name: "Usain Bolt",
        sport: "Track and Field",
        hasWorldRecord: true,
        gender: "Male",
        age: 35,
        totalMedals: 8,
        country: "Jamaica",
    },
    {
        name: "Simone Biles",
        sport: "Gymnastics",
        hasWorldRecord: false,
        gender: "Female",
        age: 25,
        totalMedals: 12,
        country: "United States",
    },
    {
        name: "Michael Phelps",
        sport: "Swimming",
        hasWorldRecord: true,
        gender: "Male",
        age: 37,
        totalMedals: 28,
        country: "United States",
    },
    {
        name: "Katie Ledecky",
        sport: "Swimming",
        hasWorldRecord: true,
        gender: "Female",
        age: 25,
        totalMedals: 10,
        country: "United States",
    },
    {
        name: "Allyson Felix",
        sport: "Track and Field",
        hasWorldRecord: false,
        gender: "Female",
        age: 36,
        totalMedals: 9,
        country: "United States",
    },
    {
        name: "Nadia Comăneci",
        sport: "Gymnastics",
        hasWorldRecord: true,
        gender: "Female",
        age: 60,
        totalMedals: 9,
        country: "Romania",
    },
    {
        name: "Birgit Fischer",
        sport: "Canoeing",
        hasWorldRecord: true,
        gender: "Female",
        age: 60,
        totalMedals: 12,
        country: "Germany",
    },
    {
        name: "Mariana Pajón",
        sport: "Cycling",
        hasWorldRecord: false,
        gender: "Female",
        age: 30,
        totalMedals: 4,
        country: "Colombia",
    },
    {
        name: "Wayne Gretzky",
        sport: "Ice Hockey",
        hasWorldRecord: false,
        gender: "Male",
        age: 61,
        totalMedals: 4,
        country: "Canada",
    },
    {
        name: "Yuna Kim",
        sport: "Figure Skating",
        hasWorldRecord: false,
        gender: "Female",
        age: 31,
        totalMedals: 6,
        country: "South Korea",
    },
];



console.log("**********  TASK - 1  **********")
// 1. Dünya rekordu olan atletlərdən ibarət array yaratmaq.
const worldRecords = athletes.filter(athletes => athletes.hasWorldRecord === true);
console.log(worldRecords);



console.log("**********  TASK - 2  **********")
// 2. Medallarının sayı 10 və daha artıq olan qadın atletlərdən ibarət array yaratmaq.
const womanMeadls = athletes.filter(athletes => {
    if (athletes.gender === "Female" && athletes.totalMedals >= 10) {
        return athletes;
    }
})
console.log(womanMeadls);



console.log("**********  TASK - 3  **********")
// 3. Atletlərin adlarından ibarət array yaratmaq.
const athleteNames = athletes.map(athlete => athlete.name);
console.log(athleteNames);



console.log("**********  TASK - 4  **********")
// 4. Atletlərin adları və ölkələri olan obyektlərdən ibarət array yaratmaq.
const athletesNameAndCountry = athletes.map(athlete => {
    return {
        name: athlete.name,
        country: athlete.country
    }
})
console.log(athletesNameAndCountry);



console.log("**********  TASK - 5  **********")
// 5. Bütün atletlərin ümumi medallarının sayını hesablamaq.
let athletesTotalMedals = athletes.map(athlete => athlete.totalMedals)
athletesTotalMedals = athletesTotalMedals.reduce((a, b) => a + b)
console.log(athletesTotalMedals);



console.log("**********  TASK - 6  **********")
// 6. Atletlərin medallarının sayının artım sırasına görə sıralanmış array yaratmaq.
let athletesMedalsSorted = athletes.map(athletes => {
    return {
        name: athletes.name,
        totalMedals: athletes.totalMedals
    }
})
athletesMedalsSorted.sort((a, b) => a.totalMedals - b.totalMedals);
console.log(athletesMedalsSorted);



console.log("**********  TASK - 7  **********")
// 7. Atletlərin adlarının əlifba sırası ilə sıralanmış array yaratmaq.
let athletesAlphabeticalName = athletes.map(athletes => athletes.name);
athletesAlphabeticalName = athletesAlphabeticalName.sort();
console.log(athletesAlphabeticalName);



console.log("**********  TASK - 8  **********")
// 8. Atletin adına əsasən spesifik obyekti tapıb console-a yazmaq.
let athletesSpesifikName = athletes.map(athletes => athletes.name);
athletesSpesifikName = athletesSpesifikName.sort();
let nameObyekt = [];
for (let i = 0; i < athletesSpesifikName.length; i++) {
    for (let j = 0; j < athletes.length; j++) {
        if (athletesSpesifikName[i] === athletes[j].name) {
            nameObyekt.push(athletes[j]);
            break;
        }
    }
}
console.log(nameObyekt);




console.log("**********  TASK - 9  **********")
// 9. Hər hansı bir kişi atletin dünya rekordu olub olmamasını yoxlamaq.
//const athletesNam = prompt("Add athletes name");
const athletesNam = "Michael Phelps";
const foundAthlete = athletes.find(athlete => athlete.name === athletesNam && athlete.gender === "Male");
const menWorldRecords = foundAthlete ? {
    name: foundAthlete.name,
    hasWorldRecord: foundAthlete.hasWorldRecord
} : null;

console.log(menWorldRecords);



console.log("**********  TASK - 10  **********")
// 10. Amerikalı və dünya rekordu olan atletlərin adlarından ibarət array yaratmaq.
const americansAthletes = athletes.filter(athletes => athletes.country==="United States" && athletes.hasWorldRecord).map(athletes => athletes.name);
console.log(americansAthletes)




console.log("**********  TASK - 11  **********")
// 11. Kişi atletlərin yaşlarının ortalamasını tapmaq.
const maleAgeAverage = athletes.filter(athletes => athletes.gender==="Male").map(athletes => athletes.age).reduce((a,b) => a+b);

console.log(maleAgeAverage)

