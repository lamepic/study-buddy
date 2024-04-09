import Navbar from "../Navbar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto h-full">
      <Navbar />
      {children}
    </div>
  );
}

export default DashboardLayout;
