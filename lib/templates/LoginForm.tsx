import { Box, Stack } from "../components/Layout/Layout.tsx";
import { Text } from "../components/Text/Text.tsx";
import { Input } from "../components/Input/Input.tsx";
import { Button } from "../components/Button/Button.tsx";

export const LoginForm = () => {
  return (
    <Box className="px-8 py-8 border border-gray-300 rounded-xl">
      <Stack>
        <Text as="h2" weight="bold" align="center" size="3xl" className="mb-2">
          Login
        </Text>
        <Text
          as="span"
          emphasis="low"
          size="sm"
          align="center"
          className="mb-8"
        >
          Please enter your credentials to login
        </Text>
        <Text
          as="label"
          htmlFor="username"
          size="sm"
          weight="semibold"
          className="px-1"
        >
          Username
        </Text>
        <Input
          type="text"
          id="username"
          placeholder="Username..."
          className="mb-2"
        />
        <Text
          as="label"
          htmlFor="password"
          size="sm"
          weight="semibold"
          className="px-1"
        >
          Password
        </Text>
        <Input
          type="password"
          id="password"
          placeholder="Password..."
          className="mb-2"
        />
        <Button type="submit" variant="solid" className="mt-8 mb-4 w-full">
          Login
        </Button>
      </Stack>
    </Box>
  );
};
