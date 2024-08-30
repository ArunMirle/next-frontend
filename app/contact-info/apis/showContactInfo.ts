import axios from "axios";

export const showContactInfoApi=() =>
    axios.get('http://localhost:5000/contacts/get').then((res) => res.data);