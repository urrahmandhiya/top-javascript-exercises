const getAge = (birth, death) => {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
const findTheOldest = function (people) {
    return people.reduce((old, cur) => {
        const oldestAge = getAge(old.yearOfBirth, old.yearOfDeath);
        const currentAge = getAge(cur.yearOfBirth, cur.yearOfDeath);
        return oldestAge < currentAge ? cur : old;
    })
};
// My old answer:
// const findTheOldest = function (people) {
//   return people
//     .map((person) => {
//       if (!Object.hasOwn(person, "yearOfDeath")) {
//         person.yearOfDeath = new Date().getFullYear();
//       }
//       person["age"] = person.yearOfDeath - person.yearOfBirth;
//       return person;
//     })
//     .sort((a, b) => b.age - a.age)[0];
// };

// Do not edit below this line
module.exports = findTheOldest;
