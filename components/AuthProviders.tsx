'use client'
import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

type Provider = {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string
  signinUrlParams: Record<string, string> | null
}

type Providers = Record<string, Provider>

const AuthProviders = () => {
  const [providers, setProviders] = React.useState<Providers | null>(null)


  if(providers) {
    return (
      <div>
        
      </div>
    )
  }
}

export default AuthProviders
