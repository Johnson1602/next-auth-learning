import { LoginButton } from '@/components/auth/login-button'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen space-y-6'>
      <h1 className='text-4xl font-bold'>Auth 🔐</h1>
      <p>A simple authentication app</p>
      <LoginButton>Login</LoginButton>
    </main>
  )
}
