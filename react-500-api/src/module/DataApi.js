/*
fetch 함수를 사용하여 data.go.kr 의 API 연결하기
*/
const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "0Ld2VtHmJyiKd3%2FgonwdjB%2FdVHJv9eAlnUCtnU0TYl0fpHrSXzYlGEL7q95DvOuk3H72sCzvV%2B3QhzLpFCRJ6A%3D%3D";
const fetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`;
  const response = await fetch(serviceURL);
  console.log(serviceURL);
  const json = await response.json();
  return json;
};

export { fetchData };
