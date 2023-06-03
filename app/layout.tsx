import ClientLayout from "@components/templates/layout/ClientLayout";
import MainLayout from "@components/templates/layout/MainLayout";
import "@styles/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <ClientLayout>
          <MainLayout>{children}</MainLayout>
        </ClientLayout>
      </body>
    </html>
  );
}
