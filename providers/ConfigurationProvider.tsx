"use client"

import React, { createContext } from 'react'
import { ConfigurationJson } from '@/types/ConfigurationType'
import { configurationDefaults } from '@/config/ConfigurationDefaults'

type ConfigurationProviderProps = {
  configuration: ConfigurationJson
  children: React.ReactNode
}

export const ConfigurationContext = createContext<ConfigurationJson>(configurationDefaults)

export function ConfigurationProvider({
  configuration,
  children,
}: ConfigurationProviderProps) {

  return (
    <ConfigurationContext.Provider value={configuration}>
      {children}
    </ConfigurationContext.Provider>
  )
}
