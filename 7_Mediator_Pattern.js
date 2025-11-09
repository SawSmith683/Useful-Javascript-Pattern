function Member(name){
        this.chatroom = null
        this.name = name
    }
    Member.prototype = {
        send :  function (message, toMember){
            this.chatroom.send(message,this,toMember)
        }  ,
        receive: function (message,fromMember){
            console.log(`${fromMember.name} to ${this.name} : ${message}`  )
        }  
    }
    function Chatroom (name){
        this.members = {}
    }
    Chatroom.prototype = {
        addMember : function (member){
            this.members[member.name] = member
            member.chatroom = this
        },
        send : function (message,fromMember,toMember ){
            toMember.receive (message,fromMember)
        }
    }
    const chat = new Chatroom()
    const smith = new Member("Smith")
    const john = new Member("john")
    
    chat.addMember(smith)
    chat.addMember(john)
    smith.send("hello smith!",john)