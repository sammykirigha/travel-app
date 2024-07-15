import PropertyManagerMobileSideBar from "@/app/[locale]/(dashboard)/dashboard/_components/mobile-property-manger-sidebar";
import RequireAuth from "@/components/require-auth";
import { getTranslations } from "next-intl/server";
import DashboardHeader from "../../../components/layout/dashboard-header";
import SideMenu from "./dashboard/_components/sidebar";

export async function generateMetadata() {
    const t = await getTranslations("Metadata");
    return {
        title: t("dashboardTitle"),
        description: t("dashboardDescription"),
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // <RequireAuth roles={["property-manager"]}>
            <div>
            {/* <DashboardHeader showDashLinks={false} /> */}

            {/* <div className="md:hidden">
                <PropertyManagerMobileSideBar />
            </div> */}

            <div className="flex justify-between px-4">
                <div className="hidden md:block">
                    <SideMenu />
                </div>
                <div className="w-full h-full ml-2">{children}</div>
            </div>
            </div>
        {/* </RequireAuth> */}
    );
}
