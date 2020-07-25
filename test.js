const axios = require('axios');


axios.delete('https://5f1781cc7c06c900160dc0de.mockapi.io/mathang/9')
    .then((response) =>
        console.log("thanh cong"))
    .catch( (error)=> 
        console.log("that bai")
    );


