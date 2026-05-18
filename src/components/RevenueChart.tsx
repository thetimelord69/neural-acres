'use client';

import { useEffect, useRef } from 'react';
import {
  Chart,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartConfiguration,
} from 'chart.js';

Chart.register(BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function RevenueChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'],
        datasets: [
          {
            label: 'Conservative (INR Lakhs)',
            data: [0, 0, 15.3, 16.2, 17.1, 18, 18, 18, 18, 18, 18, 18],
            backgroundColor: 'rgba(29,233,182,0.65)',
            borderColor: '#1de9b6',
            borderWidth: 1,
            borderRadius: 4,
          },
          {
            label: 'Premium (INR Lakhs)',
            data: [0, 0, 20.4, 21.6, 22.8, 24, 24, 24, 24, 24, 24, 24],
            backgroundColor: 'rgba(0,229,255,0.45)',
            borderColor: '#00e5ff',
            borderWidth: 1,
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: '#8ab4c8', padding: 14, font: { size: 11, family: 'JetBrains Mono, monospace' } },
          },
          tooltip: {
            backgroundColor: '#0f1e30',
            borderColor: 'rgba(29,233,182,0.3)',
            borderWidth: 1,
            titleColor: '#edf5ff',
            bodyColor: '#8ab4c8',
            callbacks: { label: ctx => ` INR ${ctx.raw}L` },
          },
        },
        scales: {
          x: {
            grid: { color: 'rgba(29,233,182,0.05)' },
            ticks: { color: '#3d6278', font: { size: 11 } },
          },
          y: {
            grid: { color: 'rgba(29,233,182,0.06)' },
            ticks: {
              color: '#3d6278',
              font: { size: 11 },
              callback: v => `INR ${v}L`,
            },
            beginAtZero: true,
          },
        },
      },
    };

    chartRef.current = new Chart(canvasRef.current, config);
    return () => {
      chartRef.current?.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}
