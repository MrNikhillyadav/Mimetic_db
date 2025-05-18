"use client";

import { ROW_PER_PAGE } from "@/config";
import type { DocumentData } from "@/types";
import { ArrowBigDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Loader2 } from "lucide-react";
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
  const numPages = Math.ceil(length / ROW_PER_PAGE);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const _data = await loadData(page, filters);
      setData(_data);
      setLoading(false);
    })();
  }, [page, filters, loadData]);

  useEffect(() => {
    (async () => {
      const _length = await getLength(filters);
      setLength(_length);
      setPage(1);
    })();
  }, [filters, getLength]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= numPages) {
      setPage(newPage);
      // Scroll to the top of the table when changing pages
      const tableElement = document.getElementById("tableStart");
      if (tableElement) {
        tableElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Generate pagination buttons array
  const generatePaginationButtons = (): number[] => {
    const buttons: number[] = [];
    const maxButtonsToShow = 5; // Adjust as needed
    
    if (numPages <= maxButtonsToShow) {
      // Show all pages if there are few pages
      for (let i = 1; i <= numPages; i++) {
        buttons.push(i);
      }
    } else {
      // Show a subset of pages with current page in the middle
      let startPage = Math.max(1, page - Math.floor(maxButtonsToShow / 2));
      let endPage = startPage + maxButtonsToShow - 1;
      
      if (endPage > numPages) {
        endPage = numPages;
        startPage = Math.max(1, endPage - maxButtonsToShow + 1);
      }
      
      for (let i = startPage; i <= endPage; i++) {
        buttons.push(i);
      }
    }
    
    return buttons;
  };

  return (
    <section className="max-w-7xl mx-auto my-6 scroll-m-20 rounded-t-lg" id="tableStart">
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
              {length > 0 ? (page - 1) * ROW_PER_PAGE + 1 : 0}-{Math.min(page * ROW_PER_PAGE, length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900">{length}</span>
          </span>

          {/* Pagination Buttons */}
          <div className="inline-flex items-center -space-x-px">
            {/* First page button */}
            <button
              onClick={() => handlePageChange(1)}
              disabled={page === 1}
              className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg ${
                page === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100 hover:text-gray-700"
              }`}
              aria-label="First Page"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            
            {/* Previous page button */}
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 ${
                page === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100 hover:text-gray-700"
              }`}
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Page number buttons */}
            {generatePaginationButtons().map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                aria-current={page === pageNum ? "page" : undefined}
                className={`px-3 py-2 leading-tight border ${
                  page === pageNum
                    ? "text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                    : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {pageNum}
              </button>
            ))}
            
            {/* Next page button */}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === numPages || numPages === 0}
              className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 ${
                page === numPages || numPages === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100 hover:text-gray-700"
              }`}
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            
            {/* Last page button */}
            <button
              onClick={() => handlePageChange(numPages)}
              disabled={page === numPages || numPages === 0}
              className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg ${
                page === numPages || numPages === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100 hover:text-gray-700"
              }`}
              aria-label="Last Page"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Table;