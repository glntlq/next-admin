import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col w-full gap-6" style={{ height: 'calc(100vh - 8.4rem)' }}>
      <h2 className="font-black text-xl">客官，你走丢了哟！😉</h2>
      <Link href="/">
        <Button color="primary">返回首页</Button>
      </Link>
    </div>
  );
}
