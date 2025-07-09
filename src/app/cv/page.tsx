import { redirect } from 'next/navigation';

function CV() {
  redirect('/resume.pdf');
}

export default CV