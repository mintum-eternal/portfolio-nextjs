import LoadingComponent from "@/components/loading";
import {
  LazyExoticComponent,
  Suspense,
} from "react";

function PrivateComponent({
  LazyComponent,
}: {
  LazyComponent: LazyExoticComponent<
    () => JSX.Element
  >;
}) {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <LazyComponent />
    </Suspense>
  );
}

export default PrivateComponent;
