chrome.runtime.onMessage.addListener(receiver)

window.word = "arpit"

function receiver(req,send,sendResponse){
    console.log(req)

    window.word= req.text
    
}