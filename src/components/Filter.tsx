"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ListFilter, Plus, Trash2, X, Check } from "lucide-react";
import { type FC, useRef, useState, useEffect } from "react";

const DefaultCondition: Condition = { relation: "equals", value: "" };

interface FilterProps {
  field: string;
  dataType: "string" | "number";
  updateFilters: (conditions: Condition[]) => void;
  initialConditions?: Condition[];
}

const Filter: FC<FilterProps> = ({ 
  field, 
  dataType, 
  updateFilters, 
  initialConditions = [] 
}) => {
  const [conditions, setConditions] = useState<Condition[]>(initialConditions);
  const [tempConditions, setTempConditions] = useState<Condition[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Initialize conditions from props if provided
  useEffect(() => {
    if (initialConditions.length > 0) {
      setConditions(initialConditions);
    }
  }, [initialConditions]);

  function addCondition() {
    setTempConditions((prev) => [...prev, { ...DefaultCondition }]);
  }

  function removeCondition(index: number) {
    const newConditions = conditions.filter((_, i) => i !== index);
    setConditions(newConditions);
    updateFilters(newConditions); // Immediately update parent
  }

  function removeTempCondition(index: number) {
    setTempConditions((prev) => prev.filter((_, i) => i !== index));
  }

  function removeAllConditions() {
    setConditions([]);
    setTempConditions([]);
    updateFilters([]); // Immediately update parent
  }

  function saveConditions() {
    // Filter out empty conditions
    const validTempConditions = tempConditions.filter(c => c.value.trim() !== "");
    
    const newConditions = [...conditions, ...validTempConditions];
    setConditions(newConditions);
    setTempConditions([]);
    updateFilters(newConditions); // Send to parent
    setIsDropdownOpen(false); // Close dropdown after applying
  }

  function updateCondition(index: number, condition: Condition) {
    const newConditions = [...conditions];
    newConditions[index] = condition;
    setConditions(newConditions);
    updateFilters(newConditions); // Immediately update parent
  }

  function updateTempCondition(index: number, condition: Condition) {
    setTempConditions((prev) => {
      const newConditions = [...prev];
      newConditions[index] = condition;
      return newConditions;
    });
  }

  // Only show active badge when we have actual conditions
  const hasActiveFilters = conditions.length > 0;

  return (
    <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DropdownMenuTrigger className="relative inline-flex items-center justify-center h-8 w-8 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none">
        <ListFilter id="step5" size={16} className={hasActiveFilters ? "text-blue-500" : ""} />
        {hasActiveFilters && (
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-blue-500" />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="bg-card p-3 w-80" id="step6">
        <DropdownMenuLabel className="text-sm font-medium">
          Filter by {field}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2" />

        {conditions.length === 0 && tempConditions.length === 0 ? (
          <div className="text-sm text-gray-500 py-2">
            No filters applied. Add a condition below.
          </div>
        ) : (
          <ul className="flex flex-col space-y-1 max-h-64 overflow-y-auto">
            {conditions.map((condition, index) => (
              <ConditionItem
                key={`condition-${index}`}
                dataType={dataType}
                condition={condition}
                updateCondition={(condition: Condition) =>
                  updateCondition(index, condition)
                }
                deleteCondition={() => removeCondition(index)}
              />
            ))}

            {tempConditions.map((condition, index) => (
              <ConditionItem
                key={`temp-condition-${index}`}
                dataType={dataType}
                condition={condition}
                updateCondition={(condition: Condition) =>
                  updateTempCondition(index, condition)
                }
                deleteCondition={() => removeTempCondition(index)}
                isTemporary
              />
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={addCondition}
            className="h-8 px-2 text-xs gap-1"
          >
            <Plus size={14} />
            <span>Add</span>
          </Button>

          {(conditions.length > 0 || tempConditions.length > 0) && (
            <Button 
              size="sm" 
              variant="outline" 
              onClick={removeAllConditions}
              className="h-8 px-2 text-xs gap-1 text-red-500 hover:text-red-600"
            >
              <X size={14} />
              <span>Clear All</span>
            </Button>
          )}

          {tempConditions.length > 0 && (
            <Button 
              size="sm"
              variant="default"
              onClick={saveConditions}
              className="h-8 px-2 text-xs gap-1 ml-auto"
            >
              <Check size={14} />
              <span>Apply</span>
            </Button>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type StringRelation = "equals" | "contains" | "starts-with" | "ends-with";
type NumberRelation = "equals" | "less-than" | "greater-than";

export interface Condition {
  relation: StringRelation | NumberRelation;
  value: string;
}

interface ConditionItemProps {
  dataType: "string" | "number";
  condition: Condition;
  deleteCondition: () => void;
  updateCondition: (condition: Condition) => void;
  isTemporary?: boolean;
}

const ConditionItem: FC<ConditionItemProps> = ({
  dataType,
  condition,
  deleteCondition,
  updateCondition,
  isTemporary = false,
}) => {
  function handleRelationChange(e: React.ChangeEvent<HTMLSelectElement>) {
    updateCondition({
      ...condition,
      relation: e.target.value as Condition["relation"],
    });
  }

  function handleValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateCondition({
      ...condition,
      value: e.target.value,
    });
  }

  return (
    <li className={`p-2 flex gap-2 items-center text-sm rounded-md ${
      isTemporary ? "bg-blue-50 dark:bg-blue-900/20" : ""
    }`}>
      <select
        name="relation"
        value={condition.relation}
        onChange={handleRelationChange}
        className="rounded bg-background border border-input h-8 px-2 text-xs min-w-24 focus:outline-none focus:ring-1 focus:ring-ring"
      >
        <option value="equals">Equals</option>

        {dataType === "string" && (
          <>
            <option value="contains">Contains</option>
            <option value="starts-with">Starts with</option>
            <option value="ends-with">Ends with</option>
          </>
        )}

        {dataType === "number" && (
          <>
            <option value="less-than">Less than</option>
            <option value="greater-than">Greater than</option>
          </>
        )}
      </select>

      <input
        type={dataType === "number" ? "number" : "text"}
        value={condition.value}
        onChange={handleValueChange}
        placeholder="Value"
        className="flex-1 h-8 border border-input rounded px-2 py-1 text-xs bg-background focus:outline-none focus:ring-1 focus:ring-ring"
      />

      <button
        className="text-red-500 hover:text-red-700 h-8 w-8 flex items-center justify-center rounded-md hover:bg-red-50 dark:hover:bg-red-900/20"
        onClick={deleteCondition}
        aria-label="Delete condition"
      >
        <Trash2 size={14} />
      </button>
    </li>
  );
};

export default Filter;