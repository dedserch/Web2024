import { Component } from "react"
import CheckBox from "../ui/CheckBox"
import Input from "../ui/Input"
import { SEVERITY } from "../../constants/severity.enun"

interface SidebarProps {
  hideCompleted: boolean
  selectedSeverities: SEVERITY[]
  toggleHideCompleted: () => void
  toggleSeverity: (severity: SEVERITY) => void
  searchQuery: string
  updateSearchQuery: (query: string) => void
  availableSeverities: SEVERITY[]
}

export class Sidebar extends Component<SidebarProps> {
  render() {
    const {
      hideCompleted,
      selectedSeverities,
      toggleHideCompleted,
      searchQuery,
      updateSearchQuery,
      availableSeverities,
    } = this.props

    return (
      <div className="p-4 bg-gray-100 rounded">
        <div className="flex items-center mb-4">
          <CheckBox isDone={hideCompleted} onChange={toggleHideCompleted} />
          <span className="ml-2">Скрыть выполненные</span>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Поиск</p>
          <Input
            value={searchQuery}
            onChange={(e) => updateSearchQuery(e.target.value)}
            placeholder="Введите для поиска"
          />
        </div>

        <div className="mt-4">
          <p className="font-semibold">Важность</p>
          <div className="mt-2">
            {availableSeverities.map((severity) => (
              <label key={severity} className="flex items-center">
                <CheckBox
                  isDone={selectedSeverities.includes(severity)}
                  onChange={() => this.props.toggleSeverity(severity)}
                />
                <span className="ml-2">{severity}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
