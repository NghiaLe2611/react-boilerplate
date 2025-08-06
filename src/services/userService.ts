import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

export interface CreateUserData {
    name: string;
    email: string;
    phone: string;
    website: string;
}

// Query keys
export const userKeys = {
    all: ['users'] as const,
    lists: () => [...userKeys.all, 'list'] as const,
    list: (filters: string) => [...userKeys.lists(), { filters }] as const,
    details: () => [...userKeys.all, 'detail'] as const,
    detail: (id: number) => [...userKeys.details(), id] as const,
};

// API functions
const fetchUsers = async (): Promise<User[]> => {
    const { data } = await api.get<User[]>('/users');
    return data;
};

const fetchUser = async (id: number): Promise<User> => {
    const { data } = await api.get<User>(`/users/${id}`);
    return data;
};

const createUser = async (userData: CreateUserData): Promise<User> => {
    const { data } = await api.post<User>('/users', userData);
    return data;
};

const updateUser = async ({
    id,
    ...userData
}: Partial<User> & { id: number }): Promise<User> => {
    const { data } = await api.put<User>(`/users/${id}`, userData);
    return data;
};

const deleteUser = async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`);
};

// Custom hooks
export const useUsers = () => {
    return useQuery({
        queryKey: userKeys.lists(),
        queryFn: fetchUsers,
    });
};

export const useUser = (id: number) => {
    return useQuery({
        queryKey: userKeys.detail(id),
        queryFn: () => fetchUser(id),
        enabled: !!id,
    });
};

export const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: userKeys.lists() });
        },
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateUser,
        onSuccess: (data) => {
            queryClient.setQueryData(userKeys.detail(data.id), data);
            queryClient.invalidateQueries({ queryKey: userKeys.lists() });
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: userKeys.lists() });
        },
    });
};
