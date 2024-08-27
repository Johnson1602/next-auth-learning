'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

interface LoginButtonProps {
  children?: React.ReactNode
  type?: 'modal' | 'button'
}

export function LoginButton(props: LoginButtonProps) {
  const { children, type = 'button' } = props

  const router = useRouter()

  function onClick() {
    router.push('/login')
  }

  if (type === 'modal') {
    return <div>modal</div>
  }

  return (
    <Button size='lg' onClick={onClick}>
      {children}
    </Button>
  )
}
