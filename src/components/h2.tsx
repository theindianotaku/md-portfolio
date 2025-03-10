import { slugify } from '@/lib/utils';

const CustomH2 = ({ children }: { children: string }) => {
  const id = slugify(children);

  return (
    <div
      id={id}
      className="w-full flex flex-row items-center justify-between gap-10"
    >
      <h2 className="text-4xl font-normal text-highlight flex">{children}</h2>
      <div className="mt-10 h-[2px] w-max bg-custom-accent shadow-xs grow"></div>
    </div>
  );
};

export default CustomH2;
