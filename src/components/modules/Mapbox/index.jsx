// Styles
import { MapboxStyle, SatelliteStyle } from "./index.syle";
import { responsiveValue } from "@/components/templates/Interview/index.style";
// React
import { useRef, useEffect, useState } from "react";
//Hooks
import useStore from "@/hooks/useStore";
import useWindowSize from "@/hooks/useWindowSize";
// Nodes
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
// Datas
import kashmirDatas from "../../../../public/datas/kashmir.geojson";

const MAPTILER_KEY = "__REMOVED_MAPTILER_KEY__";
const BASE_STYLE_URL = `https://api.maptiler.com/maps/backdrop/style.json?key=${MAPTILER_KEY}`;
const SATELLITE_TILE_URL = `https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}`;
const SPRITE_URL = `${
  typeof window !== "undefined" ? window.location.origin : ""
}/sprite/kashmir`;

// Mid-gray monochrome palette
const COLOR_LAND = "hsl(0, 0%, 42%)";
const COLOR_LANDUSE = "hsl(0, 0%, 36%)";
const COLOR_WATER = "hsl(0, 0%, 92%)";
const COLOR_ROAD = "hsl(0, 0%, 92%)";
const COLOR_LABEL = "hsl(0, 0%, 20%)";

const fadeInRight = (w) => {
  return {
    initial: {
      width: "100%",
      transition: {
        duration: 0.5,
      },
    },
    popup: {
      width:
        w.width > 1440
          ? "calc(100% - 548px)"
          : `calc(100% - ${responsiveValue(548)})`,
      transition: {
        duration: 0.75,
      },
    },
  };
};

