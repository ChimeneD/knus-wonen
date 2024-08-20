interface Props {
  children?: React.ReactNode;
}

const CTA = ({ children }: Props) => {
  return (
    <div className="h-full lg:h-[500px] overflow-hidden flex items-center justify-center w-full px-4 lg:px-[248px]">
      {children}
    </div>
  );
};

export default CTA;
