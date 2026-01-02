//C TASK
/*const moment = require("moment");
class shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola
    }

    qoldiq() {
        console.log(`Hozir ${moment().format('LTS')} da, ${this.non} ta non, ${this.lagmon} ta lag'mon va ${this.cola} dona Coca-Cola mavjud.`);
    };

    sotish(nomi, soni) {
        switch (nomi) {
            case "non":
                if (this.non >= soni) this.non -= soni;
                else { console.log("yetarli Non yo'q!"); }
                break;
            
            case "lagmon":
                if (this.lagmon >= soni) this.lagmon -= soni;
                else { console.log("yetarli Lag'mon yo'q!"); }
                break;
            
            case "cola":
                if (this.cola >= soni) this.cola -= soni;
                else { console.log("yetarli Coca-Cola yo'q!"); }
                break;
            
            default:
                console.log("Bunday mahsulot mavjud emas!");        
        }

        console.log(`${moment().format('LTS')}
        da ${soni} ta ${nomi} sotildi!`);
    };

    qabul(nomi, soni) {
        switch (nomi) {
            case "non":
                this.non += soni;
                break;
         
            case "lagmon":
                this.lagmon += soni;
                break;
         
            case "cola":
                this.cola += soni;
                break;
         
            default:
                console.log("Bunday mahsulot mavjud emas!");
        }
        console.log(`${moment().format('LTS')} da
        ${soni} ta ${nomi} qabul qilindi!`);
    };
}
const myShop = new shop();
myShop.qoldiq();

console.log('====================================');
myShop.qabul();
console.log('====================================');
myShop.sotish()
console.log('====================================');
myShop.qoldiq();*/

//B TASK

// 1-yechim
/*
const stringKiriting = "dhj88898hd9s00fh-0kj8u";

const digitsArray = stringKiriting.match(/\d/g) || [];
const count = digitsArray.length;

console.log(`Stringda raqamlar soni ${count} dona`);
console.log(`bular quyidagilar:${digitsArray}`);*/
// 2-yechim
/*
let count = 0;
const string = "dhj88898hdsfhkju"

for (const ele of string) {
    if(!isNaN(ele)) count++
}
console.log(count);*/

//A TASK:

/*
function counter(word, search) {
    let sanoq = 0;
    word = word.toLowerCase();
    search = search.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    let qism = "";

    for (let j = 0; j < search.length; j++) {
      qism = qism + word[i + j];
    }

      if (qism === search) {
        sanoq++;  
      }
  }
    return sanoq;
}

let asosiyQiymatniKiriting = "Banana";
let qidiruvQiymatiniKiriting = "na";

let umumiylikSoni = counter(asosiyQiymatniKiriting, qidiruvQiymatiniKiriting);
  if (umumiylikSoni === 0) {
  console.log("Siz kiritgan qiymatlarda umumiylik mavjud emas")
} else {
  console.log(`Siz kiritgan ${asosiyQiymatniKiriting} qiymatida ${qidiruvQiymatiniKiriting}, ${umumiylikSoni} dona mavjud`)
};*/

// Video 1:
/*
console.log("Jek Ma maslahatlari")
const list = [
    "yaxshi talaba bo'ling.", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xato qiling.", //20-30
    "O'zingizga ishlashni boshlang", //30-40
    "Siz kuchli bo'lgan narsalarni qiling", //40-50
    "Yoshlarga investitsiya qiling", //50-60
    "Endi dam oling, foydasi yo'q", //60+
]

function maslahatBering(a, callback) {
    if (typeof a !== "number" || a <= 0) callback('Musbat raqam kiriting!', null);
    else if (a > 0  && a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(function () {
            callback(null, list[5]);

        }, 5000);
    }
}
console.log("passed here 0");
maslahatBering(-10, (err, data) => {
    if (err) console.log("ERROR:", err);
    else {
        console.log("javob:", data)
    }
});
console.log("passed here 1")*/

// Video 2:

// async function
/*
async function maslahatBering(a) {
    if (typeof a !== "number" || a <= 0) throw new Error('Musbat son kiriting!');
    else if (a > 0  && a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
        return new promise((resolve, reject) => {
            //     setTimeout(() => {
            //         resolve(list[5]);
            //     }, 5000)
            // });
            setInterval(() => {
                resolve(list[5]);
            }, 1000);
        });

// setTimeout(function () {
//     callback(null, list[5]);
// }, 5000);
    }
}
*/

//.then/.catch
/* 
console.log("passed here 0");
 maslahatBering(10)
     .then((data) => {
         console.log("javob:", data);
     })
*/

//Promise hell
/*
         maslahatBering(30);
       .then((data) => {
                maslahatBering(40)
                    .then((data) => {
                        console.log("javob:", data);
                    });
                .catch ((err) => {
                    console.log("ERROR:", err);
                });
        console.log("passed here 1");
        console.log("javob:", data);
}); 
*/

// right way
/*
     .catch ((err) => {
     console.log("ERROR:", err);
     });
 console.log("passed here 1")
 */

//async/await
/*
async function run() {
    let javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(70);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
};
run();
*/

//CALLBACK with setInterval
/* 
console.log("Jek Ma maslahatlari")
const list = [
    "yaxshi talaba bo'ling.", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xato qiling.", //20-30
    "O'zingizga ishlashni boshlang", //30-40
    "Siz kuchli bo'lgan narsalarni qiling", //40-50
    "Yoshlarga investitsiya qiling", //50-60
    "Endi dam oling, foydasi yo'q", //60+
];

function maslahatBering(a, callback) {
    if (typeof a !== "number" || a <= 0) callback('Musbat raqam kiriting!', null);
    else if (a > 0  && a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
            callback(null, list[5]);

        }, 1000);
    }
}
console.log("passed here 0");
maslahatBering(75, (err, data) => {
    if (err) console.log("ERROR:", err);
    else {
        console.log("javob:", data)
    }
});
console.log("passed here 1") 
*/