
let user1 = {
    name:'lisi',
    key: Symbol('user1')
}
let user2 = {
    name:'lisi',
    key: Symbol('user2')
}

let grade = {
    [user1.key]: {js:100,css:89},
    [user2.key]: {js:35,css:55},
}

console.log(grade[user1.key]);