import { useRouter, useSegments } from "expo-router";
import { useSelector } from "react-redux";
import { ReactNode, useEffect } from "react";
import { useAppSelector } from "@/store";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const segments = useSegments();
  const isAuthenticated = useAppSelector((state) =>
    state.auth.user ? true : false
  );

  //   useEffect(() => {
  //     const inAuthGroup = segments[0] === "(auth)";

  //     if (!isAuthenticated && !inAuthGroup) {
  //       // Redirect unauthenticated users to login
  //       router.replace("/Login");
  //     } else if (isAuthenticated && inAuthGroup) {
  //       // Prevent authenticated users from accessing login
  //       router.replace("/home");
  //     }
  //   }, [isAuthenticated, segments]);

  return children;
}
