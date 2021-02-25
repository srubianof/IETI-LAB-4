const users = [{
    user: "user1",
    password: "abc123"
}, {
    user: "user2",
    password: "abc123"
}, {
    user: "user3",
    password: "abc123"
},
]
export const getUsers = () => users
export const addUser = (user) => users.push(user)

