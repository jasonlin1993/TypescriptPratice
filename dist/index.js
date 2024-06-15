"use strict";
// 基本類型
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Live2_name;
let str = "jason";
let num = 1000;
let n = null;
let un = undefined;
let test = true;
// 陣列
let arr = ["a", "b"];
let arr2 = [["aa", "bb"]];
// 元組
let tuple = [1, "a", true];
let tuple2 = [["a", "b"]];
// -----------  Enum 枚舉   ------------
// 開直播 api -> 獲取直播狀態
// 成功 失敗 直播中
// 0 -1 1
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["STREAMING"] = 1] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
const statusValue = LiveStatus.FAIL;
console.log(statusValue);
// -----------  Union   ------------
let unionValue;
unionValue = 1000;
unionValue = "test";
let a1;
a1 = 999;
a1 = "string";
let b1;
b1 = true;
b1 = "sting";
const obj1 = {
    name: "Jason",
    desc: "test",
};
const obj2 = {
    name: "Jason",
    desc: "test",
    age: "18",
    city: "Taichung",
};
// -----------  function   ------------
function stringValue(a, b) {
    return a + b;
}
function insertStringValue(a) {
    console.log(a);
}
function stringValue2(name, age) {
    if (age === undefined)
        return -1;
    insertStringValue(age);
    return;
}
// -----------  箭頭函式   ------------
const func = () => { };
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = (yield res.json());
    });
}
const data1 = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
};
// 假設 data1 是動態的
const beta = data1;
// -----------  class  ------------
// private 私有
// public 公開
// protected 受保護
class Live {
    constructor(roomName1, id1, name1) {
        console.log("建立直播中....");
        this.roomName = roomName1;
        this.id = id1;
        this.name = name1;
    }
    start() {
        this.name;
    }
}
class CarLive extends Live {
    constructor(roomName1, id1, name1) {
        super(roomName1, id1, name1);
    }
}
// 外層
const live = new Live("1號", "000001", "Jason");
const carLive = new CarLive("car room", "000002", "Kobe");
console.log("live", live);
console.log("carLive", carLive);
class Live2 {
    constructor(name) {
        // 私有變數
        _Live2_name.set(this, void 0);
        __classPrivateFieldSet(this, _Live2_name, name, "f");
    }
}
_Live2_name = new WeakMap();
const live2 = new Live2("live2");
console.log(live2);
// -----------  泛型 Generics  ------------
function print(data) {
    console.log("data", data);
}
print(5555);
print("test");
print(true);
class Print {
    constructor(d) {
        this.data = d;
    }
}
const p = new Print(999);
const p1 = new Print("Jason");
console.log("p", p);
console.log("p1", p1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFDO0FBQzFCLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQztBQUN2QixJQUFJLENBQUMsR0FBUyxJQUFJLENBQUM7QUFDbkIsSUFBSSxFQUFFLEdBQWMsU0FBUyxDQUFDO0FBQzlCLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQztBQUVyQixLQUFLO0FBRUwsSUFBSSxHQUFHLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBSSxJQUFJLEdBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRXRDLEtBQUs7QUFDTCxJQUFJLEtBQUssR0FBOEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXRELElBQUksTUFBTSxHQUF1QixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFOUMsc0NBQXNDO0FBRXRDLG9CQUFvQjtBQUNwQixZQUFZO0FBQ1osU0FBUztBQUVULElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNiLGlEQUFXLENBQUE7SUFDWCw0Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtBQUNmLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBRUQsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXpCLG9DQUFvQztBQUVwQyxJQUFJLFVBQTJCLENBQUM7QUFFaEMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUNsQixVQUFVLEdBQUcsTUFBTSxDQUFDO0FBT3BCLElBQUksRUFBSyxDQUFDO0FBRVYsRUFBRSxHQUFH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