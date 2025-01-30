import LoadingComponent from "@/components/loading";

interface IRootDashboard {
  label?: string;
}
function RootDashboard({}: IRootDashboard) {
  return (
    <div className="w-full h-full">
      <LoadingComponent />
    </div>
  );
}

export default RootDashboard;
