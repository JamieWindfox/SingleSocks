var validators = {}

// https://stackoverflow.com/a/68411681/1592803
validators.isBase64Image = v => {
    let utf8 = Buffer.from(v).toString("utf8");
    return !(/[^\x00-\x7f]/.test(utf8));
}

module.exports = validators;