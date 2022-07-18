import axios from "axios";

const instence= axios.create({
    baseURL: "..." //THE API {cloud function} URL
});

export default instance;