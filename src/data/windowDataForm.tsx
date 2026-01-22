export const windowDataForm = [
    {
        id: 1,
        name: 'Прямой',
        svg: 'M10 10 L90 10 L90 90 L10 90 Z M30 10 L30 90 M60 10 L60 90',
        preview: (
            <svg viewBox="0 0 400 280" className="w-full drop-shadow-lg">
                <rect x="20" y="20" width="360" height="240" fill="white" stroke="#cbd5e1" strokeWidth="4" rx="4"/>
                <rect x="30" y="30" width="80" height="220" fill="url(#skyGradient)" stroke="#94a3b8" strokeWidth="2"/>
                <rect x="120" y="30" width="80" height="220" fill="url(#skyGradient)" stroke="#94a3b8" strokeWidth="2"/>
                <rect x="210" y="30" width="80" height="220" fill="url(#skyGradient)" stroke="#94a3b8" strokeWidth="2"/>
                <rect x="300" y="30" width="70" height="220" fill="url(#skyGradient)" stroke="#94a3b8" strokeWidth="2"/>
                <rect x="60" y="135" width="4" height="20" fill="#64748b" rx="2"/>
                <rect x="150" y="135" width="4" height="20" fill="#64748b" rx="2"/>
                <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.8"/>
                    </linearGradient>
                </defs>
            </svg>
        )
    },
    {
        id: 2,
        name: 'С выносом',
        svg: 'M10 10 L70 10 L70 90 L10 90 Z M40 10 L40 90 M70 10 L90 30 L90 90 L70 90',
        preview: (
            <svg viewBox="0 0 400 280" className="w-full drop-shadow-lg">
                <rect x="20" y="20" width="260" height="240" fill="white" stroke="#cbd5e1" strokeWidth="4" rx="4"/>
                <polygon points="280,20 380,60 380,260 280,260" fill="white" stroke="#cbd5e1" strokeWidth="4"/>
                <rect x="30" y="30" width="120" height="220" fill="url(#skyGradient2)" stroke="#94a3b8"
                      strokeWidth="2"/>
                <rect x="160" y="30" width="110" height="220" fill="url(#skyGradient2)" stroke="#94a3b8"
                      strokeWidth="2"/>
                <polygon points="290,60 370,90 370,250 290,250" fill="url(#skyGradient2)" stroke="#94a3b8"
                         strokeWidth="2"/>
                <rect x="80" y="135" width="4" height="20" fill="#64748b" rx="2"/>
                <defs>
                    <linearGradient id="skyGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.8"/>
                    </linearGradient>
                </defs>
            </svg>
        )
    },
    {
        id: 3,
        name: 'Угловой',
        svg: 'M10 10 L50 10 L50 50 L90 50 L90 90 L10 90 Z M30 10 L30 50 M50 70 L90 70',
        preview: (
            <svg viewBox="0 0 400 280" className="w-full drop-shadow-lg">
                <rect x="20" y="20" width="180" height="120" fill="white" stroke="#cbd5e1" strokeWidth="4" rx="4"/>
                <rect x="20" y="140" width="360" height="120" fill="white" stroke="#cbd5e1" strokeWidth="4" rx="4"/>
                <rect x="30" y="30" width="80" height="100" fill="url(#skyGradient3)" stroke="#94a3b8" strokeWidth="2"/>
                <rect x="120" y="30" width="70" height="100" fill="url(#skyGradient3)" stroke="#94a3b8"
                      strokeWidth="2"/>
                <rect x="30" y="150" width="110" height="100" fill="url(#skyGradient3)" stroke="#94a3b8"
                      strokeWidth="2"/>
                <rect x="150" y="150" width="110" height="100" fill="url(#skyGradient3)" stroke="#94a3b8"
                      strokeWidth="2"/>
                <rect x="270" y="150" width="100" height="100" fill="url(#skyGradient3)" stroke="#94a3b8"
                      strokeWidth="2"/>
                <defs>
                    <linearGradient id="skyGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.8"/>
                    </linearGradient>
                </defs>
            </svg>
        )
    },
    {
        id: 4,
        name: 'Эркер',
        svg: 'M20 10 L80 10 L95 30 L95 90 L5 90 L5 30 Z M35 10 L20 30 M65 10 L80 30 M50 10 L50 90',
        preview: (
            <svg viewBox="0 0 400 280" className="w-full drop-shadow-lg">
                <polygon points="80,20 320,20 380,80 380,260 20,260 20,80" fill="white" stroke="#cbd5e1"
                         strokeWidth="4"/>
                <polygon points="90,30 170,30 120,70" fill="url(#skyGradient4)" stroke="#94a3b8" strokeWidth="2"/>
                <rect x="120" y="70" width="80" height="180" fill="url(#skyGradient4)" stroke="#94a3b8"
                      strokeWidth="2"/>
                <rect x="210" y="70" width="80" height="180" fill="url(#skyGradient4)" stroke="#94a3b8"
                      strokeWidth="2"/>
                <polygon points="230,30 310,30 280,70" fill="url(#skyGradient4)" stroke="#94a3b8" strokeWidth="2"/>
                <rect x="160" y="155" width="4" height="20" fill="#64748b" rx="2"/>
                <defs>
                    <linearGradient id="skyGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.8"/>
                    </linearGradient>
                </defs>
            </svg>
        )
    }
];
