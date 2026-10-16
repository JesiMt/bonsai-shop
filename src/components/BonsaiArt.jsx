// Ilustración simple de un bonsái; el color del follaje viene del producto
export default function BonsaiArt({ color = '#3F6B4F' }) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Ilustración de bonsái" className="arte">
      <path d="M100 150 C96 120 108 105 98 82 C94 70 100 60 104 52" stroke="#4A3828" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M100 118 C122 112 132 100 140 92" stroke="#4A3828" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M98 100 C80 96 68 90 60 80" stroke="#4A3828" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="104" cy="46" rx="34" ry="20" fill={color} />
      <ellipse cx="142" cy="86" rx="26" ry="14" fill={color} opacity="0.9" />
      <ellipse cx="58" cy="76" rx="26" ry="14" fill={color} opacity="0.9" />
      <path d="M62 150 H138 L130 180 H70 Z" fill="#3E5C6B" />
      <rect x="58" y="146" width="84" height="8" rx="2" fill="#2F4856" />
    </svg>
  )
}
