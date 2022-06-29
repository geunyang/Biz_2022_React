const json_array = [];

for (let i = 0; i < 10; i++) {
  const min = 10;
  const max = 100;
  const rnd = Math.floor(Math.random() * (max - min) + min);

  // 배열 요소 추가하는 함수 오류잦음
  json_array.push(rnd);
}
console.log(json_array);
/*
js 에서 기존의 배열을 새로운 배열로 복제 하는 경우가 자주 발생한다
요소값이 없으면 새롭게 add 해 오류가 일어나지 않는다
*/
const new_array1 = json_array.slice();
const new_array2 = Array.from(json_array);
const new_array3 = [];
for (let i = 0; i < json_array.length; i++) {
  new_array3[i] = json_array[i];
}
console.log(new_array3);

const new_array4 = json_array.concat();
console.log(new_array4);

const new_array5 = json_array.map((item) => {
  return item;
});
// spread(확장, 펼치기)
/*
가장 빠른 배열 처리법
json array 배열 전체를 펼쳐서 각각의 요소를 new_array6 에 복제하라
*/
const new_array6 = [...json_array];
// new_array7에 json_array 를 복제하고 3, 4, 5, 6, 7, 8을 추가하라
const new_array7 = [...json_array, [3, 4, 5, 6, 7, 8]];
console.log(new_array7);

const book = {
  title: "자바",
  author: "홍길동",
  comp: "영진출판사",
  price: 25000,
};
// book 객체에 새로운 속성을 추가하면 json 자체가 변경됨
// react에서 state 를 이런 식으로 변경하면 화면 폭주가 일어나는 코드
/* book JSON 객체에 없던 lang 이라는 속성에 값을 저장하는 코드를 작성하면
lang 속성을 추가하면서 book JSON 객체가 변경되어 버린다
객체의 속성이 추가, 변경 되는것은 문제를 일으킬 가능성이 높다
*/
book.lang = "korea";
console.log(book);
/*
JS 에서 JSON, 배열 데이터를 다룰 때 값 변경이 필요하면
기존 JSON, 배열을 변경하지 말고 변경 내용으로 새로운 JSON, 배열을 생성하여 
데이터를 복제하고 생성한 JSON,배열의 내용을 변경하여 사용하도록 권장된다
*/

// 기존의 book JSON 객체를 spread 하여 book1 에 복제하기
const book1 = { ...book };
const book2 = {
  title: book.title,
  author: book.author,
  comp: book.comp,
  price: book.price,
};

// 문법상 오류는 없으나 객체값 변경시 다른 객체까지 영향끼침
const book3 = book;

// 원래의 bookjson 을 펼쳐서 복제하면서 title 만 MySQL 로 변경하여 새로운 json 객체 생성
const book4 = { ...book, title: "MySQL" };
console.log("book", book);
console.log("book4", book4);

// book JSON 을 복제하면서 discount 라는 속성을 값 10000으로 세팅하여 추가하고 새로운 book5 JSON 을 생성
const book5 = { ...book, discount: 10000 };
console.log("book", book);
console.log("book5", book5);

// book JSON 을 spread 하면서 동시에 변수 생성하고 book 의 값을 뽑아냄
const { title, author, price, comp } = book;
/*
아래와 같은 코드를 spread 를 이용해 한줄로 줄임

const title = book.title;
const author = book.title;
const price = book.price;
const comp = book.comp;
*/

const books = ["자바", "오라클", "MySQL"];
const [자바, 오라클, MySQL] = books;
/*
배열을 순수대로 하나씩 추출하여 ???
const 자바 = books[0]
const 오라클 = books[1]
const MySQL = books[2]
*/
// const 값이변하지 않길 바라면서 사용?
