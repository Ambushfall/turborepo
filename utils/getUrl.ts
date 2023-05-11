export const GET_DEFAULT_URL = () => {
  const {env} = process
  // Object.entries(env).forEach(e => console.log(e))

  const vcurl = process.env.VERCEL_URL
  if (vcurl) return `https://${vcurl}` // SSR should use vercel url
  return `${process.env.NEXT_PUBLIC_IP}:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}
