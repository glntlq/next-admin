'use client';
import { useTranslations } from 'next-intl';
export default function Dashboard() {
  const t = useTranslations('Route');
  return (
    <div className="flex justify-center items-center font-black text-4xl" style={{ height: 'calc(100vh - 96px)' }}>
      {t('dashboard')}
    </div>
  );
}
