import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Admin Page Layout */}
        <section className="flex gap-10 container mx-auto w-full">
          <section className="flex flex-col items-start justify-start pt-6 h-screen pl-6">
            <Link href="/admin" className="flex items-center gap-[12px] mb-12">
              <h1 className="text-neutral-900font-extrabold text-[20px]">
                Logo
              </h1>
            </Link>
            <section className="flex flex-col gap-4">
              <NavItem href="/" label="Dashboard" />
              <NavItem href="/products" label="Products" />
              <NavItem href="/orders" label="Orders" />
              <NavItem href="/customers" label="Customers" />
              <NavItem href="/reviews" label="Reviews" />
              <NavItem href="/settings" label="Settings" />
            </section>
          </section>
          <main className="flex-1 p-6 w-full">{children}</main>
        </section>
      </body>
    </html>
  );
}

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => (
  <Link
    href={href}
    className="bg-neutral-50 w-40 px-3 py-2 rounded-xl flex items-center gap-2 hover:bg-neutral-200 transition-all"
  >
    <span className="text-neutral-900">{label}</span>
  </Link>
);
