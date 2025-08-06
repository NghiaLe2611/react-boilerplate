import { useUsers } from '@/services/userService';
import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function UsersList() {
    const { t } = useTranslation();
    const { data: users, isLoading, isError, error, refetch } = useUsers();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-8">
                <Loader2 className="h-6 w-6 animate-spin mr-2" />
                {t('common.loading')}
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center p-8">
                <p className="text-destructive mb-4">
                    {t('common.error')}: {error?.message}
                </p>
                <Button onClick={() => refetch()} variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Retry
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                    Users ({users?.length || 0})
                </h3>
                <Button onClick={() => refetch()} variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                </Button>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
                {users?.map((user) => (
                    <div key={user.id} className="p-4 border rounded-lg">
                        <h4 className="font-medium">{user.name}</h4>
                        <p className="text-sm text-muted-foreground">
                            {user.email}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {user.phone}
                        </p>
                        {user.website && (
                            <a
                                href={`https://${user.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline"
                            >
                                {user.website}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
