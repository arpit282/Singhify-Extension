window.addEventListener("mouseup",word)

function word(){
    let selectedtext = window.getSelection().toString().trim()
    console.log(selectedtext)

    if(selectedtext.length > 0)
    {
        let message = {
            text: selectedtext
        }

        chrome.runtime.sendMessage(message)
    }

}