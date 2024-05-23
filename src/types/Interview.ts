export interface AboutDetails {
 title: string
 text: string
}

export interface TalkDetails {
 question: string
 answerParagraphs: string[]
 smalls?: string[]
}

export interface Interview {
 index: string
 slug: string
 area: string
 name: string
 category: string
 position: string
 copy1: string
 copy1sp?: string
 copy2: string
 about: AboutDetails
 talk: TalkDetails[]
 metaTitle: string
 metaDescription: string
}