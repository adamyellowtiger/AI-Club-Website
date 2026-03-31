export default function ByteBot(_a) {
    var _b = _a.className, className = _b === void 0 ? 'h-44 w-44' : _b, _c = _a.pose, pose = _c === void 0 ? 'wave' : _c;
    var armPath = pose === 'point'
        ? 'M224 188c20-4 36-16 46-32'
        : 'M224 188c12-6 24-14 32-28';
    return (<svg viewBox="0 0 320 320" className={className} role="img" aria-label="Byte the Bayview AI Club robot mascot">
      <defs>
        <linearGradient id="byteHead" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#dff0ff"/>
        </linearGradient>
      </defs>
      <circle cx="160" cy="160" r="144" fill="#eff7ff"/>
      <rect x="88" y="76" width="144" height="122" rx="38" fill="url(#byteHead)" stroke="#2e7de0" strokeWidth="8"/>
      <rect x="124" y="40" width="72" height="36" rx="16" fill="#2e7de0"/>
      <circle cx="160" cy="28" r="12" fill="#8ad2ff"/>
      <circle cx="128" cy="132" r="14" fill="#2e7de0"/>
      <circle cx="192" cy="132" r="14" fill="#2e7de0"/>
      <rect x="122" y="165" width="76" height="10" rx="5" fill="#5ba9ff"/>
      <rect x="108" y="210" width="104" height="70" rx="22" fill="#ffffff" stroke="#2e7de0" strokeWidth="8"/>
      <path d="M96 236c-20-1-36 14-39 34" stroke="#2e7de0" strokeWidth="10" strokeLinecap="round" fill="none"/>
      <path d={armPath} stroke="#2e7de0" strokeWidth="10" strokeLinecap="round" fill="none"/>
      <circle cx="262" cy="146" r="18" fill="#8ad2ff"/>
      <circle cx="262" cy="146" r="8" fill="#2e7de0"/>
    </svg>);
}
