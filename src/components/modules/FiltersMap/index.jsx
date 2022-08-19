// Styles
import { FiltersMapStyle } from './index.syle'
// React
import { useState } from 'react'
// Hooks
import useStore from '@/hooks/useStore'
// Icons
import FilterIcon from '@/components/icons/Filter'
import PointerIcon from '@/components/icons/Pointer'
import MilitarisationIcon from '@/components/icons/Militarisation'
import ColonisationIcon from '@/components/icons/Colonisation'
import InfrastructureIcon from '@/components/icons/Infrastructure'
import EventIcon from '@/components/icons/Event'
import CloseIcon from '@/components/icons/Close'

export default function FiltersMap() {
  // States
  const [isOpen, setIsOpen] = useState(false);
  // Store
  const filterMap = useStore((s) => s.filterMap)
  // Handlers
  const onClickFilters = () => {
    setIsOpen(!isOpen);
  }
  const onClickFilter = (e) => {
    if (filterMap == e.target.value) {
      e.target.checked = false;
    }
    useStore.setState({ filterMap: e.target.checked ? e.target.value : null });
  }
  return (
      <FiltersMapStyle isOpen={ isOpen } className={ `${ isOpen ? 'is-open' : '' }` }>
        <div className="border-left"></div>
        <div className="border-right"></div>
        <div className="header" onClick={ onClickFilters }>
          <FilterIcon />
          <p>Filters</p>
          {
            isOpen ? <CloseIcon /> : <PointerIcon />
          }
        </div>
        <ul className={ `options ${ isOpen ? 'is-open' : '' }` }>
          <li className="option">
            <input type="radio" name="filter" value="militarisation" onClick={ onClickFilter } />
            <div className="option-value">
              <MilitarisationIcon />
              <p>Militarisation</p>
            </div>
          </li>
          <li className="option">
            <input type="radio" name="filter" value="colonisation" onClick={ onClickFilter } />
            <div className="option-value">
              <ColonisationIcon />
              <p>Colonisation</p>
            </div>
          </li>
          <li className="option">
            <input type="radio" name="filter" value="infrastructure" onClick={ onClickFilter } />
            <div className="option-value">
              <InfrastructureIcon />
              <p>Infrastructure</p>
            </div>
          </li>
          <li className="option">
            <input type="radio" name="filter" value="events" onClick={ onClickFilter } />
            <div className="option-value">
              <EventIcon />
              <p>Events</p>
            </div>
          </li>
        </ul>
      </FiltersMapStyle>
  )
}
