import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

{
  /* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */
}
