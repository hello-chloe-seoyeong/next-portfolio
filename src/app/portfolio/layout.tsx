export default function GateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full w-full flex items-center justify-center">
      {children}
    </main>
  );
}
