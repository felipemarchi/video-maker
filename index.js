const robots = {
    input: require('./robots/input.js'),
    text: require('./robots/text.js'),
    state: require('./robots/state.js'),
    image: require('./robots/image.js')
}

async function start() {

    /*  create content struct
        user input (readline-sync)
        save state (file-system) */
    robots.input()

    /*  load state (file-system)
        get wikipedias content (algorithmia)
        break content into sentences (sentence-boundary-detection)
        fetch keywords of all sentences (watson-natural-language-understanding)
        save state (file-system) */
    await robots.text()
    
    /*  load state (file-system)
        fetch images from google to each sentence (google-cloud-custom-search) */
    await robots.image()
    
    /*  system output */
    const content = robots.state.load()
    console.dir(content, { depth: null })
}

start()

