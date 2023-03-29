
function generateQuote() {
    const qoutes = [
    {
        quote: "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human",
        author: "Alan Turing"
    },
    {
        quote: "Machines take me by surprise with great frequency",
        author: "Alan Turing"
    },
    {
        quote: "Sometimes it is the people no one can imagine anything of who do the things no one can imagine",
        author: "Alan Turing"
    },
    {
        quote: "Those who can imagine anything, can create the impossible",
        author: "Alan Turing"
    },
    {
        quote: "The original question, 'Can machines think?' I believe to be too meaningless to deserve discussion",
        author: "Alan Turing"
    }]

    let currentQuote = Math.floor(Math.random() * 5);

    document.getElementById('quotation').innerHTML = "&quot;" + qoutes[currentQuote].quote + "&quot;";
    document.getElementById('author').innerHTML = "-" + qoutes[currentQuote].author;


}

window.onload = function(){
    generateQuote();
    //document.getElementById('generate').addEventListener('click', generateQuote())
}