import React from "react";
let count = 0;
const TodoList = ({ data, onClick, handleRemove }) => {
  const onClickfunction = () => {
    count += 1;
    console.log(count, "before timeout");
    setTimeout(() => {
      console.log(count, "timeout");
      if (count === 1) {
        onClick(data.userId);
      } else if (count === 2) {
        handleRemove(data);
      }
      count = 0;
    }, 300);
  };

  return (
    <div>
      <ul class="list-group" key={data.id} onClick={onClickfunction}>
        <li class="list-group-item list-group-item-action">{data.title}</li>
      </ul>
    </div>
  );
};

export default TodoList;
