const CustomH2 = (props: { children: string; id?: string }) => {
  const { children, id } = props;

  return (
    <div className="w-full flex flex-row items-center justify-between gap-10">
      <h2 id={id} className="text-4xl font-normal text-highlight flex">
        {children}
      </h2>
      <div className="mt-10 h-[2px] w-max bg-custom-accent shadow-xs grow"></div>
    </div>
  );
};

export default CustomH2;
