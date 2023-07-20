const days = [
    {
        name: "Sunday"
    },
    {
        name: "Monday"
    },
    {
        name: "Tuesday"
    },
    {
        name: "Wednesday"
    },
    {
        name: "Thursday"
    },
    {
        name: "Friday"
    },
    {
        name: "Saturday"
    },
]

// The following creates an array of numbers from [1..28]
const dates = Array.from({length: 28}, (x, i) => i + 1)


export default days;
export {dates};