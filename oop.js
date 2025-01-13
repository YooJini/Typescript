var Employee = /** @class */ (function () {
    function Employee(_name, _age, _job) {
        var _this = this;
        this._name = _name;
        this._age = _age;
        this._job = _job;
        this.printEmp = function () {
            console.log("name: ".concat(_this._name, ", age: ").concat(_this._age, ", job: ").concat(_this._job));
        };
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee("jini", 30, "developer");
employee1.name = 'ss';
employee1.printEmp();
