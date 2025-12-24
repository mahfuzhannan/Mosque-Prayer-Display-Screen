import { ConfigurationJson } from '@/types/ConfigurationType'
import { useContext } from 'react'
import { ConfigurationContext } from '@/providers/ConfigurationProvider'

export function useConfiguration(): ConfigurationJson {
  const ctx = useContext(ConfigurationContext)

  if (!ctx) {
    throw new Error('useConfiguration must be used within provider')
  }

  return ctx
}
