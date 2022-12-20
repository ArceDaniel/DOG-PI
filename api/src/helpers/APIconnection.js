import axios from 'axios'


const APIconnection = async () =>{
    axios.get(`https://api.thedogapi.com/v1/breeds`)
    .then(res => console.log(res))
}


export default APIconnection;