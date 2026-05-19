'use client';

import { useEffect, useRef } from 'react';
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  type ChartConfiguration,
} from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

export default function CapexChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef  = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        labels: [
          'Facility & Compliance',
          'Climate Control (HVAC)',
          'Sterilization',
          'Production Hardware',
          'Genetics Lab',
          'AI & Compute',
          'Admin & OpEx',
        ],
        datasets: [{
          data: [20.10, 24.55, 9.70, 12.45, 8.90, 19.20, 16.00],
          backgroundColor: [
            'rgba(0,200,83,0.75)',
            'rgba(29,233,182,0.65)',
            'rgba(0,229,255,0.60)',
            'rgba(100,255,218,0.55)',
            'rgba(178,255,220,0.50)',
            'rgba(0,150,136,0.70)',
            'rgba(0,80,90,0.55)',
          ],
          borderColor: 'rgba(29,233,182,0.15)',
          borderWidth: 1,
          hoverOffset: 6,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '60%',
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#8ab4c8',
              padding: 10,
              font: { size: 11, family: 'JetBrains Mono, monospace' },
              boxWidth: 12,
              boxHeight: 12,
            },
          },
          tooltip: {
            backgroundColor: '#0f1e30',
            borderColor: 'rgba(29,233,182,0.3)',
            borderWidth: 1,
            titleColor: '#edf5ff',
            bodyColor: '#8ab4c8',
            callbacks: {
              label: ctx =>
                ` ₹${ctx.raw}L (${((Number(ctx.raw) / 110.90) * 100).toFixed(1)}%)`,
            },
          },
        },
      },
    };

    chartRef.current = new Chart(canvasRef.current, config);
    return () => { chartRef.current?.destroy(); };
  }, []);

  return <canvas ref={canvasRef} />;
}
