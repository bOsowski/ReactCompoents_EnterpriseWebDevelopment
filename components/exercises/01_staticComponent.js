import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h1>Enterprise Software Systems - Modules table</h1>
      <table class="table table-bordered">
        <tr>
          <th>Name</th>
          <th>No lectures</th>
          <th>No practicals</th>
        </tr>
        <tr>
          <th>Enterprise Software Systems</th>
          <th>2</th>
          <th>2</th>
        </tr>
        <tr>
          <th>Data Mining</th>
          <th>2</th>
          <th>2</th>
        </tr>
      </table>
    </div>
  );
};

export default Demo;
