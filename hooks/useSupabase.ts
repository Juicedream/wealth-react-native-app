import { createClerkSupabaseClient } from "@/lib/supabase";
import { useAuth } from "@clerk/expo";
import { useMemo } from "react";

export function useSupabase() {
  const { getToken } = useAuth();

  const client = useMemo(
    () => createClerkSupabaseClient(() => getToken()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [], // Empty deps - create the client once, getToken is captured in the closure
  );

  return client;
}
