var validators = {}

// https://stackoverflow.com/a/68411681/1592803
validators.isBase64Image = v => {
    let utf8 = Buffer.from(v).toString("utf8");
    return !(/[^\x00-\x7f]/.test(utf8));
}

validators.isLocation = v => {
    if(!v.lng) return Promise.reject('Longitude missing.')
    if(!v.lat) return Promise.reject('Latitude missing.')
    if(typeof v.lng !== 'number') return Promise.reject('Longitude has wrong format.')
    if(typeof v.lat !== 'number') return Promise.reject('Latitude has wrong format.')
    return true
}

module.exports = validators;