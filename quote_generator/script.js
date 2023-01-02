function generate(){
    var quotes = {
        "- Andre Breton" : '"Love is when you meet someone who tells you something new about yourself."',
        "- Benjamin Franklin" : '"Be at war with your vices, at peace with your neighbors, and let every new year find you a better man."',
        "- Pauline Phillips" : '"The less you talk, the more you\'re listened to."',
        "- Michelangelo" : '"The true work of art is but a shadow of the divine perfection."'
    }
    var authors = Object.keys(quotes);
    var author =  authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}