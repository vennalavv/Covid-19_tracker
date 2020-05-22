import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData=async(country)=>{
    let changebleUrl = url;
    if(country){
        changebleUrl = `${url}/countries/${country}`
    }
    try {
        const {data} = await axios.get(changebleUrl);

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchDailyData=async()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        //console.log(data)
        const modifiedData = data.map((dailydata)=>({
            confirmed: dailydata.confirmed.total,
            deaths: dailydata.deaths.total,
            lastUpdate: dailydata.reportDate,
        }))
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchCountries=async()=>{
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        //console.log(countries)
        return countries.map((country)=> country.name)        
    } catch (error) {
        
    }
}