import { styled } from "styled-components";

export const Filter = styled.div`
  width: 300px;
  font-family: "Whitney", sans-serif;
  border-radius: 20px;

  .filterBox {
    position: sticky;
    top: 100px;
  }
  p {
    padding: 0 10px;
  }
  p,
  li {
    font-weight: bold;
    line-height: 35px;
    font-size: 12px;
  }
  .title {
    color: #fff;
    background-color: var(--colorPrimary);
    border-radius: 20px 20px 0px 0px;
    font-size: 18px;
    font-weight: 500;
    box-shadow: -3px -2px 9px 0px rgba(0, 0, 0, 0.14);
  }
  .title_items {
    color: #94a4c3;
    cursor: pointer;
    position: relative;
    background-color: #fff;
    border-bottom: 1px solid #e4effd;
    box-shadow: -3px 3px 9px 0px rgba(0, 0, 0, 0.14);
    font-size: 16px;
    padding: 3px 10px;
    -webkit-transition: 0.2s linear background-color;
    -moz-transition: 0.2s linear background-color;
    -o-transition: 0.2s linear background-color;
    transition: 0.2s linear background-color;
  }

  .title_items:hover {
    background-color: #f4f4f4;
  }
  .title_items.active + ul + .title_items {
    border-top: 1px solid #e4effd;
  }
  .title_items.active:after {
    height: 5px;
    width: 5px;
    right: 14px;
    margin-top: -2.5px;
  }
  .title_items:before,
  .title_items:after {
    content: "";
    position: absolute;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    background-color: #c3d0e8;
    -webkit-transition: 0.3s linear all;
    -moz-transition: 0.3s linear all;
    -o-transition: 0.3s linear all;
    transition: 0.3s linear all;
  }
  .title_items:before {
    height: 5px;
    width: 13px;
    top: 50%;
    right: 10px;
    margin-top: -2.5px;
  }
  .title_items:after {
    height: 13px;
    width: 5px;
    top: 50%;
    right: 14px;
    margin-top: -6.5px;
  }
  & ul:nth-child(5) {
    border-radius: 0px;
  }

  ul {
    -webkit-transition-property: all;
    -moz-transition-property: all;
    -o-transition-property: all;
    transition-property: all;
    -webkit-transition-timing-function: linear;
    -moz-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
    border-radius: 0 0 20px 20px;
  }
  ul li {
    height: 0;
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    color: #92a5bf;
    background-color: transparent;
    -webkit-transition: 0.2s linear all;
    -moz-transition: 0.2s linear all;
    -o-transition: 0.2s linear all;
    transition: 0.2s linear all;
    font-size: 16px;
  }
  ul li:nth-child(odd) {
    -webkit-transform: scale(0.5) translateX(-150px);
    -moz-transform: scale(0.5) translateX(-150px);
    -ms-transform: scale(0.5) translateX(-150px);
    -o-transform: scale(0.5) translateX(-150px);
    transform: scale(0.5) translateX(-150px);
  }
  ul li:nth-child(even) {
    -webkit-transform: scale(0.5) translateX(150px);
    -moz-transform: scale(0.5) translateX(150px);
    -ms-transform: scale(0.5) translateX(150px);
    -o-transform: scale(0.5) translateX(150px);
    transform: scale(0.5) translateX(150px);
  }
  ul li.visible {
    height: 36px;
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
    opacity: 1;
    -webkit-transform: scale(1) translateX(0);
    -moz-transform: scale(1) translateX(0);
    -ms-transform: scale(1) translateX(0);
    -o-transform: scale(1) translateX(0);
    transform: scale(1) translateX(0);
  }
  ul li:last-child label {
    border-bottom: none;
  }
  ul li:nth-child(1) label:before,
  ul li:nth-child(1) label:after {
    border-color: #5db6e2;
  }
  ul li:nth-child(2) label:before,
  ul li:nth-child(2) label:after {
    border-color: #c0a2f1;
  }
  ul li:nth-child(3) label:before,
  ul li:nth-child(3) label:after {
    border-color: #f7a238;
  }
  ul li:nth-child(4) label:before,
  ul li:nth-child(4) label:after {
    border-color: #f6d04d;
  }
  ul li:nth-child(5) label:before,
  ul li:nth-child(5) label:after {
    border-color: #40c9a1;
  }
  ul li:nth-child(6) label:before,
  ul li:nth-child(6) label:after {
    border-color: #ea8b8b;
  }
  ul li:nth-child(7) label:before,
  ul li:nth-child(7) label:after {
    border-color: #fe8ae0;
  }
  ul li:nth-child(8) label:before,
  ul li:nth-child(8) label:after {
    border-color: #abb6d2;
  }
  ul li:nth-child(9) label:before,
  ul li:nth-child(9) label:after {
    border-color: #ff5733;
  }
  ul li:nth-child(10) label:before,
  ul li:nth-child(10) label:after {
    border-color: #42a5f5;
  }
  ul li:nth-child(11) label:before,
  ul li:nth-child(11) label:after {
    border-color: #66bb6a;
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:checked + label:after {
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
    opacity: 1;
  }
  label {
    margin: 0 15px;
    display: block;
    cursor: pointer;
    position: relative;
    padding: 0 10px 0 25px;
    border-bottom: 1px solid #ddebfd;
    text-transform: capitalize;
  }
  label:before {
    content: "";
    height: 10px;
    width: 10px;
    top: 50%;
    left: 0;
    margin-top: -9px;
    position: absolute;
    border-width: 3px;
    border-style: solid;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
  }
  label:after {
    content: "";
    top: 50%;
    left: 5px;
    margin-top: -4px;
    position: absolute;
    border-width: 3px;
    border-style: solid;
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition: 0.2s linear all;
    -moz-transition: 0.2s linear all;
    -o-transition: 0.2s linear all;
    transition: 0.2s linear all;
  }

  ul {
    margin-bottom: 0px;
    list-style: none;
    padding-left: 0px;
    margin: 0px;
  }
  .title_items {
    margin: 0px;
  }
  p.title {
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
  }

`;