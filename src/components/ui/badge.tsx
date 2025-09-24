import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        category:
          'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 font-bold text-sm px-4 py-1.5',
        tech: 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 border-gray-200 hover:from-gray-100 hover:to-gray-200 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-800 shadow-sm hover:shadow-md transition-all duration-300 font-medium text-sm px-3 py-1',
        techColored:
          'border-0 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 font-medium text-sm px-3 py-1',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
