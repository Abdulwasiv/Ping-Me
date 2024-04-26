export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
      twitter: string
      github: string
    }
}

export const siteConfig: SiteConfig = {
    name: "ping me",
    
}