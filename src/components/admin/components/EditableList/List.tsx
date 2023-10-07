import { JSX, cloneElement, useState } from "react";
import EditableListItem from "./ListItem";
import _ from "lodash";

type ItemComponent = JSX.Element | JSX.Element[];

function EditableList({ children }: { children: ItemComponent }) {
  const[selectedId, setSelectedId] = useState<string>();

  const handleSelect = (id?: string) => {
    setSelectedId(id);
  }

  return (
    <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400 overflow-y-hidden">
      <thead className="text-lg text-slate-500 dark:text-gray-400 border-b">
        <tr>
          <th scope="col" className="px-4 py-4">Title</th>
          <th scope="col" className="px-4 py-4">Description</th>
          <th scope="col" className="px-4 py-4">image Url</th>
          <th scope="col" className="px-4 py-3">
              <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(children) ? (
          children.map((child) => cloneElement(child, {
            onSelect: handleSelect,
            showDropdown: _.isEqual(child.props.id, selectedId),
          }))
        ) : (
          cloneElement(children, {
            onSelect: handleSelect,
            showDropdown: _.isEqual(children.props.id, selectedId),
          })
        )}
      </tbody>
    </table>
  );
}

EditableList.Item = EditableListItem;

export default EditableList;
