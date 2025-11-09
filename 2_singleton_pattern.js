function process (state){
       this.state = state
    }
    
    const singleton = (function (){
       function processManager (){
          numProcess = 0
       }
       let pManager
       function createProcessManager(){
          pManager = new processManager
          return pManager
       }
       return{
          getProcessManger : () =>{
             if(!pManager)
             pManager = createProcessManager()
             return pManager
          }
       }
    })()
    
    const Manager = singleton.getProcessManger();
    const Manager2 = singleton.getProcessManger();
    console.log(Manager === Manager2)