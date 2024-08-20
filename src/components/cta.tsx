import { placementEnum } from "@/types/enums";

interface Props {
  placement?: placementEnum;
}

const CTA = ({ placement }: Props) => {
  return (
    <div
      className={`flex ${
        placement === placementEnum.left ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div>hey</div>
      <div>yello</div>
    </div>
  );
};

export default CTA;
