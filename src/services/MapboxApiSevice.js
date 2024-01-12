async function getMapboxData () {

    const responseMapbox = await fetch("/api/citiesInfo.json");
    const resultMapbox = await responseMapbox.json();

    return resultMapbox;
}

export default {
    getMapboxData
}