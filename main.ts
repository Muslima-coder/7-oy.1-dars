// // 1-vazifa 1-misol
// let birinchi:number | undefined | null = Number(prompt("1-sonni kiriting"))
// let ikkinchi:number | undefined | null = Number(prompt("2-sonni kiriting"))
// let uchinchi:number | undefined | null = Number(prompt("3-sonni kiriting"))

// let yigindi: number | null = birinchi + ikkinchi + uchinchi ;
// let natija:(number | undefined | null) = yigindi / 3
// console.log(natija);

// // 2-misol
// let a:number | undefined | null = Number(prompt("1-sonni kiriting"))
// let b:number | undefined | null = Number(prompt("2-sonni kiriting"))

// if (a > b) {
// console.log("Eng katta son:", a);
// } 
// else if (b > a) {
// console.log("Eng katta son:", b);
// } 
// else {
// console.log("Ikkalasi teng:", a);
// }


// // 3-misol
// let son:number | null | undefined = Number(prompt("ixtiyoriy son kiriting"))

// if(son > 0){
//     console.log("bu son musbat :)");
// }
// else if(son < 0){
//     console.log("bu son manfiy :(");
// }
// else if(son == 0){
//     console.log("bu son 0 ga teng")
// }


// // 4-misol
// let son:number | null | undefined = Number(prompt("1 xonalidan 4 xonaligacha bo'lgan son kiriting"))

// if(son < 0){
//     console.log("bu son manfiy va 1 xonadan ham kichik");
// }
// else if(son < 10){
//     console.log("bu son 1 xonali");
// }
// else if(son < 100){
//     console.log("bu son 2 xonali");
// }
// else if(son < 1000){
//     console.log("bu son 3 xonali");
// }
// else if(son < 10000){
//     console.log("bu son 4 xonali");
// }
// else if(son >= 10000){
//     console.log("bu son 4 xonadan katta");
// }


// // 5-misol
// let son:number | null | undefined = Number(prompt("ixtiyoriy son kiriting"))

// if( son == 0){
//     console.log("bu son 0 ga teng");
// }
// else if( son % 2 != 0){
//     console.log("bu son toq");
// }

// else if(son % 2 == 0){
//     console.log("bu son juft");
// }

// 6-misol
// let son:number | null | undefined = Number(prompt("ixtiyoriy son kiriting"))

// if( son == 0){
//     console.log("bu son 0 ga teng");
// }
// else if( son % 2 != 0){
//     console.log(son - 1);
// }

// else if(son % 2 == 0){
//     console.log(son + 1);
// }


// // 7-misol
// let son:number | null | undefined = Number(prompt("1 xonalidan 4 xonaligacha bo'lgan son kiriting"))

// if(son < 0){
//     console.log("bu son manfiy va 1 xonadan ham kichik");
// }
// else if(son == 0){
//     console.log("bu son 0 ga teng");
// }
// else if(son < 10 && son % 2 == 0){
//     console.log("bu son 1 xonali va juft");
// }
// else if(son < 10 && son % 2 !== 0){
//     console.log("bu son 1 xonali va toq");
// }
// else if(son < 100 && son % 2 == 0){
//     console.log("bu son 2 xonali va juft");
// }
// else if(son < 100 && son % 2 !== 0){
//     console.log("bu son 2 xonali va toq");
// }
// else if(son < 1000 && son % 2 == 0){
//     console.log("bu son 3 xonali va juft");
// }
// else if(son < 1000 && son % 2 !== 0){
//     console.log("bu son 3 xonali va toq");
// }
// else if(son < 10000 && son % 2 == 0){
//     console.log("bu son 4 xonali va juft");
// }
// else if(son < 10000 && son % 2 !== 0){
//     console.log("bu son 4 xonali va toq");
// }
// else if(son >= 10000 && son % 2 == 0){
//     console.log("bu son 4 xonadan katta");
// }

// // 8-misol
// let son:number | null | undefined = Number(prompt("ixtiyoriy son kiriting"))

// if( son == 0){
//     console.log("bu son 0 ga teng");
// }
// else if( son % 2 != 0){
//     console.log( son);
// }

// else if(son % 2 == 0){
//     console.log( 0);
// }


// // 9-misol
// let birinchi:number | undefined | null = Number(prompt("1-sonni kiriting"))
// let ikkinchi:number | undefined | null = Number(prompt("2-sonni kiriting"))
// let uchinchi:number | undefined | null = Number(prompt("3-sonni kiriting"))

// let yigindi: number | null = birinchi + ikkinchi + uchinchi ;
// let natija:(number | undefined | null) = yigindi / 3
// console.log(natija);


// // 10-misol
// let son:number | null | undefined = Number(prompt("ixtiyoriy son kiriting"))

// if(son % 3 == 0 && son % 5 == 0){
//     console.log("FizzBuzz");
// }
// else if(son % 3 == 0){
//     console.log("Fizz");
// }
// else if(son % 5 == 0){
//     console.log("Buzz");
// }


// 2-vazifa 1-misol
// let son: number = Number(prompt("Ikki xonali son kiriting:"));
// let s: string = Math.abs(son).toString();

// let onlik:string | undefined | number = s[0];
// let birlik:string | undefined | number = s[1];

// if(onlik == birlik){
//     console.log("ikkalasi ham teng");
// }
// else{
//     console.log("Kattasi:", Math.max(onlik, birlik));
// }

