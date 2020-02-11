import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = (props) => {
  const items = props.modules.map((item, key) =>
    <tr>
      <th>{item.name}</th>
      <th>{item.noLectures}</th>
      <th>{item.noPracticals}</th>
    </tr>
  );

  return (
    <div>
      <h1>{props.course}</h1>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
