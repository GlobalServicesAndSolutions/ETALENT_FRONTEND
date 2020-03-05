import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class Chart extends Component {
  render() {
    const {labels,label, borderColor, chartdata, pointBackgroundColor, height, pointBorderColor,shadowColor } = this.props;
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
        datasets: [
          {
            label: label,
            fill: true,
            tension: 0.40,
            fillOpacity: 0.3,
            borderColor: borderColor,
            borderWidth: '2',
            pointBorderColor: pointBorderColor,
            pointBackgroundColor: 'green',
            pointBorderWidth: '3',
            pointHoverBackgroundColor: pointBackgroundColor,
            pointHoverBorderColor: '#4CB050',
            pointHoverBorderWidth: '6',
            pointHoverRadius:'8',
            pointRadius: 3,
            backgroundColor:'lightblue',
            pointHitRadius: 8,
            data: chartdata,
          }
        ]
      }
    }

    const options = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            display: true,
            drawBorder: true,
            lineWidth:1,
          }
        }],

        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true
          }
        }]
      },
    };
    return (
      <Bar data={data} options={options} height={height} />
    );
  }
}
