import { MultiSelect } from "./component/MultiSelect.tsx";
import { MultiSelectOption } from "./component/MultiSelectOption.tsx";

export default function App() {
  return (
    <div className="app">
      <MultiSelect>
        <MultiSelectOption key="1">1</MultiSelectOption>
      </MultiSelect>
    </div>
  )
}