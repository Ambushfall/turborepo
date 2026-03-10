'use client'
import { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'

export function AnalyticsWrapper () {
  return (
    <>
      <Suspense>
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </Suspense>
    </>
  )
}
