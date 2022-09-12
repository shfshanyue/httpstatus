import ReactGA from 'react-ga'

export const initGA = () => {
  // 设置 GA code
  ReactGA.initialize(process.env.gaId || '')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
