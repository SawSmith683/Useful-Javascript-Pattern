function CrytocurrencyAPI (){
        this.getValue = function (coin){
            console.log("get Currency API")
            switch(coin){
                case "Bitcoin":
                    return "8500$"
                case "LiteCoin":
                    return "350$"
                case "Etherum":
                    return "550$"
            }
        }
    }
    const api = new CrytocurrencyAPI()
    console.log(api.getValue("Bitcoin"))
    
    function CrytocurrencyProxy (){
        this.api = new CrytocurrencyAPI()
        this.cache = {}
        this.getValue = function (coin){
            if (this.cache[coin] == null){
                this.cache[coin] = this.api.getValue(coin)
            }
            return this.cache[coin]
        }
    }
    const proxy = new CrytocurrencyProxy()
    console.log(proxy.getValue("Bitcoin"))
    console.log(proxy.getValue("Litecoin"))
    console.log(proxy.getValue("Etherum"))