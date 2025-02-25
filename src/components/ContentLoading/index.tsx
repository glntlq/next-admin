import { Spinner } from '@nextui-org/react';

type ContentLoadingProps = {
  loading: boolean;
};

export default function ContentLoading({ loading = false }: ContentLoadingProps) {
  if (!loading) {
    return null;
  }
  return (
    <div className="absolute flex justify-center items-center w-full h-full z-50">
      <Spinner />
    </div>
  );
}
