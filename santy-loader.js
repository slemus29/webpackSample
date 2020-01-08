function santyLoader (entry) {
    console.log("paso por el loader", entry);
    const parse = entry.replace('santy', 'console.log')
    return parse;
}

module.exports = santyLoader;