import { Loader2, RotateCcw, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { searchFormSchema } from './formSchema';

type HeaderSearchProps = {
  loading: boolean;
  refresh: (params?: App.SystemManage.InternalizationSearchParams) => void;
  form: UseFormReturn<z.infer<typeof searchFormSchema>>;
};

export default function HeaderSearch({ loading = false, refresh, form }: HeaderSearchProps) {
  const t = useTranslations('Pages');
  const tGlobal = useTranslations('Global');

  // 表单提交
  const onSubmit = (values: z.infer<typeof searchFormSchema>) => {
    refresh(values);
  };

  // 表单重置
  const resetForm = () => {
    form.reset();
    refresh();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2 items-center flex-wrap">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={`${tGlobal('enter')}${t('internationalization.name')}`}
                  className="h-8 w-[150px] lg:w-[250px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zh"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={`${tGlobal('enter')}${t('internationalization.zh')}`}
                  className="h-8 w-[150px] lg:w-[250px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="outline" size="sm" disabled={loading} type="submit">
          {loading ? <Loader2 className="animate-spin" /> : <Search />}
          {tGlobal('search')}
        </Button>
      </form>
      <Button variant="outline" size="sm" onClick={resetForm}>
        <RotateCcw />
        {tGlobal('reset')}
      </Button>
    </Form>
  );
}
