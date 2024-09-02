export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="mt-3  h-12 flex justify-between  border-black border-b-2">
        {children}
      </nav>
    </>
  );
}
