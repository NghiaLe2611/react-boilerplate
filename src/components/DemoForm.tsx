import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

const formSchema = z
    .object({
        name: z.string().min(2, {
            message: 'Name must be at least 2 characters.',
        }),
        email: z.string().email({
            message: 'Please enter a valid email address.',
        }),
        password: z.string().min(8, {
            message: 'Password must be at least 8 characters.',
        }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });

type FormValues = z.infer<typeof formSchema>;

export default function DemoForm() {
    const { t } = useTranslation();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = (values: FormValues) => {
        console.log('Form submitted:', values);
        // Simulate API call
        setTimeout(() => {
            console.log('Success message simulated');
        }, 1000);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('form.name')}</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your full name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('form.email')}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="john@example.com"
                                    type="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                We'll never share your email with anyone else.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('form.password')}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="********"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Password must be at least 8 characters long.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('form.confirmPassword')}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="********"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Re-enter your password to confirm.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full">
                    {t('common.submit')}
                </Button>
            </form>
        </Form>
    );
}
