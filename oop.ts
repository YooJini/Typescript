class Employee {
  constructor(
    private _name: string, 
    private _age: number, 
    private _job: string){}

  get name(){
    return this._name;
  }

  set name(val:string){
    this._name = val;
  }

  printEmp = (): void => {
    console.log(`name: ${this._name}, age: ${this._age}, job: ${this._job}`);
  };
}

let employee1 = new Employee("jini", 30, "developer");
employee1.name = 'ss';
employee1.printEmp();
