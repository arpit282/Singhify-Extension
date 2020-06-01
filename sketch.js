function setup() {
    noCanvas()

    let bgpage = chrome.extension.getBackgroundPage()
    let word = bgpage.word.trim()

    let url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=3f8908a5-5baa-4af5-8ea4-0d7ca3f546c5`

    url = url.replace(/\s+/g,'')

    loadJSON(url,gotdata)

    function gotdata(data){
        createP(data[0].shortdef).stu
    }


}