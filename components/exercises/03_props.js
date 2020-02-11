import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = (props) => {
  var items = props.modules.map((item, key) =>
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
          <tr>
            <th>{props.modules[0].name}</th>
            <th>{props.modules[0].noLectures}</th>
            <th>{props.modules[0].noPracticals}</th>
          </tr>
          <tr>
            <th>{props.modules[1].name}</th>
            <th>{props.modules[1].noLectures}</th>
            <th>{props.modules[1].noPracticals}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
