const companies = [
    {name: 'Comp1', category: 'Finance', start: 2000, end: 2003},
    {name: 'Comp2', category: 'Retail', start: 2010, end: 2003},
    {name: 'Comp3', category: 'Auto', start: 2005, end: 2007},
    {name: 'Comp4', category: 'Tech', start: 1996, end: 2008},
    {name: 'Comp5', category: 'Finance', start: 2009, end: 2011},
    {name: 'Comp6', category: 'Tech', start: 2001, end: 2006},
    {name: 'Comp7', category: 'Fianance', start: 2000, end: 2008}
]
const ages = [1,23,4,7,5,6,12,78,30,9,10]
//For
// for(let i=0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

//FOR EACH
companies.forEach(function(company,index,){
    console.log(index + 1, company.name)
})

//FILTER

// let canDrink = [];
// for(let x =0; x <ages.length; x++) {
//     if (ages[x] >= 21) {
//         canDrink.push(ages[x]);
//     }
// }
//---------------------------------------
// const canDrink = ages.filter(function(age){
// if(ages >= 21) {
//     return true
// }
// })


// const canDrink = ages.filter(age => age >= 21); 
// console.log(canDrink)

// //filter retail companies


// // const retailCompanies = companies.filter(function(company){
// //     if(company.category === 'Retail') {
// //         return true
// //     }
// // })
// // console.log(retailCompanies)

// const Retail = companies.filter(company => company.category ==='Retail')
// console.log(Retail)

// //filter 2000's companies
// const greater2k8 = companies.filter(company => company.start >= 2008)
// console.log(greater2k8)

// //filter companies that lasted 10 years

// const long_last = companies.filter(company => (company.end - company.start > 10))
// console.log(long_last)

// //MAP

// // create array of company names
// const comp_name = companies.map(function(company,idx){
// return ` ${idx + 1}: ${company.name}`;
// })
// console.log(comp_name)



// test_map = companies.map(company =>  `${company.name} [${company.start} - ${company.end}]`
// )
// console.log(test_map)
// //-----------------------------------------
// const age_map = ages.map(age => Math.sqrt(age))
// console.log(age_map)


// const age_2 = ages.map(age => age * 2)
// console.log(age_2)

//SORT

// const sort_co = companies.sort(function(c1,c2) {
// if(c1.start >c2.start) {
//     return 1;
// } else {
//     return -1;
// }
// })
// console.log(sort_co)

const sorted_co = companies.sort((a,b) =>(a.start > b.start ? 1 : -1));

console.log(sorted_co)

//sort ages

const sort_age = ages.sort((a,b) => a-b);
console.log(sort_age)
//reduce

// let age_sum = 0;

// for (let i=0; i<ages.length; i++) {
//     age_sum += agesp[i];
// }
// console.log(age_sum)

// const age_sum = ages.reduce(function(acc,age){
//     return acc + age;
// },0);

// console.log(age_sum)

const age_sum = ages.reduce((acc, age) => acc + age, 0)


console.log(age_sum)

//total years for all co using reduce

const total_year = companies.reduce(function(acc,company) {
    return acc + (company.end -company.start);
},0)
console.log(total_year)

const total_year2 = companies.reduce((acc,company) => acc + (company.end - company.start),0)
console.log(total_year2)

// ages2 array
let ages_2 = [1,2,3,4,5,6]

//for of

for (item of ages_2){
    console.log (item)
}

//for in (works with objects) lets you see object properties
// we are enumerating - this is for objects

// const detailed_basket = {
//     apples: 5,
//     oranges: 10,
//     grapes: 15
// }

for (item in detailed_basket){
    console.log(item)
}


// for (item of companies){
//     console.log(item)
// }

