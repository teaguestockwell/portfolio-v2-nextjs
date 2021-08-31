import {createContext, useContext} from 'react'
import * as Types from '../types/types'

export const PortfolioContext = createContext<Types.Portfolio | undefined>(
  undefined
)

export const usePortfolio = () => {
  const portfolio = useContext(PortfolioContext)

  if (!portfolio) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }

  return portfolio
}
