import LoadingComponent from "@/components/loading";
import {
  LazyExoticComponent,
  Suspense,
} from "react";

function PublicComponent({
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

export default PublicComponent;
