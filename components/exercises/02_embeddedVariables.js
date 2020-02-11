import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const modules = [
  {
    name: "Enterprise Web Development",
    noLectures: 2,
    noPracticals: 3
  },
  {
    name: "Data Mining",
    noLectures: 3,
    noPracticals: 2
  }
]

const Demo = () => {
  return (
    <div>
      <h1>Enterprise Software Systems - Modules table</h1>
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
            <th>{modules[0].name}</th>
            <th>{modules[0].noLectures}</th>
            <th>{modules[0].noPracticals}</th>
          </tr>
          <tr>
            <th>{modules[1].name}</th>
            <th>{modules[1].noLectures}</th>
            <th>{modules[1].noPracticals}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
