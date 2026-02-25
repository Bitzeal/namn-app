'use client';

import { useState } from 'react';
import Dialog from '@/components/Dialog';
import { Button } from '@/components/Button';

const SWEDISH_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ';

const ACCENT_MAP: Record<string, string> = {
  'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A',
  'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E',
  'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I',
  'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O',
  'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U',
  'Ñ': 'N', 'Ý': 'Y', 'Ÿ': 'Y', 'Ç': 'C',
  'Ð': 'D', 'Ś': 'S', 'Š': 'S', 'Ź': 'Z', 'Ž': 'Z',
  'Ł': 'L', 'Ń': 'N', 'Ř': 'R', 'Ť': 'T',
};

function normalizeAccents(text: string): string {
  return [...text].map(ch => ACCENT_MAP[ch] ?? ch).join('');
}

function calculateCoverage(name: string): number {
  const normalized = normalizeAccents(name.toUpperCase());
  const distinct = new Set(
    [...normalized].filter(ch => SWEDISH_ALPHABET.includes(ch))
  );
  return Math.round((distinct.size / SWEDISH_ALPHABET.length) * 1000) / 10;
}

export default function Home() {
  const [name, setName] = useState('');
  const [result, setResult] = useState<number | null>(null);

  function handleGo() {
    if (name.trim().length === 0) return;
    setResult(calculateCoverage(name));
  }

  function handleClear() {
    setName('');
    setResult(null);
  }

  return (
    <Dialog title="Namnkollen" width="w-full max-w-md">
      {result === null ? (
        <div className="flex flex-col items-center">
          <p className="text-text text-standard mb-4">Vad är ditt namn?</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGo()}
            className="block w-full p-2.5 mt-2.5 mb-5 text-background font-primary bg-text rounded-[0.25em]"
            autoFocus
          />
          <Button onClick={handleGo} size="md">GO</Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <p className="text-textsecondary text-standard">{name}</p>
          <p className="text-text text-standard">täcker</p>
          <p className="text-primary text-large">{result}%</p>
          <p className="text-textsecondary text-small text-center">av svenska alfabetet</p>
          <Button onClick={handleClear} size="md">CLEAR</Button>
        </div>
      )}
    </Dialog>
  );
}
