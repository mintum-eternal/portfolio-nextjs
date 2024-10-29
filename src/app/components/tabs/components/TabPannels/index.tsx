function TabPannels({
  children,
}: {
  children: React.ReactElement[];
}) {
    console.log('check tabpanel', children.map(child => child.key));
  return (
    <div>
      {children.map((child, idx) => (
        <div key={idx}>{child}</div>
      ))}
    </div>
  );
}

export default TabPannels;
