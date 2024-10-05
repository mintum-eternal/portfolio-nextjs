import Button from "@/app/components/button";
import { IVariantButton } from "@/app/components/button/types";
import { colors, sizes } from "../../variables";
import { Helper } from "@/utils/Helpers";
interface IGroupButton {
  variant: IVariantButton;
}
function GroupButton(props: IGroupButton) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-bold text-xl">
        {Helper.capitalizeFirstLetter(
          props.variant
        )}
      </h3>
      <div className="grid grid-cols-2 gap-4 rounded p-4 bg-secondary">
        {colors.map((color) => (
          <div
            key={color}
            className="flex flex-row gap-2 items-center">
            {sizes.map((size) => (
              <Button
                key={size + color}
                size={size}
                colorScheme={color}
                variant={props.variant}>
                {Helper.capitalizeFirstLetter(
                  color
                )}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupButton;
