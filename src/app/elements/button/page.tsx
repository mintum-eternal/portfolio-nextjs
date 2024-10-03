import GroupButton from "./components/groupButton";
import { variants } from "./variables";

function DemoButtons() {
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {variants.map((variant) => (
        <GroupButton
          key={variant}
          variant={variant}
        />
      ))}
    </div>
  );
}

export default DemoButtons;
