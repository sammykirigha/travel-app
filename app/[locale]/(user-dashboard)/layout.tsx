import { getTranslations } from "next-intl/server";
import SideBar from "../(dashboard)/dashboard/_components/sidebar";
import RequireAuth from "@/@/components/require-auth";

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
        <RequireAuth roles={["user"]}>
        <div className=" ">
            {/* <DashboardHeader showDashLinks={false} /> */}

            {/* <div className="md:hidden">
                <PropertyManagerMobileSideBar />
            </div> */}

            <div className="flex justify-between px-4 pt-[70px] bg-white">
                <div className="hidden md:block">
                    <SideBar />
                </div>
                <div className="w-full h-full ml-2">{children}</div>
            </div>
        </div>
        </RequireAuth>
    );
}
