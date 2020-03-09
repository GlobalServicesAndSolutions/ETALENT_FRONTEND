import React, { Component } from 'react';
import {  Pie } from 'react-chartjs-2';

export default class PieChart extends Component {
  render() {
    const {labels,label, chartdata,  height, shadowColor } = this.props;
    const data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const _stroke = ctx.stroke;
      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = 13;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 12;
        _stroke.apply(this, arguments);
        ctx.restore();
      };
     
      return {
        labels:labels ,
        responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
        datasets: [
          {
            label: label,
            backgroundColor:['lightblue','red','green'],
            data: chartdata,
            
          }
        ]
      }
      
    }
    const options = {
        chart: {
          width: 380,
          type: 'pie',
        },
  };
    return (
      <Pie data={data} options={options} height={height} />
    );
  }
}