// //2-misol
// let son:number | null | undefined = Number(prompt("ixtiyoriy son kiriting"))

// if( son == 0){
//     console.log("bu son 0 ga teng");
// }
// else if( son % 2 != 0){
//     console.log(son - 1);
// }

// else if(son % 2 == 0){
//     console.log(son + 1);
// }

// //3-misol
// let son:number | null | undefined = Number(prompt("ixtiyoriy son kiriting"))

// if(son < 0){
//     console.log("bu son manfiy");
// }
// else if(son % 3 == 0){
//     console.log("karrali");
// }
// else if(son % 3 !== 0){
//     console.log("karrasiz");
// }


// //4-misol
// let birinchi:number | undefined | null = Number(prompt("1-sonni kiriting"))
// let ikkinchi:number | undefined | null = Number(prompt("2-sonni kiriting"))

// if(birinchi == ikkinchi){
//     console.log(birinchi, ikkinchi);
// }
// else if(birinchi < ikkinchi){
//     console.log(birinchi, ikkinchi);
// }
// else if(birinchi > ikkinchi){
//     console.log(ikkinchi, birinchi);
// }


// //5-misol juda kop if else qildim, shu sababli: ai dan foydalanib, length orqali qilish mumkinligi esimga tushdi :)
// let son:number | undefined | null = Number(prompt("Ixtiyoriy son kiriting:"));

// let xonalar:number | undefined | null = Math.abs(son).toString().length;
// if(son < 0){
//     console.log("bu son manfiy");
// }
// else{
//     console.log("Bu son", xonalar, "xonali");
// }


// //6-misol
// let son:number | null | undefined = Number(prompt("ixtiyoriy son kiriting"))

// if(son < 0){
//     console.log("bu son manfiy");
// }
// else if(son > 0){
//     console.log("bu son musbat");
// }

// //7-misol
// let son:number | null | undefined = Number(prompt("ixtiyoriy son kiriting"))

// if(son < 0 && son % 2 !== 0){
//     console.log("bu son manfiy va toq");
// }
// if(son < 0 && son % 2 == 0){
//     console.log("bu son manfiy va juft");
// }
// else if(son > 0 && son % 2 !== 0){
//     console.log("bu son musbat va toq");
// }
// else if(son > 0 && son % 2 == 0){
//     console.log("bu son musbat va juft");
// }

// //8-misol agar shunchaki yoshni topish kerak bo'lsa:
// let yosh:number | undefined | null = Number(prompt("Tug'ilgan yilingizni kiriting"))
// let natija:number | undefined | null = 2025 - yosh
// console.log(natija);

// //8-misol agar yosh bo'yicha laqab qo'yish kerak bo'lsa
// let yosh: number | undefined | null = Number(prompt("Yoshingizni kiriting"))

// if (yosh < 0) {
//     console.log("Yoshingizni to'g'ri kiriting!");
// } 
// else if (yosh >= 0 && yosh <= 2) {
//     console.log("Siz go'daksiz asalim :)");
// } 
// else if (yosh >= 3 && yosh <= 9) {
//     console.log("Siz kichkina bolasiz");
// } 
// else if (yosh >= 10 && yosh <= 13) {
//     console.log("Siz o'smirinsiz :( ");
// } 
// else if (yosh >= 14 && yosh <= 16) {
//     console.log("Siz o'spirinsiz :( ");
// } 
// else if (yosh >= 17 && yosh <= 24) {
//     console.log("Haqiqiy hayotga endi qadam qo'ygan kichik odamsiz ");
// } 
// else if (yosh >= 25 && yosh <= 39) {
//     console.log("Opacha/amaki");
// } 
// else if (yosh >= 40 && yosh <= 54) {
//     console.log("Uje seryozniy odam");
// } 
// else if (yosh >= 55 && yosh <= 89) {
//     console.log("Avvalambor assalomu-alaykum :)");
// } 
// else if (yosh >= 90 && yosh <= 1000) {
//     console.log("Gap yo'q lekin, bosin");
// } 
// else {
//     console.log("Siz odam emassiz");
// }




// //9-misol
// let son:number | undefined | null = Number(prompt("ixtiyoriy son kiriting"))

// if(son < 0){
//     console.log("bu son manfiy");
// }
// else if(son == 3){
//     console.log("bu son 3 ga teng");
// }
// else if(son % 3 == 0){
//     console.log("ha");
// }
// else if(son % 3 !== 0){
//     console.log("yo'q");
// }

// //10-misol
// let birinchi: number | undefined | null = Number(prompt("1-sonni kiriting"));
// let ikkinchi: number | undefined | null = Number(prompt("2-sonni kiriting"));
// let uchinchi: number | undefined | null = Number(prompt("3-sonni kiriting"));

// const sonlar = [birinchi, ikkinchi, uchinchi];

// const saralangan = sonlar.sort((a, b) => a - b);

// const natijaStr = saralangan.join("");

// const uchXonaliSon = Number(natijaStr);
// console.log("Natija:", uchXonaliSon);



// //11-misol
// let son:number | undefined | null = Number(prompt("ixtiyoriy son kiriting"))

// const qoldiq = son % 2; 
// if(son % 2 == 0){
//     console.log("bu sonning qoldig'i mavjud emas");
// }
// else if (qoldiq % 2 === 0) {
//   console.log(`Qoldiq ${qoldiq} — juft`);
// }
// else {
//   console.log(`Qoldiq ${qoldiq} — toq`);
// }