export default function Mapbox() {
  const w = useWindowSize();
  const [coordinates, setCoordonates] = useState(null);
  const [isSatellite, setIsSatellite] = useState(false);
  const [filterMap, popupOpen] = useStore((s) => [s.filterMap, s.popupOpen]);
  const mapRef = useRef(null);
  const mapboxRef = useRef(null);

  useEffect(() => {
    if (mapboxRef.current) return;

    mapboxRef.current = new maplibregl.Map({
      container: mapRef.current,
      style: BASE_STYLE_URL,
      center: [75.47527747354775, 33.52777414774282],
      zoom: 7.6308765470024,
      minZoom: 7.42,
      fadeDuration: 0,
    });
    mapboxRef.current.dragRotate.disable();
    mapboxRef.current.touchZoomRotate.disableRotation();

    mapboxRef.current.on("load", async () => {
      // Swap sprite to the local one carrying our custom icons
      const style = mapboxRef.current.getStyle();
      style.sprite = `${window.location.origin}/sprite/kashmir`;
      mapboxRef.current.setStyle(style);

      // Wait for the new style (with our sprite) to load before adding layers
      mapboxRef.current.once("styledata", () => {
        // Tune base map to a mid-gray monochrome palette
        for (const layer of mapboxRef.current.getStyle().layers) {
          const id = layer.id.toLowerCase();
          if (layer.type === "background") {
            mapboxRef.current.setPaintProperty(
              layer.id,
              "background-color",
              COLOR_LAND
            );
          } else if (layer.type === "fill") {
            if (id.includes("water")) {
              mapboxRef.current.setPaintProperty(
                layer.id,
                "fill-color",
                COLOR_WATER
              );
            } else if (
              id.includes("landuse") ||
              id.includes("landcover") ||
              id.includes("park") ||
              id.includes("forest") ||
              id.includes("wood")
            ) {
              mapboxRef.current.setPaintProperty(
                layer.id,
                "fill-color",
                COLOR_LANDUSE
              );
            }
          } else if (layer.type === "line") {
            if (
              id.includes("water") ||
              id.includes("river") ||
              id.includes("waterway")
            ) {
              mapboxRef.current.setPaintProperty(
                layer.id,
                "line-color",
                COLOR_WATER
              );
            } else if (
              id.includes("road") ||
              id.includes("highway") ||
              id.includes("street")
            ) {
              mapboxRef.current.setPaintProperty(
                layer.id,
                "line-color",
                COLOR_ROAD
              );
            }
          } else if (layer.type === "symbol") {
            try {
              mapboxRef.current.setPaintProperty(
                layer.id,
                "text-color",
                COLOR_LABEL
              );
              mapboxRef.current.setPaintProperty(
                layer.id,
                "text-halo-color",
                COLOR_LAND
              );
            } catch (e) {}
          }
        }

        // Satellite raster (hidden by default, toggled via state)
        if (!mapboxRef.current.getSource("satellite-src")) {
          mapboxRef.current.addSource("satellite-src", {
            type: "raster",
            tiles: [SATELLITE_TILE_URL],
            tileSize: 256,
          });
          mapboxRef.current.addLayer({
            id: "satellite-layer",
            type: "raster",
            source: "satellite-src",
            layout: { visibility: "none" },
          });
        }

        if (!mapboxRef.current.getSource("kashmir")) {
          mapboxRef.current.addSource("kashmir", {
            type: "geojson",
            data: kashmirDatas,
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 50,
          });

          mapboxRef.current.addLayer({
            id: "clusters",
            type: "circle",
            source: "kashmir",
            filter: ["has", "point_count"],
            paint: {
              "circle-color": "#FFFFFF",
              "circle-radius": 20,
            },
          });

          mapboxRef.current.addLayer({
            id: "cluster-count",
            type: "symbol",
            source: "kashmir",
            filter: ["has", "point_count"],
            layout: {
              "text-field": "{point_count_abbreviated}",
              "text-font": ["Noto Sans Bold"],
              "text-size": 12,
            },
            paint: {
              "text-color": "#7d817d",
            },
          });

          mapboxRef.current.addLayer({
            id: "unclustered-point",
            type: "symbol",
            source: "kashmir",
            filter: ["!has", "point_count"],
            layout: {
              "icon-image": [
                "match",
                ["get", "clickable"],
                ["No"],
                [
                  "match",
                  ["get", "category"],
                  ["Colonisation"],
                  "COLO DESACTIVE",
                  ["Events"],
                  "EVENTS DESACTIVE",
                  ["Militarisation"],
                  "MILITARISATION DESACTIVE",
                  ["Infrastructure"],
                  "INFRA DESACTIVE",
                  "",
                ],
                ["Yes"],
                [
                  "match",
                  ["get", "category"],
                  ["Colonisation"],
                  "Ellipse 25",
                  ["Events"],
                  "EVENTS ACTIVE",
                  ["Militarisation"],
                  "MILI ACTIVE",
                  "",
                ],
                "",
              ],
            },
          });
        }
      });
    });

    mapboxRef.current.on("click", "clusters", onClickCluster);
    mapboxRef.current.on("mouseenter", "clusters", () => {
      mapRef.current.querySelector("canvas").style.cursor = "pointer";
    });
    mapboxRef.current.on("mouseleave", "clusters", () => {
      mapRef.current.querySelector("canvas").style.cursor = "inherit";
    });
    mapboxRef.current.on("click", onClickMarker);
    mapboxRef.current.on("mouseenter", "unclustered-point", onMouseEnter);
    mapboxRef.current.on("mouseleave", "unclustered-point", onMouseLeave);
  }, []);

  useEffect(() => {
    if (
      mapboxRef.current &&
      mapboxRef.current.isStyleLoaded() &&
      mapboxRef.current.getSource("kashmir")
    ) {
      let filteredFeatures = kashmirDatas.features;
      if (filterMap != null) {
        const category = filterMap.charAt(0).toUpperCase() + filterMap.slice(1);
        filteredFeatures = kashmirDatas.features.filter((feature) => {
          return feature.properties.category == category;
        });
      }
      const filteredDatas = { ...kashmirDatas };
      filteredDatas.features = filteredFeatures;
      mapboxRef.current.getSource("kashmir").setData(filteredDatas);
    }
  }, [useStore.getState().filterMap]);

  useEffect(() => {
    if (mapboxRef.current) {
      if (coordinates !== null && !popupOpen) {
        setTimeout(() => {
          mapboxRef.current.flyTo({ center: coordinates });
        }, 0);
      }
    }
  }, [useStore.getState().popupOpen]);

  useEffect(() => {
    if (
      mapboxRef.current &&
      mapboxRef.current.isStyleLoaded() &&
      mapboxRef.current.getLayer("satellite-layer")
    ) {
      mapboxRef.current.setLayoutProperty(
        "satellite-layer",
        "visibility",
        isSatellite ? "visible" : "none"
      );
    }
  }, [isSatellite]);

  const onClickCluster = (event) => {
    const features = mapboxRef.current.queryRenderedFeatures(event.point, {
      layers: ["clusters"],
    });
    if (!features.length) return;
    const clusterId = features[0].properties.cluster_id;
    mapboxRef.current
      .getSource("kashmir")
      .getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) return;
        mapboxRef.current.easeTo({
          center: features[0].geometry.coordinates,
          zoom,
        });
      });
  };

  const onClickMarker = (event) => {
    const features = mapboxRef.current.queryRenderedFeatures(event.point, {
      layers: ["unclustered-point"],
    });
    if (!features.length) {
      useStore.setState({ popupOpen: false, menuOpen: false });
      mapboxRef.current.resize();
      return;
    }
    const feature = features[0];
    setCoordonates(feature.geometry.coordinates.slice());
    const longlat = feature.geometry.coordinates.slice();
    if (feature.properties.clickable !== "No") {
      useStore.setState({
        popupOpen: true,
        popupProperties: feature.properties,
        menuOpen: false,
      });
    }
    setTimeout(() => {
      mapboxRef.current.flyTo({ center: longlat });
    }, 0);
  };

  const onMouseEnter = (event) => {
    const features = mapboxRef.current.queryRenderedFeatures(event.point, {
      layers: ["unclustered-point"],
    });
    if (!features.length) return;
    const feature = features[0];
    if (feature.properties.clickable !== "No") {
      mapRef.current.querySelector("canvas").style.cursor = "pointer";
    }
    new maplibregl.Popup({
      anchor: "left",
      offset: [25, 0],
    })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
        `<div class="popup-hover">
          <p class="popup-hover-category">${feature.properties.category}</p>
          <p class="popup-hover-title">${feature.properties.title}</p>
        </div>`
      )
      .addTo(mapboxRef.current);
  };

  const onMouseLeave = () => {
    mapRef.current.querySelector("canvas").style.cursor = "inherit";
    const popup = mapRef.current.getElementsByClassName("maplibregl-popup");
    if (popup.length) popup[0].remove();
  };

  const onClickSatellite = () => {
    setIsSatellite(!isSatellite);
  };

  return (
    <>
      <SatelliteStyle isSatellite={isSatellite}>
        <p>{isSatellite ? "Stylized wiew" : "Satellite view"}</p>
        <div className="satellite-container">
          <div className="border-left"></div>
          <div className="border-right"></div>
          <input
            type="checkbox"
            name="satellite"
            id="satellite"
            onClick={onClickSatellite}
          />
        </div>
      </SatelliteStyle>
      <MapboxStyle
        ref={mapRef}
        popupOpen={popupOpen}
        className={popupOpen ? "is-popup" : ""}
        initial="initial"
        animate={popupOpen ? "popup" : "initial"}
        variants={fadeInRight(w)}
      />
    </>
  );
}
