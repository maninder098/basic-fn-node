const express = require("express")
const app = express()

const axios = require("axios")

// let res = axios({
//     method: "get",
//     url: "https://jsonplaceholder.typicode.com/users",
//     params: {
//         _limit: 5,
//     },
// });

async function getUser(req,res) {
    let data = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    console.log("data>>>>>>>>", data.data)
    const strData = JSON.stringify(data.data)
    if (!data) {
        return false
    }
    res.send(strData);

}

// async function getUser(res,req){  
//     let data = await axios.get("https://jsonplaceholder.typicode.com/users/1")
//     console.log("data>>>>>>>",data.data);

//     if(!data){
//         res.status(401).send("data not found")
//     }
//     res.status(200).json({data : data.data})

// }


// function getUser(req,res) {
//     axios
//         .get("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => {
//         console.log(response.data);
//         return res.send(response.data)
//     })
//     .catch((err) => console.log(err));
// }


let data = {
    id: 11,
    name: "Tom Brady",
    username: "Brad",
    email: "tombrad@asd.com",
}

function createUser(req, res) {
    axios
        .post("https://jsonplaceholder.typicode.com/users", data)
        .then((response) => {
            console.log("rrrrr>>>>>>>", response.data);
            res.send(data)
        }).catch((err) => console.log(err));

}

app.get('/', getUser)
app.post('/create-user', createUser)

app.listen(5001, () => {
    console.log("server connected on 5001 port")
})