/* 
use* 로 시작되는 react 의 함수들을 hook 함수라고 한다
component lifecycle 과 관련된 함수들이다
state 만들거나, state 변화를 감시하거나
component 가 rendering 되는 시점에 무언가를 실행시키는 용도의 함수들이다
*/
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import moment from "moment";
import BucketList from "./BucketList";

/* component 의 본문 만들기
함수를 선언하고
함수에서 컴포넌트 코드를 return 한다
이때 return 내의 컴포넌트 tag 의 가장 바깥을 감싸서 
한개의 tag 로 묶어주어야한다
*/
const BucketMain = () => {
  // buckList state 변수를 배열로 선언하기
  /*
  buckList state 변수를 배열로 선언하여 사용할 경우
  표준 JS 코드에 있는 배열에 요소를 추가하는 함수를 사용할 수 없다
  state 배열에 요소를 추가하는 경우는 setter 함수를 사용하는데
  이 함수가 작동되는 방식은 
  기존의 배열을 새로운 배열로 복사하고, 요소를 추가한 후 
  새로운 배열과 기존의 배열을 교환하는 방식으로 이루어진다
  */
  const [bucketList, setBucketList] = useState(() => {
    /*
    현재 브라우저의 localStorage 에 BUCKETLIST 이름으로
    데이터가 저장되어 있으면 데이터를 읽어서
    json 데이터로 변환한 후 bucketList 를 생성
    없으면 빈(blank) 배열을 생성하라
    */
    const bucketBody = JSON.parse(localStorage.getItem("BUCKETLIST"));
    if (bucketBody) return bucketBody;
    else return [];
  });
  // bucketList 에 변화가 생기면 내부의 코드 실행 일종의 이벤트함수
  // localStorage 데이터를 JSON 타입으로 문자열 데이터로 바꿔서 BUCKETLIST라는 이름으로 bucketList 에 저장하라 기존의 데이터 덧씌워짐
  /*
  bucketList 데이터가 추가, 수정, 삭제 가 되면
  localStorage 에 BUCKETLIST 라는 이름으로
  json 데이터를 문자열로 변환하여 저장
  */
  useEffect(() => {
    localStorage.setItem("BUCKETLIST", JSON.stringify(bucketList));
  }, [bucketList]);

  // 불변개체
  // b_flag: 0, 변수와 값
  // 버킷을 입력한 후 버킷을 추가하는 함수
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const bucket = {
        b_id: uuid(), //uuid 사용하여 Bucket PK 생성
        b_flag: 0, // 중요도를 표시하는 데이터로 사용
        b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"), //등록날짜와시간동시에설정
        b_bucket: e.target.value,
        b_end_date: "",
      };
      setBucketList([...bucketList, bucket]);
      console.table(bucketList);
      // 입력문 클리어
      e.target.value = "";
    }
  }; //end onkeydown

  const bucket_delete = (id) => {
    const bucketRemoveList = bucketList.filter((bucket) => {
      return bucket.b_id !== id;
    });
    setBucketList(bucketRemoveList);
  }; // end bucket_delete

  // 중요도 칼럼을 클릭했을 때 중요도 항목을 변경할수 있도록
  // b_flag 변수값을 변경하는 함수
  const bucket_flag_toggle = (id) => {
    // map(forEach) 을 사용하여 전체 리스트를 반복하면서
    // id 가 일치하는 항목을 찾아 flag 값을 변경
    const bucketBody = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        /*
        기존의 bucket 을 모두 풀어놓고 새로운 bucket 을 만들어 추가

        원래의 bucket 데이터를 spread(펼치기) 하고
        b_flag 값만 원래의 b_flag 값에 1을 덧셈하여 변경해
        새로운 _temp_bucket 에 복제하라
        */
        const _temp_bucket = { ...bucket, b_flag: bucket.b_flag + 1 };
        // 복제한 _temp_bucket 을 return 하여 bucketBody 를 다시 작성한다
        return _temp_bucket;
      }
      // id 가 일치하지 않으면 원래의 데이터 return
      return bucket;
    }); // end map
    // 새로 생성된 bucketBody 로 기존 bucketList 배열을 교체
    setBucketList(bucketBody);
  }; //end bucket_flag_toggle

  const bucket_complete = (id) => {
    const bucketBody = bucketList.map((bucket) => {
      // 만약 bucket 의 e_end_date 가 비어 있으면 날짜값을 setting 하고 채워져있으면 비워서 e_date 에 담아라
      if (bucket.b_id === id) {
        const e_date = bucket.b_end_date
          ? ""
          : moment().format("YYYY[-]MM[-]DD HH:mm:ss");
        return { ...bucket, b_end_date: e_date };
      }
      return bucket;
    });
    setBucketList(bucketBody);
  }; // end bucket_complete

  const bucket_item_edit = (id, content) => {
    const bucketBody = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const _temp_bucket = { ...bucket, b_bucket: content };
        return _temp_bucket;
      }
      return bucket;
    });
    setBucketList(bucketBody);
  };

  // function. bucket_delete  라는 이름으로 bucket_delete를 저장하라 이름이 동일할때는 변수 명만 가지고 작성 가능
  // const functions = {
  //   bucket_delete: bucket_delete,
  //   bucket_flag_toggle: bucket_flag_toggle,
  //   bucket_complet: bucket_complet,
  // };

  /*
  json 의 속성변수 이름과 값(함수)이 일치할때는
  변수 명 만으로 json 객체를 선언할 수 있다
  */
  const functions = {
    bucket_delete,
    bucket_flag_toggle,
    bucket_complete,
    bucket_item_edit,
  };
  return (
    <>
      <div>
        <input
          onKeyDown={onKeyDown}
          placeholder="버킷에 추가할 내용을 입력하세요"
          className="w3-input w3-border w3-hover-gray w3-round"
        />
      </div>

      <div>
        <BucketList bucketList={bucketList} functions={functions} />
      </div>
    </>
  );
};

export default BucketMain;
