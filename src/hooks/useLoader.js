// React
import { useEffect, useState } from "react"
// Hooks
import useStore from "@/hooks/useStore"

export default function useLoader() {
  // Datas
  const backgroudsImageLoaderLength = 20;
  // States
  const [indexBackgroudImageLoader, setIndexBackgroudImageLoader] = useState(1);
  const [progressLoader, setProgressLoader] = useState(0);
  const [backgroudImageLoader, setBackgroudImageLoader] = useState('/images/loader-01.jpg');
  // Effects
  useEffect(() => {
    const load = () => {
      console.log('ok')
      setIndexBackgroudImageLoader(indexBackgroudImageLoader++);
      setBackgroudImageLoader(`/images/loader-${ indexBackgroudImageLoader < 10 ? `0${indexBackgroudImageLoader}` : indexBackgroudImageLoader }.jpg`);
      setProgressLoader(0 + (indexBackgroudImageLoader - 0) * (100 - 0) / (backgroudsImageLoaderLength - 0))
      if (indexBackgroudImageLoader > backgroudsImageLoaderLength) {
        setIndexBackgroudImageLoader(1);
        setProgressLoader(0);
        setBackgroudImageLoader('/images/loader-01.jpg');
        useStore.setState({ loaderFinished: true });
      } else {
        setTimeout(() => {
          load();
        }, 700 / (indexBackgroudImageLoader/5))
      }
    }
    if (!useStore.getState().loaderFinished) {
      load();
    }
  }, []);
  return { 
    backgroundImageLoader: backgroudImageLoader,
    progressLoader: progressLoader
  };
}