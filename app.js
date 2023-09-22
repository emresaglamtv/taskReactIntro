import axios from "axios"
import userId from "./index.js"

(async () => {
    const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`); //user+Number
    const postData = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`); //post-Number

    const userDataResponse = userData.data;
    const postDataResponse = postData.data[0];

    const result = {
        user: userDataResponse,
        post: postDataResponse
    }; //attach into an array

    console.log(result)

    // console.log("users", userDataResponse);
    // console.log("post", postDataResponse);
})();



