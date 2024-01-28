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
            <ContextMenuLabel inset>😑 Finding Context Menu ..??</ContextMenuLabel>
          </ContextMenuRadioGroup>
          {/* <ContextMenuSeparator /> */}
          <Separator className='bg-gray-500' />
          <ContextMenuItem>💖 Btw Welcome to AIT TechFest</ContextMenuItem>
          <ContextMenuItem>🥲 Register krle...</ContextMenuItem>
          <ContextMenuItem>🤩 Prizes and Certificate bhi Milega</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    
  )
}