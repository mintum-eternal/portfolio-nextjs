interface ILoadingComponent {
  className?: string;
}
function LoadingComponent({
  className,
}: ILoadingComponent) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className={`w-14 h-14 animate-circle bg-transparent rounded-full border-[6px] border-light !border-l-[6px] !border-l-primary box-border ${className}`}
      />
    </div>
  );
}

export default LoadingComponent;
