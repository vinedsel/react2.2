import React from "react";
import ReactDOM from "react-dom";

const stateInfo = (
  state,
  pop,
  cap,
  state1,
  pop1,
  cap1,
  state2,
  pop2,
  cap2,
  state3,
  pop3,
  cap3,
  state4,
  pop4,
  cap4
) => {
  return (
    <table>
      <tr>
        <th>
          {state}
        </th>
        <th>
          {pop}
        </th>
        <th>
          {cap}
        </th>
      </tr>
      <tr>
        <td>
          {state1}
        </td>
        <td>
          {pop1}
        </td>
        <td>
          {cap1}
        </td>
      </tr>
      <tr>
        <td>
          {state2}
        </td>
        <td>
          {pop2}
        </td>
        <td>
          {cap2}
        </td>
      </tr>
      <tr>
        <td>
          {state3}
        </td>
        <td>
          {pop3}
        </td>
        <td>
          {cap3}
        </td>
      </tr>
      <tr>
        <td>
          {state4}
        </td>
        <td>
          {pop4}
        </td>
        <td>
          {cap4}
        </td>
      </tr>
    </table>
  );
};


ReactDOM.render(
  stateInfo(
    'State',
    'Population',
    'Capital',
    'Idaho',
    '',
    'Boise',
    'Tennessee',
    '6.651 million',
    'Nashville',
    'Maine',
    '1.331 million',
    'Augusta',
    'Wisconsin',
    '5.779 million',
    'Madison'
  ),
  document.getElementById('root')
);
