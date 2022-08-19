import create from 'zustand'

const useStore = create((set) => {
  return {
    loaderFinished: false,
    menuOpen: false,
    creditsOpen: false,
    playVideoHome: false,
    onEndVideo: undefined,
    filterMap: null,
    popupOpen: false,
    popupProperties: null,
    interviewFinished: {
      humanitarian: false,
      geopolitics: false,
      history: false
    },
    allInterviewsFinished: false
  }
})

export default useStore
