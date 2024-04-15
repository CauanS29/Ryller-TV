import { Standing } from "@/types";
import moment from "moment";
export default async function getStandings(): Promise<Standing> {
    const currentTime = moment()
    const month = currentTime.month()
    let year
    if (month < 6) {
        year = currentTime.year() - 1
    }
    else {
        year = currentTime.year()
    }
    const AP_KEY: string = process.env.AP_KEY as string
    const options = {

    }
}