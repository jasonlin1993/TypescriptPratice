// 基本類型

let str: string = "jason";
let num: number = 1000;
let n: null = null;
let un: undefined = undefined;
let test: any = true;

// 陣列

let arr: string[] = ["a", "b"];
let arr2: string[][] = [["aa", "bb"]];

// 元組
let tuple: [number, string, boolean] = [1, "a", true];

let tuple2: [string, string][] = [["a", "b"]];

// -----------  Enum 枚舉   ------------

// 開直播 api -> 獲取直播狀態
// 成功 失敗 直播中
// 0 -1 1

enum LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  STREAMING = 1,
}

const statusValue = LiveStatus.FAIL;
console.log(statusValue);

// -----------  Union   ------------

let unionValue: number | string;

unionValue = 1000;
unionValue = "test";

// -----------  type   ------------

type A = number | string;
type B = boolean | string;

let a1: A;

a1 = 999;
a1 = "string";

let b1: B;

b1 = true;
b1 = "sting";

// -----------  interface   ------------

interface user {
  name: string;
  age: number;
}

// -----------  Object 寫法 、type 與 interface 的區別   ------------

type Card = {
  name: string;
  desc: string;
};

interface Card2 {
  name: string;
  desc: string;
}

interface Card2 {
  age: string;
  city?: string; // 加問號變成可選擇輸入或是不用輸入
}

const obj1: Card = {
  name: "Jason",
  desc: "test",
};

const obj2: Card2 = {
  name: "Jason",
  desc: "test",
  age: "18",
  city: "Taichung",
};

// -----------  function   ------------

function stringValue(a: string, b: string) {
  return a + b;
}

function insertStringValue(a: number) {
  console.log(a);
}

function stringValue2(name: string, age?: number) {
  if (age === undefined) return -1;
  insertStringValue(age);
  return;
}

// -----------  箭頭函式   ------------

const func = () => {};

// -----------  unknown  斷言 ------------

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await res.json()) as Data;
}

const data1: Data = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

type Beta = {
  name: string;
};

// 假設 data1 是動態的
const beta = data1 as unknown as Beta;

// -----------  class  ------------

// private 私有
// public 公開
// protected 受保護

class Live {
  roomName: string;
  private id: string;
  protected name: string;

  constructor(roomName1: string, id1: string, name1: string) {
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
  constructor(roomName1: string, id1: string, name1: string) {
    super(roomName1, id1, name1);
  }
}

// 外層
const live = new Live("1號", "000001", "Jason");
const carLive = new CarLive("car room", "000002", "Kobe");

console.log("live", live);
console.log("carLive", carLive);

class Live2 {
  // 私有變數
  #name;
  constructor(name: string) {
    this.#name = name;
  }
}

const live2 = new Live2("live2");
console.log(live2);

// -----------  泛型 Generics  ------------
function print<T>(data: T) {
  console.log("data", data);
}

print<number>(5555);
print<string>("test");
print<boolean>(true);

class Print<T> {
  data: T;
  constructor(d: T) {
    this.data = d;
  }
}

const p = new Print<number>(999);
const p1 = new Print<string>("Jason");
console.log("p", p);
console.log("p1", p1);

// -----------  utility   ------------

// Record

type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

// Pick

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;

const todo: TodoPreview;
