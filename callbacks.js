// setTimeout(() =>{
//     console.log('Two seconds up.')
// }, 2000)

// const names = ['test', 'test2', 'test22']
// const shortNames = name.filter((name) =>{
//     return name.length <= 4
// }) 

// const geocode = (address, callback) => {
//     setTimeout(()=>{
//         const data = {
//             lattitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Philidelphia', (data)=>{

// })

const add = (num1, num2, callback)=>{
    setTimeout(()=>{
        callback(num1 + num2)
    },2000)
}

add(1,4,(sum)=>{
    console.log(sum)
})