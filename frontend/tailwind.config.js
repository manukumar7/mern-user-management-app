/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // enable dark mode with class strategy
    content: [
        "./src/**/*.{js,jsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                border: '#E5E7EB',
                input: '#F3F4F6',
                ring: '#D1D5DB',
                background: '#FFFFFF',
                foreground: '#111827',
                primary: {
                    DEFAULT: '#2563EB',
                    hover: '#1D4ED8',
                    foreground: '#FFFFFF'
                },
                secondary: {
                    DEFAULT: '#6B7280',
                    foreground: '#FFFFFF'
                },
                destructive: {
                    DEFAULT: '#DC2626',
                    foreground: '#FFFFFF'
                },
                muted: {
                    DEFAULT: '#F3F4F6',
                    foreground: '#6B7280'
                },
                accent: {
                    DEFAULT: '#F97316',
                    hover: '#EA580C',
                    foreground: '#FFFFFF'
                },
                success: {
                    DEFAULT: '#10B981',
                    foreground: '#FFFFFF'
                },
                warning: {
                    DEFAULT: '#F59E0B',
                    foreground: '#FFFFFF'
                },
                popover: {
                    DEFAULT: '#FFFFFF',
                    foreground: '#111827'
                },
                card: {
                    DEFAULT: '#FFFFFF',
                    foreground: '#111827'
                },
                sidebar: {
                    DEFAULT: '#1F2937',
                    foreground: '#F9FAFB',
                    primary: '#2563EB',
                    'primary-foreground': '#FFFFFF',
                    accent: '#F97316',
                    'accent-foreground': '#FFFFFF',
                    border: '#374151',
                    ring: '#2563EB'
                }
            },
            backgroundImage: {
                'gradient-hero': 'linear-gradient(90deg, #2563EB, #F97316)',
                'gradient-card': 'linear-gradient(135deg, #FFFFFF, #F3F4F6)'
            }
        },
        fontFamily: {
            'inter': ['Inter', 'Roboto', 'sans-serif'],
            'roboto': ['Roboto', 'Inter', 'sans-serif'],
            'sans': ['Inter', 'Roboto', 'system-ui', 'sans-serif']
        },
        keyframes: {
            'accordion-down': {
                from: { height: '0', opacity: '0' },
                to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
            },
            'accordion-up': {
                from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
                to: { height: '0', opacity: '0' }
            },
            'fade-in': {
                '0%': { opacity: '0', transform: 'translateY(10px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            'fade-out': {
                '0%': { opacity: '1', transform: 'translateY(0)' },
                '100%': { opacity: '0', transform: 'translateY(10px)' }
            },
            'scale-in': {
                '0%': { transform: 'scale(0.95)', opacity: '0' },
                '100%': { transform: 'scale(1)', opacity: '1' }
            },
            'slide-in-right': {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(0)' }
            },
            'pulse-soft': {
                '0%, 100%': { opacity: '1' },
                '50%': { opacity: '0.8' }
            },
            'shake': {
                '0%, 100%': { transform: 'translateX(0)' },
                '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
                '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' }
            }
        },
        animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'fade-in': 'fade-in 0.3s ease-out',
            'fade-out': 'fade-out 0.3s ease-out',
            'scale-in': 'scale-in 0.2s ease-out',
            'slide-in-right': 'slide-in-right 0.3s ease-out',
            'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'shake': 'shake 0.5s ease-in-out'
        },
        transitionProperty: {
            'smooth': 'var(--transition-smooth)',
            'fast': 'var(--transition-fast)'
        }
    },
},
    plugins: [],
}
