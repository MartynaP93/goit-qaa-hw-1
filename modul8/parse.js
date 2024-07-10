const json = '{"name":"Mango","age":3,"isHappy":true}'

const user = JSON.parse(json)
console.log(user)

try {
    const data = JSON.parse("Błędny ciąg JSON")
} catch (error) {
    console.log(error.name);
    console.log(error.message)
}
console.log("Parse try...catch")
