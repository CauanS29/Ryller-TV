import axios from "axios";
import { BASE_URL } from "@/src/app/shared/constants";
export const MongoApi= axios.create({
    baseURL: BASE_URL,
})