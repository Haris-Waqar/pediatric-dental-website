import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Brooks Pediatric Dentistry button styles
 * Matches: .button, .button.is-small, .button.is-secondary, .button.is-tertiary
 * Base: border-radius 1.2rem, padding 1.25rem 2.5rem 1rem, font-size 1.11rem, font-weight 600
 * is-small: min-width 0, padding 1rem 1.25rem .6rem
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-center no-underline cursor-pointer font-content border-none transition-[background-color] duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        /* Primary: pink - Schedule, Contact Us, main CTAs */
        default:
          "bg-[var(--color-brand-pink)] text-white hover:bg-[var(--color-brand-pink-hover)] focus-visible:ring-[var(--color-brand-pink)]",
        /* Secondary: orange - phone numbers, Call Now */
        secondary:
          "bg-[var(--color-brand-orange)] text-white hover:bg-[var(--color-brand-orange-hover)] focus-visible:ring-[var(--color-brand-orange)]",
        /* Tertiary: blue - some Contact Us on blue sections */
        tertiary:
          "bg-[var(--color-brand-blue)] text-white hover:bg-[var(--color-brand-blue-hover)] focus-visible:ring-[var(--color-brand-blue)]",
        /* Hero Schedule CTA - orange accent */
        cta: "bg-[var(--color-brand-orange-cta)] text-white hover:bg-[var(--color-brand-orange-cta-hover)] focus-visible:ring-[var(--color-brand-orange-cta)]",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border-2 border-current bg-transparent hover:bg-current hover:text-white",
        "outline-white":
          "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#7C51A1]",
        ghost: "bg-transparent hover:bg-black/10 dark:hover:bg-white/10",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        /* Default: full button - min-width 10rem, padding 1.25rem 2.5rem 1rem */
        default:
          "rounded-[1.2rem] min-w-[10rem] px-[2.5rem] pt-[1.25rem] pb-[1rem] text-[1.11rem] font-semibold",
        /* Small: nav buttons - padding 1rem 1.25rem .6rem */
        sm: "rounded-[1.2rem] min-w-0 px-[1.25rem] pt-[1rem] pb-[0.6rem] text-[1.11rem] font-semibold",
        /* Large: hero, section CTAs - slightly bigger */
        lg: "rounded-[1.2rem] min-w-[10rem] px-[2.5rem] py-[1.25rem] text-[1.11rem] font-semibold",
        icon: "size-11 rounded-[1.2rem] p-0 min-w-0",
        "icon-sm": "size-9 rounded-[1.2rem] p-0 min-w-0",
        "icon-lg": "size-12 rounded-[1.2rem] p-0 min-w-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
