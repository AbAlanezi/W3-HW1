// قم بإنشاء برنامج interface Car واجهة لكائن بسيط للسيارة مع الخصائص التاليه الصنع، النوع، السنة ودالة ()honk تقوم بطباعة جملة من إختيارك .
function honk() {
    console.log("Honk function");
}
var car1 = {
    make: "Mercedes",
    model: "G class",
    year: 2022,
    honk: function () {
        console.log("honk for ".concat(car1));
    }
};
var car2 = {
    make: "BMW",
    model: "730i",
    year: 2021,
    honk: function () {
        console.log("honk for ".concat(car2));
    }
};
var car3 = {
    make: "Mercedes",
    model: "S class",
    year: 2023,
    honk: function () {
        return "This Info for Car1";
    }
};
// قم بطباعة بيانات المركبات .
// console.log(car1)
// console.log(car2)
// console.log(car3)
var cars = [car1, car2, car3];
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    console.log(" Make: ".concat(car.make, ", Model: ").concat(car.model, ", Year: ").concat(car.year, ", ").concat(car.honk()));
}
// قم باستدعاء دالة honk .
honk();
// قم بطباعة سنة صنع المركبة فقط .
for (var _a = 0, cars_2 = cars; _a < cars_2.length; _a++) {
    var car = cars_2[_a];
    console.log("yera: ".concat(car.year));
}
// قم بطباعة نوع المركبة فقط .
for (var _b = 0, cars_3 = cars; _b < cars_3.length; _b++) {
    var car = cars_3[_b];
    console.log("model: ".concat(car.make));
}
