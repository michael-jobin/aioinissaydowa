export interface BoxeDetail {
 title: string
 text: string
}

export interface Area {
 active: boolean
 index: string
 category: string
 slug: string
 linkedInterviewSlug: string
 title: string
 copy1: string
 copy2: string
 description: string
 boxes: BoxeDetail[]
 metaTitle: string
 metaDescription: string
}