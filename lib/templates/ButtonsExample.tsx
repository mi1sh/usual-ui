import {Button, Stack} from 'usual-ui';

export const ButtonsExample = () => {
  return (
    <Stack direction="row" gap="sm">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
        <Button variant="underline">Underline</Button>
    </Stack>
  );
};
