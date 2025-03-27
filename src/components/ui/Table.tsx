"use client";

import { ROW_PER_PAGE } from "@/config";
import { cn } from "@/lib/utils";
import type { DocumentData } from "@/types";
import { ArrowBigDown, Loader2 } from "lucide-react";
import { type FC, useEffect, useState } from "react";
import Filter, { Condition } from "@/components/Filter";

export interface Header {
  displayName: string;
  dataType: "string" | "number";
}

interface TableProps {
  filePath: string;
  headerMap: Record<string, Header>;
  loadData: (page?: number, filters?: Record<string, Condition[]>) => Promise<DocumentData[]>;
  getLength: (filters?: Record<string, Condition[]>) => Promise<number>;
  showHeaders?: boolean;
  showFilters?: boolean;
}

const Table: FC<TableProps> = ({
  filePath,
  headerMap,
  loadData,
  getLength,
  showHeaders = true,
  showFilters = true,
}) => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Record<string, Condition[]>>({});
  const [data, setData] = useState<DocumentData[]>([]);
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(true);

  const headers = Object.keys(headerMap);
  const Num_Pages = Math.ceil(length / ROW_PER_PAGE);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const _data = await loadData(page, filters);
      setData(_data);
      setLoading(false);
    })();
  }, [page, filters,loadData]);

  useEffect(() => {
    (async () => {
      const _length = await getLength(filters);
      setLength(_length);
      setPage(1);
    })();
  }, [filters,getLength]);

  return (
    <section className=" max-w-7xl mx-auto my-6 scroll-m-20 rounded-t-lg " id="tableStart">
      <div className="bg-white relative sm:rounded-lg overflow-hidden max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-end space-y-3 md:space-y-0 md:space-x-4 p-4">
          {/* Buttons */}
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-3 flex-shrink-0">
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <a
                href={`/data/${filePath}`}
                id="step6"
                className="cursor-pointer w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
              >
                Download
                <ArrowBigDown className="h-4 w-4 ml-1 text-gray-400" fill="currentColor" />
              </a>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            {showHeaders && (
              <thead className="text-sm text-gray-700 bg-gray-50">
                <tr>
                  {headers.map((header, index) => {
                    function updateFilters(conditions: Condition[]) {
                      setFilters((prev) => {
                        const newFilters = { ...prev };
                        newFilters[header] = conditions;
                        return newFilters;
                      });
                    }

                    return (
                      <th scope="col" className="px-4 py-3" key={index}>
                        <div className="inline-flex items-center justify-between gap-2">
                          <span className="text-nowrap text-gray-900">{headerMap[header].displayName}</span>

                          {showFilters && (
                            <Filter
                              field={headerMap[header].displayName}
                              dataType={headerMap[header].dataType}
                              updateFilters={updateFilters}
                            />
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
            )}
            <tbody>
              {/* Loader */}
              {loading && (
                <tr>
                  <td colSpan={headers.length} className="px-4 py-3 text-center text-gray-500">
                    <Loader2 className="h-6 w-6 animate-spin mx-auto text-gray-700" />
                  </td>
                </tr>
              )}

              {/* Data */}
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  {headers.map((header, index) => (
                    <td className="px-4 py-3 text-nowrap text-gray-800" key={index}>
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav
          className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {(page - 1) * ROW_PER_PAGE + 1}-{Math.min(page * ROW_PER_PAGE, length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900">{length}</span>
          </span>

          {/* Pagination Buttons */}
          {/* Add pagination logic here */}
        </nav>
      </div>
    </section>
  );
};

export default Table;
