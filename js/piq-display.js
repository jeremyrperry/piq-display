var piq_display = {
    activeQuote: null,
    currentIndex: 0,
    quoteList: [],
    quoteInterval: null,

    cycleQuotes: function(){
        if(this.quoteInterval != null){
            clearInterval(this.quoteInterval);
            this.quoteInterval = null;
        }
        this.toggleQuote();
        var self = this;
        this.quoteInterval = setInterval(function(){
            self.currentIndex++;
            self.toggleQuote();
        }, 10000);
    },

    getQuotes: function(){
        var self = this;
        $.get('http://www.playa-inspiration-quotes.net:1337/api/quotes/random/get')
            .then(function success(res){
                self.saveQuotes(res);
            }, function error(){
                console.error('unable to retreive quotes');
            })
            .always(function(){
                self.cycleQuotes();
            })
    },

    init: function(){
        var quotesData = JSON.parse(localStorage.getItem('quotesData'));
        if(quotesData != null){
            this.quotes = quotesData.quotes;
        }
        this.getQuotes();
    },

    saveQuotes: function(res){
        this.quoteList = res.quotes;
        localStorage.setItem('quotesData', JSON.stringify(res));
    },

    toggleQuote: function(){
        this.activeQuote = this.quoteList[this.currentIndex];
        var user = this.activeQuote.user;
        var playa_name =  user.playa_name || user.username;
        $('#quote_body').html(this.activeQuote.body);
        $('#playa_name').html('- ' + playa_name);
        var maxIndex = this.quoteList.length - 1;
        if(this.currentIndex == maxIndex){
            this.currentIndex = 0;
            this.getQuotes();
        }
    }
};

$(document).ready(function(){
    piq_display.getQuotes();
});