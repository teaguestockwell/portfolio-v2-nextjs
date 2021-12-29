export interface BlogPost {
  slug: string
  title: string
  summary: string
  publishedAt: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
}
