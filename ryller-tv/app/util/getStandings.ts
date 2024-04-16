import { Standing } from "@/types";
import moment from "moment";
export default async function getStandings(): Promise<Standing[]> {
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
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': AP_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            //tem que checar se realmente é esse host, minuto 21
        },
        next:{
            revalidate: 60*60*24
        }
    }
    const standings: Standing[]=[];
    const leagues=
        [{name:"EPL",id:39},
        {name:"La Liga",id:140},
        {name:"BundesLiga",id:78},
        {name:"Serie A",id:135},
        {name:"Ligue 1",id:61}]
        //array com os nomes das ligas e o id delas, para adicionar ou mudar alguma liga tem olhar na api o id dela lá
        for (const league  of leagues) {
            let url=`https://api-football-v1.p.rapidapi.com/v3/standings?season=${year}&league=${league.id};`
            //pegar a url correta na API minuto 23, tá no mesmo local onde pegou as informações de opcpes
            //essa url é para temporadas europeias que iniciam no meio do ano(tratamento anterior do ano), caso se decida usar temporadas na américa do sul que iniciam no inicio do ano, a temporada sempre sera o ano atual
            await fetch(url,options).then(response=>response.json()).then(data=>{
                const standing=data.response[0]
                if(standing){
                    standings.push(standing)
                }
            }).catch(err=>{
                console.error(`Error fetching ${league.name} standing ${err}` )
            })
        }
    return standings
}