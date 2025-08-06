import { useTranslation } from 'react-i18next';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Laptop, Languages } from 'lucide-react';
import DemoForm from '@/components/DemoForm';
import UsersList from '@/components/UsersList';

export default function DemoPage() {
    const { t, i18n } = useTranslation();
    const { theme, setTheme } = useTheme();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    const getThemeIcon = () => {
        switch (theme) {
            case 'light':
                return <Sun className="h-4 w-4" />;
            case 'dark':
                return <Moon className="h-4 w-4" />;
            default:
                return <Laptop className="h-4 w-4" />;
        }
    };

    const cycleTheme = () => {
        const themes: Array<'light' | 'dark' | 'system'> = [
            'light',
            'dark',
            'system',
        ];
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold">{t('common.welcome')}</h1>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={cycleTheme}>
                        {getThemeIcon()}
                    </Button>
                    <Button variant="outline" onClick={toggleLanguage}>
                        <Languages className="h-4 w-4 mr-2" />
                        {i18n.language === 'en' ? 'ES' : 'EN'}
                    </Button>
                </div>
            </header>

            {/* Tech Stack Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">State Management</h3>
                    <p className="text-sm text-muted-foreground">
                        Zustand for global state
                    </p>
                </div>
                <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Data Fetching</h3>
                    <p className="text-sm text-muted-foreground">
                        TanStack Query + Axios
                    </p>
                </div>
                <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Forms</h3>
                    <p className="text-sm text-muted-foreground">
                        React Hook Form + Zod
                    </p>
                </div>
                <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Styling</h3>
                    <p className="text-sm text-muted-foreground">
                        Tailwind CSS v3
                    </p>
                </div>
                <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">UI Components</h3>
                    <p className="text-sm text-muted-foreground">shadcn/ui</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Internationalization</h3>
                    <p className="text-sm text-muted-foreground">i18next</p>
                </div>
            </div>

            {/* Demo Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        {t('demo.title')}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        {t('demo.description')}
                    </p>
                    <DemoForm />
                </div>

                {/* Users List */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        API Integration Demo
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        Fetching data using TanStack Query and Axios
                    </p>
                    <UsersList />
                </div>
            </div>
        </div>
    );
}
