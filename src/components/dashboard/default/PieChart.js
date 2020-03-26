import React, { Component } from 'react';
import {  Pie } from 'react-chartjs-2';
import 'chart.piecelabel.js';

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
        responsive: false,
        datasets: [
          {
            label: label,
            backgroundColor:'wheat',
            data: chartdata,
            color:'white',
            fill:true
          }
        ]
      }
      
    }
    const options = {
        chart: {
          width: 400,
          type: 'pie',
        },
        legend: {
          display: false,
      },
      pieceLabel: {
        render: 'label'
     }
  };
    return (
      <Pie data={data} options={options} height={height} />
    );
  }
}
