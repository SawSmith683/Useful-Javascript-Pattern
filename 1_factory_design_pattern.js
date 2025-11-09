function developer (name){
        this.name = name
        this.type =  " Developer"
     }
     function tester (name){
        this.name = name
        this.type = "Tester"
     }
     function EmployeeFactory(){
        this.create = (name,type) => {
            switch(type){
                case 1:
                return new developer(name)
                break;
                case 2:
                 return new tester(name)
                break;
    
            }
        }
     }
     function say (){
        console.log (this.name + " is  a " + this.type)
     }
     const employeeFactory = new EmployeeFactory()
     const employee = []
    
     employee.push(employeeFactory.create("Smith", 1))
     employee.push(employeeFactory.create("john", 2))
    
     employee.forEach((emp) =>{
        say.call(emp)
     })
    