// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'

export default  function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider>{children}</ChakraProvider>
}