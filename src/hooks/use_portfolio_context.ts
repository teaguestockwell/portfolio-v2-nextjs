import {createContext, useContext} from 'react'
import * as Types from '../types/types'

export const PortfolioContext = createContext<
  Types.PortfolioContext | undefined
>(undefined)

export const usePortfolio = () => {
  const portfolio = useContext(PortfolioContext)

  if (!portfolio) {
    console.trace('usePortfolio must be used within a PortfolioProvider')
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }

  if (!portfolio.userAgent) {
    throw new Error('usePortfolio must have a defined user agent')
  }

  return portfolio
}
