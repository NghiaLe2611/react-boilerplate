import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/lib/queryClient';
import { ThemeProvider } from '@/components/ThemeProvider';
import DemoPage from '@/components/DemoPage';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <div className="min-h-screen bg-background text-foreground">
                    <DemoPage />
                </div>
                {import.meta.env.DEV && (
                    <ReactQueryDevtools initialIsOpen={false} />
                )}
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
