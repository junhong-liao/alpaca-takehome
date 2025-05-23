import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/notes');
  return null;
}
