import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function WeeklyActivity() {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Withdraw',
        data: [400, 300, 200, 450, 180, 300, 400],
        backgroundColor: '#232323',
        barThickness: 25,
        borderRadius: 30,
        borderSkipped: false,
        maxBarThickness: 15
      },
      {
        label: 'Deposit',
        data: [200, 150, 300, 250, 220, 280, 300],
        backgroundColor: '#396AFF',
        barThickness: 25,
        borderRadius: 30,
        borderSkipped: false,
        maxBarThickness: 15
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: true
        },
        ticks: {
          stepSize: 100
        }
      },
      x: {
        grid: {
          display: false
        },
        categoryPercentage: 0.1,
        barPercentage: 0.3
      }
    },

    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      }
    }
  };

  return (
    <div className="h-[332px]">
      <Bar data={data} options={options} />
    </div>
  );
}

export function BalanceHistory() {
  const data = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        fill: true,
        label: 'Balance',
        data: [100, 700, 200, 500, 100, 600, 350],
        borderColor: '#1814F3',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        borderWidth: 4,
        pointRadius: 0,
        pointHoverRadius: 0
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true
        },
        ticks: {
          stepSize: 200
        }
      },
      x: {
        grid: {
          display: true
        }
      }
    }
  };

  return (
    <div className="h-[276px]">
      <Line data={data} options={options} />
    </div>
  );
}

export function ExpenseStats() {
  const data = {
    labels: ['Bill Expense', 'Entertainment', 'Investment', 'Others'],
    datasets: [
      {
        data: [15, 35, 20, 30],
        backgroundColor: ['#f97316', ' #1f2937', '#396AFF', '#343C6A'],
        borderWidth: 0,
        spacing: 7,
        offset: 5
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: true,
        align: 'bottom',
        backgroundColor: '#ccc',
        borderRadius: 3,
        font: {
          size: 18
        }
      },
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 10
        }
      }
    }
  };

  return (
    <div className="h-[332px]">
      <Pie data={data} options={options} />
    </div>
  );
}
