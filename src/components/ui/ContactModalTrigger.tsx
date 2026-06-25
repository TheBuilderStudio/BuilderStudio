"use client"

import { useEffect, ReactNode } from "react"
import { getCalApi } from "@calcom/embed-react"

interface ContactModalTriggerProps {
  children: ReactNode;
}

export const ContactModalTrigger = ({ children }: ContactModalTriggerProps) => {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#10B981"
          }
        },
        hideEventTypeDetails: false
      })
    })()
  }, [])

  return (
    <div 
      data-cal-link="builderstudio/builder-studio-strategy-call"
      data-cal-config='{"theme":"dark"}'
      className="inline-block cursor-pointer"
    >
      {children}
    </div>
  )
}
