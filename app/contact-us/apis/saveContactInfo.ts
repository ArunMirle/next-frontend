import axios from "axios";
import { ContactFormInputs } from "../validations/contactForm";

export const saveContactInfoApi=async (data: ContactFormInputs) => {
    await axios.post('http://localhost:5000/contacts/add', data);
  }