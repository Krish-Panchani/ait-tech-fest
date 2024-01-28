// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Separator } from '@/components/ui/separator'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ContextMenu>
        <ContextMenuTrigger>
    <NextUIProvider>
      {children}
    </NextUIProvider>
    </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel inset>😑 Right Click ..??</ContextMenuLabel>
          </ContextMenuRadioGroup>
          {/* <ContextMenuSeparator /> */}
          <Separator className='bg-gray-500' />
          <ContextMenuItem>💖 Btw Welcome to AIT TechFest</ContextMenuItem>
          <ContextMenuItem>🥲 Inspect krnese kuch nhi milega</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    
  )
}