import { createContext } from 'react';
import {MainContextDataTypes} from './types'

const mainContextData: MainContextDataTypes= {
  isScrolled: false,
}


export const MainContext = createContext(mainContextData);