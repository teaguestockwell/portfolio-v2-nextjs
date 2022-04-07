import {Portfolio} from './portfolio'

type UserAgent = {userAgent: 'mobile' | 'desktop'}

export type PortfolioContext = Portfolio & UserAgent
