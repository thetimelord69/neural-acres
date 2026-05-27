'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const LOG_MESSAGES = [
  'Vision review: crop health nominal ✓',
  'Climate band stable ✓',
  'Air exchange within safe range — no action',
  'Humidity correction queued',
  'Anomaly review: all readings nominal',
  'Control checkpoint passed — event logged',
  'Vision audit: no contamination detected ✓',
  'Climate zone: minor correction applied',
  'Maintenance heartbeat: all systems nominal',
  'Batch telemetry committed',
];

function jitter(base: number, range: number) {
  return (base + (Math.random() - 0.5) * 2 * range).toFixed(1);
}

interface LogEntry { time: string; msg: string; }
interface Metrics  { temp: string; rh: string; co2: string; vision: string; }

export default function LiveDashboard() {
  const [clockStr, setClockStr] = useState('--:--:--');
  const [cycleDay, setCycleDay] = useState(23);
  const [metrics, setMetrics] = useState<Metrics>({
    temp: '18.3', rh: '89.7', co2: '738', vision: '94.2',
  });
  const [log, setLog] = useState<LogEntry[]>([
    { time: '14:32:07', msg: 'Humidity correction queued' },
    { time: '14:31:44', msg: 'Vision review: crop health nominal ✓' },
    { time: '14:30:02', msg: 'Air exchange within safe range — no action' },
    { time: '14:29:55', msg: 'Climate band stable ✓' },
  ]);
  const [logIdx, setLogIdx] = useState(0);
  const tickCountRef = useRef(0);

  const tick = useCallback(() => {
    const now = new Date();
    setClockStr(now.toLocaleTimeString('en-GB'));
    setMetrics({
      temp:   jitter(18.3, 0.2),
      rh:     jitter(89.7, 1.4),
      co2:    String(Math.floor(700 + Math.random() * 130)),
      vision: jitter(94.2, 1.8),
    });
    const msg = LOG_MESSAGES[logIdx % LOG_MESSAGES.length];
    const entry: LogEntry = { time: now.toLocaleTimeString('en-GB'), msg };
    setLog(prev => [entry, ...prev.slice(0, 3)]);
    setLogIdx(i => i + 1);
    tickCountRef.current += 1;
    if (tickCountRef.current % 15 === 0) {
      setCycleDay(d => Math.min(d + 1, 65));
    }
  }, [logIdx]);

  // Clock every second
  useEffect(() => {
    const id = setInterval(() => {
      setClockStr(new Date().toLocaleTimeString('en-GB'));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Metrics + log every 4s
  useEffect(() => {
    const id = setInterval(tick, 4000);
    return () => clearInterval(id);
  }, [tick]);

  const rows = [
    { label: 'Temperature',  val: `${metrics.temp}°C`,   pct: Math.round((parseFloat(metrics.temp) / 25) * 100), warn: false },
    { label: 'Humidity RH',  val: `${metrics.rh}%`,      pct: Math.round(parseFloat(metrics.rh)),                warn: false },
    { label: 'Air Quality',  val: `${metrics.co2} idx`,  pct: Math.round((parseInt(metrics.co2) / 900) * 100),   warn: parseInt(metrics.co2) > 850 },
    { label: 'Vision Score', val: `${metrics.vision}%`,  pct: Math.round(parseFloat(metrics.vision)),            warn: false },
  ];

  return (
    <div className="card border-teal-500/20 overflow-hidden shadow-teal-glow">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-5 py-3.5 bg-teal-500/6 border-b border-teal-500/12">
        <span className="w-2.5 h-2.5 rounded-full bg-teal-500 shadow-[0_0_8px_#1de9b6] live-dot flex-shrink-0" />
        <span className="font-mono text-xs text-silver-300 flex-1">Kryleos Atmos-OS · Build Dashboard</span>
        <span className="font-mono text-xs text-silver-500">{clockStr}</span>
      </div>

      {/* Metrics */}
      <div className="p-5 space-y-4 border-b border-teal-500/8">
        {rows.map(({ label, val, pct, warn }) => (
          <div key={label} className="grid grid-cols-[90px_1fr_76px_18px] items-center gap-3">
            <span className="text-silver-500 text-xs">{label}</span>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bar-fill ${
                  warn
                    ? 'bg-gradient-to-r from-orange-600 to-yellow-400'
                    : 'bg-gradient-to-r from-teal-700 to-teal-400'
                }`}
                style={{ width: `${Math.min(pct, 100)}%` }}
              />
            </div>
            <span className="font-mono text-xs text-silver-200 text-right">{val}</span>
            <span className={`text-xs text-center ${warn ? 'text-yellow-400' : 'text-teal-500'}`}>
              {warn ? '!' : '✓'}
            </span>
          </div>
        ))}
      </div>

      {/* Log */}
      <div className="px-5 py-4 space-y-0 border-b border-teal-500/8">
        {log.map(({ time, msg }, i) => (
          <div
            key={time + msg}
            className={`flex gap-3 text-xs py-2 border-b border-white/4 last:border-0 transition-opacity duration-500 ${
              i === 0 ? 'opacity-100' : 'opacity-60'
            }`}
          >
            <span className="font-mono text-silver-500 flex-shrink-0">{time}</span>
            <span className="text-silver-400">{msg}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-5 py-3 bg-black/20 text-xs text-silver-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 live-dot" />
          All Systems Nominal
        </span>
        <span>
          Cycle Day <strong className="text-silver-300">{cycleDay}</strong> / 65
        </span>
      </div>
    </div>
  );
}
