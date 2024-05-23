import type { Area } from '../types/Area'
import type { Interview } from '../types/Interview'
import areasList from '../data/areasList.json'
import interviewList from '../data/interviewsList.json'

function getLastDirectorySegment(url: string): string {
 const pathSegments = new URL(url).pathname.split('/').filter(Boolean)
 return pathSegments[pathSegments.length - 1]
}

function getAreaFromUrl(url: string): Area | undefined {
 const slug = getLastDirectorySegment(url)
 return areasList.find((area: Area) => area.slug === slug)
}

function getInterviewFromUrl(url: string): Interview | undefined {
 const slug = getLastDirectorySegment(url);
 return interviewList.find((interview: Interview) => interview.slug === slug)
}

function getInterviewFromSlug(slug: string): Interview | undefined {
 return interviewList.find((interview: Interview) => interview.slug === slug)
}

function getAreaFromTitle(title: string): Area | undefined {
 return areasList.find((area: Area) => area.title === title)
}

export {
 // getLastDirectorySegment,
 getAreaFromUrl,
 getInterviewFromUrl,
 getInterviewFromSlug,
 getAreaFromTitle
};