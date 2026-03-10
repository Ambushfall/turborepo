'use client'
import { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

export function AnalyticsWrapper () {
  return (
    <>
      <Suspense>
        <Analytics />
        <SpeedInsights/>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </Suspense>
    </>
  )
}
