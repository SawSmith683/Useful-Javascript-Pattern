function Employee (name,salary){
    this.name = name 
    this.salary = salary
}
Employee.prototype = {
    getSalary : function(){
        return this.salary
    },
    setSalary : function (sal){
        this.salary = sal
    },
    accept : function(visitorFunction){
        visitorFunction(this)
    } 
}
const scom = new Employee("smith", 2000000)
console.log(scom.getSalary()) 

function extraSalary (emp){
    emp.setSalary(emp.getSalary()*2)
}

scom.accept(extraSalary)
console.log(scom.getSalary())
