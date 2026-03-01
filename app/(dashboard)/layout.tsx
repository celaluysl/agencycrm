import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar">
                <Header />
                {children}
            </main>
        </div>
    );
}
