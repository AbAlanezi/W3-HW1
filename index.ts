// قم بإنشاء برنامج interface Car واجهة لكائن بسيط للسيارة مع الخصائص التاليه الصنع، النوع، السنة ودالة ()honk تقوم بطباعة جملة من إختيارك .

//     قم بإضافة ثلاث سيارات تحتوي كل منها على خصائص مختلفه .

interface Car{
    make: string,
    model: string,
    year: number
    honk(): any
}
function honk(){
console.log("Honk function");
}

let car1: Car = {
  make: "Mercedes",
  model: "G class",
  year: 2022,
  honk(){
      console.log(`honk for ${car1}`)
  },
}
let car2: Car = {
  make: "BMW",
  model: "730i",
  year: 2021,
  honk(){
      console.log(`honk for ${car2}`)
  },
}
let car3: Car = {
  make: "Mercedes",
  model: "S class",
  year: 2023,
  honk(){
      return "This Info for Car1"
  },
}
// قم بطباعة بيانات المركبات .
// console.log(car1)
// console.log(car2)
// console.log(car3)
let cars : Car[] =[car1,car2,car3]
    for (let car of cars) {
    console.log(` Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, ${car.honk()}`);
    }
// قم باستدعاء دالة honk .
honk()

// قم بطباعة سنة صنع المركبة فقط .
for(let car of cars){
console.log(`yera: ${car.year}`)
}
// قم بطباعة نوع المركبة فقط .
for(let car of cars){
console.log(`model: ${car.make}`)
}


