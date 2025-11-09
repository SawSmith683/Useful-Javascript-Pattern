function Subject(){
        this.observer = []
     }
     Subject.prototype = {
        subscribe : function (fn){
            this.observer.push(fn)
        },
        unsubscribe : function (fnToRemove){
            this.observer = this.observer.filter(fn =>{
                if (fn != fnToRemove){
                    return fn
                }
            })
        },
        fire : function(){
            this.observer.forEach(fn =>{
                fn.call()
            })
        }
     }
     let subject = new Subject
    function callBack1(){
        console.log("Observer is Calling for 1")
    }
    function callBack2(){
        console.log("Observer is Calling for 2")
    }
    
    subject.subscribe(callBack1)
    subject.subscribe(callBack2)
    subject.unsubscribe(callBack2)
    
    subject.fire()