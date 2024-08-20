interface Props {
  children?: React.ReactNode;
}

const CTA = ({ children }: Props) => {
  return (
    <div className="h-[500px] overflow-hidden flex items-center justify-center w-full px-[248px]">
      {children}
    </div>
  );
};

export default CTA;
