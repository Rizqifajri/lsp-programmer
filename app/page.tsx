"use client";
import { Hero } from "@/components/hero";
import { ListCategory } from "@/components/list-category";
import { Navigation } from "@/components/navigation";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import useMenu from "@/hooks/useMenu";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default function Index() {
  return (
    <>
      <main className="min-h-full min-w-full">
        <Hero />
        <ListCategory />
      </main>
    </>
  );
}
