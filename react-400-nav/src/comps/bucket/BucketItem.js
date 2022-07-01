import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

// props 로 부터 functions 을 분해하고
function BucketItem(props) {
  const { item, functions } = props;
  const {
    bucket_delete,
    bucket_flag_toggle,
    bucket_complete,
    bucket_item_edit,
  } = functions;
  /* 메인에서 함수 만들고 item 에서 사용중 변경은 만들어진곳에서

  react code 에서 component 간의 계층 구조는 매우 복잡
  복잡한 계층 구조에서 데이터의 CRUD 를 구현할때
  데이터를 표출하기 위하여 변수 = {값} 형식으로 자식 comp 에게 전달하고
  자식 comp 는 props 를 통해 데이터를 받아서 표출한다(보여주기만)
  이때 만약 자식 comp 에서 부모 comp 가 생성,선언한 state 변수를 변경해야하면
  부모 comp 에서 state 변수를 변경하는 함수를 함께 만들어
  자식 comp 에게 전달 해주어야한다

  지금 <td onClick = {()=>bucket_complete(id)}> 의 코드를 보면
  현재 화면(comp) 에 선언된 td 가 클릭 되었을 때 bucket_complete 함수를
  실행하고 있지만 이 함수는 BucketMain 에서 만들어 내려보낸 함수이다
  */
  const [bucket_IsEdit, setEdit] = useState(false);
  // 값을 반전시키는 코드(이해안감)
  const bucket_edit = (e) => {
    setEdit(!bucket_IsEdit);
  };

  const bucket_edit_complete = (e, id) => {
    if (e.keyCode === 13) {
      bucket_item_edit(id, e.target.value);
      setEdit(false);
    } else if (e.keyCode === 27) {
      //esc
      setEdit(false);
    }
  };

  // bucket_IsEdit true 이면 input box 보여주고 아니면 bucket 내용을 출력
  return (
    <tr className={item.b_end_date ? "cancel" : ""}>
      <td onClick={() => bucket_flag_toggle(item.b_id)}>
        {b_flag_text[item.b_flag % 4]}
      </td>
      <td>{item.b_start_date}</td>
      {bucket_IsEdit && item.b_end_date === "" ? (
        <td>
          <input
            defaultValue={item.b_bucket}
            onKeyDown={(e) => bucket_edit_complete(e, item.b_id)}
          />
        </td>
      ) : (
        <td onClick={bucket_edit}>{item.b_bucket}</td>
      )}
      <td onClick={() => bucket_complete(item.b_id)}>{item.b_end_date}</td>
      <td onClick={() => bucket_delete(item.b_id)}>&times;</td>
    </tr>
  );
}

/*
 event 핸들러에서 어떤 값을 전달하면서 실행하고자 할 때 다음과 같은 코드는 사용해서는 안된다
 <td onClick={bucket_complete(item.b_id)}></td>
 위의 코드는 event 와 관계없이 화면이 rendering 될때 내부의 함수가 실행되어 버린다

 event 핸들러에 어떤 값을 전달하면서 실행하기 위해서는
 한번 더 함수를 감싸줘야 한다
 <td onClick={()=>bucket_complete(item.b_id)}></td>
 */
export default BucketItem;
