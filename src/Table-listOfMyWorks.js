import React, { Component } from 'react';
import './Table_list_Of_Works.css';


export default class Table_list_Of_My_Works extends Component {
  render() {
    return (
      <div className='MainTable'>
<table className='table-list'>
    <th>My Works</th>
  <tr>
    <td>&nbsp;</td>
    <td><b>Frontend-marathon<br></br> by Vladilen Minin </b></td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>1</td>
    <td><a href='' target='_blank'>Slider</a></td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
  </tr>
  <tr>
    <td>2</td>
    <td><a href='' target='_blank'>Slide-Show</a></td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>3</td>
    <td><a href='' target='_blank'>HoverPad</a></td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <td>4</td>
    <td><a href='' target='_blank'>Todo-List</a></td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
  <tr>
    <td>5</td>
    <td><a href='./src/Frontend-marathon/(AIM-GAME) Fifth project from Marathon/index.html' target='_blank'>AIM-Game</a></td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
        
      </div>
    )
  }
}
