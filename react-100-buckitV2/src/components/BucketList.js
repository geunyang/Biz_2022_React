import React from "react";
import BucketItem from "./BucketItem";

// 받을 수 있도록 props 에 bucket_flag_toggle setting
function BucketList(props) {
  const { bucketList, functions } = props;
  // 각각의 요소를 bucket에 담아서 내부의 함수에 전달
  // 리턴된 결과를 배열에 담아서 또다른??? 만들어냄
  /*
  bucketList 배열을 forEach 하여
  각 배열의 요소를 내부 함수로 전달하고
  내부 함수에서 연산을 수행한 후
  return을 하면 그 결과를 모두 모아서
  새로운 배열 bucketBody 를 만든다

  map 을 사용하여 List comps 를 구현할 때
  각 라인의 설정에 unique 적인 key 값을 지정해주어야 
  데이터를 rendering 할 때 효율적으로 설정 할 수 있다
  */
  // item 에게 bucket_flag_toggle 전달!
  const bucketBody = bucketList.map((bucket) => {
    return <BucketItem item={bucket} functions={functions} key={bucket.b_id} />;
  });
  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>중요도</th>
          <th>시작일</th>
          <th>Bucket</th>
          <th>완료일</th>
          <th>취소</th>
        </tr>
      </thead>
      <tbody>{bucketBody}</tbody>
    </table>
  );
}

export default BucketList;
