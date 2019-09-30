import path from 'path'

export default () => ({
    webpack: config => {
        config.resolve.alias["@app"] = path.resolve(__dirname, 'src/');
        config.resolve.modules.push(path.resolve('./src/components'));
        return config
    },
})
