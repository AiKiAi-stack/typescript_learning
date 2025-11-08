import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
    onClick: ()=>void
}
export default function BasicButtons({onClick}: Props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={onClick}>Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
