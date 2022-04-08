import { Context } from "@nuxt/types"
import { useLayoutStore } from "~/store/layout"

export default async function (ctx: Context) {
  if (process.server) {
    // @ts-expect-error todo: define $pinia store
    const store = useLayoutStore(ctx.$pinia)
    await store.nuxtServerInit(ctx)
  }
}
