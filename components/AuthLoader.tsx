import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import OApi from "../services";
import MainLayout from "../containers";
import { useProfile } from "../hooks/useProfile";

function AuthLoader({ children }: { children: ReactNode }) {
  const router = useRouter();

  const { isLogged, dataUser, isLoading } = useProfile();

  const userSignout = useMutation(["authLogout"], () =>
    OApi.logout.authLogout()
  );

  // console.log(dataUser);

  const onSignOut = () => {
    userSignout.mutate({} as any, {
      onSuccess: async () => {
        const callbackUrl = window.location.href;

        await router.push({
          pathname: `${process.env.ACCOUNT_URL}/signin` as string,
          query: { callback_url: callbackUrl },
        });
      },
    });
  };

  React.useEffect(() => {
    (async () => {
      if (isLoading) return;

      if (!isLogged) {
        const callbackUrl = window.location.href;
        await router.push({
          pathname: `${process.env.ACCOUNT_URL}/signin` as string,
          query: { callback_url: callbackUrl },
        });
        return;
      }
      if (dataUser?.role !== "chief") {
        await router.push("https://account-ui-green.vercel.app/");
      }
    })();
  }, [isLogged, isLoading, dataUser?.role, router]);

  if (isLogged && dataUser?.role === "chief") {
    return (
      <MainLayout profile={dataUser} onSignOut={onSignOut}>
        {children}
      </MainLayout>
    );
  }
  return <div>{children}</div>;
}

export default AuthLoader;
