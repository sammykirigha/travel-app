"use client";
import { ReactNode, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { usePathname, useRouter } from "../navigation";
import { supabase_browser_client } from "../lib/supabaseClient";
import { User } from "../types/app";

interface RequireAuthProps {
    children: ReactNode;
    roles?: string[];
    navigateTo?: string;
}

const RequireAuth = ({ children, roles = [], navigateTo }: RequireAuthProps) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User>();
    const router = useRouter();

    const pathname = usePathname();

    useEffect(() => {
        const fetchData = async () => {
          const { data, error } = await supabase_browser_client.auth.getSession()
          
          if(data?.session?.user){
            setUser(data?.session?.user as unknown as User)
          }
        };
    
        fetchData();
      }, []);

    useEffect(() => {
        
        if (!user?.id) {
            router.replace(`/`);
        } else if (roles?.length > 0 && !roles.includes(user.role as string)) {
            let redirect = navigateTo ?? "/access-denied";
            if (user.role === "system-manager") redirect = "/dashboard";
            else if (user.role === "user") redirect = "/user-dashboard";
            router.replace(redirect);
        } else {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.id]);

    if (loading)
        return (
            <div className="min-h-screen flex justify-center items-center">
                <FaSpinner size={24} className="animate-spin" />
            </div>
        );

    return <>{children}</>;
};

export default RequireAuth;
