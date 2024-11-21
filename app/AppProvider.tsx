import AuthGuard from "@/guards/Authguard";
import { useAppSelector } from "@/store";
import { SelectAuth } from "@/store/slice/auth";
import { Stack } from "expo-router";

export default function AppProvider() {
  const { user } = useAppSelector(SelectAuth);

  //   console.log(user);

  return (
    <AuthGuard>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="splash" options={{ headerShown: false }} />
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        {/* {user ? (
        ) : (
        )} */}
      </Stack>
    </AuthGuard>
  );
}
