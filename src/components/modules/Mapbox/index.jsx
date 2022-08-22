// Styles
import { MapboxStyle, SatelliteStyle } from './index.syle'
import { responsiveValue } from '@/components/templates/Interview/index.style'
// React
import { useRef, useEffect, useState } from 'react'
//Hooks
import useStore from '@/hooks/useStore'
import useWindowSize from '@/hooks/useWindowSize'
// Nodes
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
// Datas
import kashmirDatas from '../../../../public/datas/kashmir.geojson'

const fadeInRight = (w) => {
  return {
    initial: {
      width: "100%",
      transition: {
        duration: 0.5
      }
    },
    popup: {
      width: w.width > 1440 ? "calc(100% - 548px)" : `calc(100% - ${ responsiveValue(548) })`,
      transition: {
        duration: 0.75
      }
    }
  };
} 

export default function Mapbox() {
  const w = useWindowSize();
  // States
  const [coordinates, setCoordonates] = useState(null);
  const [isSatellite, setIsSatellite] = useState(false);
  // Store
  const [filterMap, popupOpen] = useStore((s) => [s.filterMap, s.popupOpen]);
  // References
  const mapRef = useRef(null)
  const mapboxRef = useRef(null)
  // Effects
  useEffect(() => {
    if (mapboxRef.current) return
    mapboxgl.clearStorage()
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnVyaWVkc2lnbmFscyIsImEiOiJjbDBhdmlhZTgwM3dtM2RxOTQ5cndsYXl0In0.Gvcq3DBOKDVRhy3QLjImiA'
    mapboxRef.current = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/buriedsignals/cl63rc8d1007q14mtm82jfkv5',
      fadeDuration: 0,
      minZoom: 7.42
    });
    mapboxRef.current.dragRotate.disable()
    mapboxRef.current.touchZoomRotate.disableRotation()
 
    mapboxRef.current.on('load', () => {
      mapboxRef.current.addSource('kashmir', {
        type: 'geojson',
        data: kashmirDatas,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50
      });
    
      mapboxRef.current.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'kashmir',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': '#FFFFFF',
          'circle-radius': 20
        }
      });
  
      mapboxRef.current.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'kashmir',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['Arial Unicode MS Bold'],
          'text-size': 12
        },
        paint: {
          'text-color': '#7d817d'
        }
      });
  
      // [ "match", ["get", "clickable"], ["No"], [ "match", ["get", "category"], ["Colonisation"], "COLO DESACTIVE", ["Events"], "EVENTS DESACTIVE", ["Militarisation"], "MILITARISATION DESACTIVE", ["Infrastructure"], "INFRA DESACTIVE", "" ], ["Yes"], [ "match", ["get", "category"], ["Colonisation"], "Ellipse 25", ["Events"], "EVENTS ACTIVE", ["Militarisation"], "MILI ACTIVE", "" ], "" ]
      mapboxRef.current.addLayer({
        id: 'unclustered-point',
        type: 'symbol',
        source: 'kashmir',
        filter: ['!has', 'point_count'],
        layout: {
          'icon-image': [ "match", ["get", "clickable"], ["No"], [ "match", ["get", "category"], ["Colonisation"], "COLO DESACTIVE", ["Events"], "EVENTS DESACTIVE", ["Militarisation"], "MILITARISATION DESACTIVE", ["Infrastructure"], "INFRA DESACTIVE", "" ], ["Yes"], [ "match", ["get", "category"], ["Colonisation"], "Ellipse 25", ["Events"], "EVENTS ACTIVE", ["Militarisation"], "MILI ACTIVE", "" ], "" ],
        }
        // paint: {
        //   'circle-color': '#11b4da',
        //   'circle-radius': 4,
        //   'circle-stroke-width': 1,
        //   'circle-stroke-color': '#fff'
        // }
      });
    });
    mapboxRef.current.on('click', onClickMarker);
    mapboxRef.current.on('mouseenter', 'unclustered-point', onMouseEnter);
    mapboxRef.current.on('mouseleave', 'unclustered-point', onMouseLeave);
  }, [])
  useEffect(() => {
    if (mapboxRef.current.isStyleLoaded() && mapboxRef.current) {
      let filteredFeatures = kashmirDatas.features;
      if (filterMap != null) {
        const category = filterMap.charAt(0).toUpperCase() + filterMap.slice(1)
        filteredFeatures = kashmirDatas.features.filter(feature => {
          return feature.properties.category == category;
        })
      }
      const filteredDatas = { ...kashmirDatas };
      filteredDatas.features = filteredFeatures;
      mapboxRef.current.getSource('kashmir').setData(filteredDatas);

    }
  }, [useStore.getState().filterMap])
  useEffect(() => {
    if (mapboxRef.current) {
      if (coordinates !== null && !popupOpen) {
        setTimeout(() => {
          mapboxRef.current.flyTo({ center: coordinates });
        }, 0);
      }
    }
  }, [useStore.getState().popupOpen])
  useEffect(() => {
    if (mapboxRef.current.isStyleLoaded() && mapboxRef.current) {
      mapboxRef.current.setLayoutProperty('mapbox-satellite', 'visibility', isSatellite ? 'visible' : 'none');
    }
  }, [isSatellite])
  // Handlers
  const onClickMarker = (event) => {
    // setTimeout(() => {
    //   mapboxRef.current.resize();
    // }, 0);
    const features = mapboxRef.current.queryRenderedFeatures(event.point, {
      layers: ["unclustered-point"],
    });
    if (!features.length) {
      useStore.setState({ popupOpen: false, menuOpen: false });
      mapboxRef.current.resize();
      return
    }
    const feature = features[0];
    setCoordonates(feature.geometry.coordinates.slice());
    const longlat = feature.geometry.coordinates.slice();
    if (feature.properties.clickable !== "No") {
      useStore.setState({
        popupOpen: true,
        popupProperties: feature.properties,
        menuOpen: false
      });
    }
    setTimeout(() => {
      mapboxRef.current.flyTo({ center: longlat });
    }, 0);
  }
  const onMouseEnter = (event) => {
    const features = mapboxRef.current.queryRenderedFeatures(event.point, {
      layers: ["unclustered-point"],
    });
    if (!features.length) {
      return
    }
    const feature = features[0];
    if (feature.properties.clickable !== "No") { 
      mapRef.current.querySelector('canvas').style.cursor = "pointer";
    }
    const popup = new mapboxgl.Popup({
      anchor: 'left',
      offset: [25, 0],
    })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
        `<div class="popup-hover">
          <p class="popup-hover-category">${ feature.properties.category }</p>
          <p class="popup-hover-title">${ feature.properties.title }</p>
        </div>`
      )
      .addTo(mapboxRef.current)
  }
  const onMouseLeave = (event) => {
    mapRef.current.querySelector('canvas').style.cursor = "inherit";
    const popup = mapRef.current.getElementsByClassName('mapboxgl-popup');
    if ( popup.length ) {
        popup[0].remove();
    }
  }
  const onClickSatellite = (event) => {
    setIsSatellite(!isSatellite);
  }
  return (
    <>
      <SatelliteStyle isSatellite={ isSatellite }>
        <p>{ isSatellite ? 'Stylized wiew' : 'Satellite view' }</p>
        <div className="satellite-container">
          <div className="border-left"></div>
          <div className="border-right"></div>
          <input type="checkbox" name="satellite" id="satellite" onClick={ onClickSatellite } />
        </div>
      </SatelliteStyle>
      <MapboxStyle ref={ mapRef } popupOpen={ popupOpen } className={ popupOpen ? "is-popup" : "" } initial="initial" animate={ popupOpen ? "popup" : "initial" } variants={fadeInRight(w)} />
    </>
  )
}
