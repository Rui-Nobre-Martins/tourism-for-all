async function getCityData() {
    const responseAPI = await fetch("/api/citiesInfo.json")
    const resultAPI = await responseAPI.json();

    return resultAPI;
}

export default {
    getCityData
}