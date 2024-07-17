import createClient from "../lib/supabaseServer";
import { User } from "../types/app";

const getUserData = async (): Promise<User | null> => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log('NO USER', user);
    return null;
  }

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id);

  if (error) {
    console.log(error);
    return null;
  }

  return data ? data[0] : null;
};

export default getUserData;