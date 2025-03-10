'use client';

import { Card, CardBody, CardHeader, Divider, Image, Link } from '@nextui-org/react';
import { useMount } from 'ahooks';
import { map } from 'lodash-es';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import { getRandomImg } from '@/lib/utils';

type ViewerImageSize = {
  width: number;
  height: number;
};

type ImageDecorator = {
  src: string;
  alt?: string;
  downloadUrl?: string;
  defaultSize?: ViewerImageSize;
};

export default function Viewer() {
  const t = useTranslations('Route');
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState<ImageDecorator[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const ImgViewer = dynamic(() => import('react-viewer'), { ssr: false });

  // 图片列表
  const imgList = () =>
    map(getRandomImg(20), (src: string) => ({
      src,
      downloadUrl: src,
    }));

  // 点击图片回调
  const handleClickImage = (index: number) => {
    setVisible(true);
    setActiveIndex(index);
  };

  useMount(() => {
    setImages(imgList());
  });
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl font-bold">{t('viewer')}</h1>
          <Link
            isBlock
            isExternal
            showAnchorIcon
            color="primary"
            href="https://github.com/infeng/react-viewer"
            target="_blank"
          >
            react-viewer
          </Link>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {map(images, (item: ImageDecorator, i: number) => (
            <Image
              key={item.src}
              src={item.src}
              height={250}
              width="100%"
              onClick={() => handleClickImage(i)}
              alt="Image Viewer"
              className="cursor-pointer object-cover rounded-md"
            />
          ))}
        </div>
        {/* 图片预览 */}
        <ImgViewer
          visible={visible}
          onClose={() => setVisible(false)}
          images={images}
          activeIndex={activeIndex}
          downloadable
          downloadInNewWindow
        />
      </CardBody>
    </Card>
  );
}
