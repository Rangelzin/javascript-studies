
const list = [20,3,234,12,17,541,6,87,275,1000];

const companies = [
  { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
  { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
  { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
  { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
  { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
  { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

// MAP

const newValuesPerCent = companies.map((companiesNew)=> {
    const newValues = {
        name: companiesNew.name,
        marketValue: companiesNew.marketValue + (companiesNew.marketValue * 0.1),
        CEO: companiesNew.CEO,
        foundedOn: companiesNew.foundedOn
    } 
    return newValues
})

console.log(newValuesPerCent)

// FILTER

const newCompanies = newValuesPerCent.filter((companies)=>{
    if(companies.foundedOn > 2000) return false
    else return true
})

console.log(newCompanies)


// REDUCE

const newMarketValue = newCompanies.reduce((acc,current)=> acc + current.marketValue,0)

console.log(`A soma dos valores de mercado é de: R$${newMarketValue} Mi`)