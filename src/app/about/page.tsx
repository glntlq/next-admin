import { Alert, Card, CardBody, CardHeader, Chip, Divider } from '@nextui-org/react';
import { keys, map } from 'lodash-es';
import { useTranslations } from 'next-intl';

import pkg from '../../../package.json';

type DepKey = keyof typeof pkg.dependencies;
type devKey = keyof typeof pkg.devDependencies;
export default function About() {
  const t = useTranslations('Pages');
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <div className="font-bold">{t('about.dependencies')}</div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {map(keys(pkg.dependencies), (key: DepKey) => (
              <Alert
                key={key}
                hideIcon
                title={
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{key}</span>
                    <Chip size="sm">{pkg.dependencies[key]}</Chip>
                  </div>
                }
              />
            ))}
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <div className="font-bold">{t('about.dev-dependencies')}</div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {map(keys(pkg.devDependencies), (key: devKey) => (
              <Alert
                key={key}
                hideIcon
                title={
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{key}</span>
                    <Chip>{pkg.devDependencies[key]}</Chip>
                  </div>
                }
              />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
