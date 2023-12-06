const users = [
    { id: 1, username: 'ajay@gmail.com', password: '1234' },
    { id: 2, username: 'rahul@gmail.com', password: '9876' },
];
let username = 'ajay@gmail.com';
const user = users.find(function (entry) {
    if (entry.username === username) {
        // console.log(entry)
        return entry;
    }
   
});
 console.log(user);