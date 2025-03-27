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
	}, [page, filters, loadData]);

	useEffect(() => {
		(async () => {
			const _length = await getLength(filters);
			setLength(_length);
			setPage(1);
		})();
	}, [filters,getLength]);

	return (
		<section className='my-6 scroll-m-20 bg-gray-50' id='tableStart'>
			<div className='bg-white relative shadow-md sm:rounded-lg overflow-hidden max-w-6xl mx-auto'>
				<div className='flex flex-col md:flex-row items-center justify-end space-y-3 md:space-y-0 md:space-x-4 p-4'>
					{/* Buttons */}
					<div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-3 flex-shrink-0'>
						<div className='flex items-center space-x-3 w-full md:w-auto'>
							<a
								href={`/data/${filePath}`}
								id='step6'
								className='cursor-pointer w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'>
								Download
								<ArrowBigDown
									className='h-4 w-4 ml-1 text-gray-400'
									fill='currentColor'
								/>
							</a>
						</div>
					</div>
				</div>

				{/* Table */}
				<div className='overflow-x-auto'>
					<table className='w-full text-sm text-left text-gray-500'>
						{showHeaders && (
							<thead className='text-sm text-gray-700 bg-gray-50'>
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
											<th scope='col' className='px-4 py-3' key={index}>
												<div className='inline-flex items-center justify-between gap-2'>
													<span className='text-nowrap text-gray-900'>
														{headerMap[header].displayName}
													</span>

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
									<td
										colSpan={headers.length}
										className='px-4 py-3 text-center text-gray-500'>
										<Loader2 className='h-6 w-6 animate-spin mx-auto text-gray-700' />
									</td>
								</tr>
							)}

							{/* Data */}
							{data.map((row, index) => (
								<tr key={index} className='border-b border-gray-200 hover:bg-gray-50'>
									{headers.map((header, index) => (
										<td className='px-4 py-3 text-nowrap text-gray-800' key={index}>
											{row[header]}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<nav
					className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4'
					aria-label='Table navigation'>
					<span className='text-sm font-normal text-gray-500'>
						Showing{" "}
						<span className='font-semibold text-gray-900'>
							{(page - 1) * ROW_PER_PAGE + 1}-{Math.min(page * ROW_PER_PAGE, length)}
						</span>{" "}
						of{" "}
						<span className='font-semibold text-gray-900'>
							{length}
						</span>
					</span>

					<ul className='inline-flex items-stretch -space-x-px'>
						<li>
							<a
								href='#tableStart'
								className={cn(
									"flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
									{ "pointer-events-none opacity-50": page === 1 }
								)}
								aria-disabled={page === 1}
								onClick={() => {
									if (page === 1) return;
									setPage((page) => page - 1);
								}}>
								<span className='sr-only'>Previous</span>
								<svg
									className='w-5 h-5'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</a>
						</li>

						<ul
							className={cn("inline-flex items-stretch -space-x-px", {
								"flex-row-reverse": page > Num_Pages / 2,
							})}>
							<ul className='inline-flex items-stretch -space-x-px'>
								<li>
									<a
										href='#tableStart'
										className={cn(
											"flex items-center justify-center text-sm py-2 px-3 leading-tight hover:bg-gray-100 hover:text-gray-700",
											{
												"z-10 text-blue-600 bg-blue-50 border border-blue-300":
													page === 1,
											},
											{
												"text-gray-500 bg-white border border-gray-300":
													page !== 1,
											}
										)}
										onClick={() =>
											setPage((page) => {
												if (page === 1) return page;
												if (page === Num_Pages) {
													if (Num_Pages === 2) return 1;
													return page - 2;
												}
												return page - 1;
											})
										}>
										{page === 1
											? page
											: page === Num_Pages
											? Num_Pages === 2
												? 1
												: page - 2
											: page - 1}
									</a>
								</li>

								{Num_Pages > 1 && (
									<li>
										<a
											href='#tableStart'
											className={cn(
												"flex items-center justify-center text-sm py-2 px-3 leading-tight hover:bg-gray-100 hover:text-gray-700",
												{
													"z-10 text-blue-600 bg-blue-50 border border-blue-300":
														page !== 1 &&
														(Num_Pages === 2 || page !== Num_Pages),
												},
												{
													"text-gray-500 bg-white border border-gray-300":
														page === 1 ||
														(Num_Pages !== 2 && page === Num_Pages),
												}
											)}
											onClick={() =>
												setPage((page) => {
													if (page === 1) return page + 1;
													if (page === Num_Pages) {
														if (Num_Pages === 2) return page;
														return page - 1;
													}
													return page;
												})
											}>
											{page === 1
												? 2
												: page === Num_Pages
												? Num_Pages === 2
													? 2
													: Num_Pages - 1
												: page !== 1 && page !== Num_Pages && page}
										</a>
									</li>
								)}

								{Num_Pages > 2 && (
									<li>
										<a
											href='#tableStart'
											className={cn(
												"flex items-center justify-center text-sm py-2 px-3 leading-tight hover:bg-gray-100 hover:text-gray-700",
												{
													"z-10 text-blue-600 bg-blue-50 border border-blue-300":
														page === Num_Pages,
												},
												{
													"text-gray-500 bg-white border border-gray-300":
														page !== Num_Pages,
												}
											)}
											onClick={() =>
												setPage((page) => {
													if (page === 1) return page + 2;
													if (page === Num_Pages) return page;
													return page + 1;
												})
											}>
											{page === 1 && 3}
											{page === Num_Pages && Num_Pages}
											{page !== 1 && page !== Num_Pages && page + 1}
										</a>
									</li>
								)}
							</ul>

							{Num_Pages > 3 && (
								<>
									<li>
										<span className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300'>
											...
										</span>
									</li>

									<li>
										<a
											href='#tableStart'
											className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
											onClick={() =>
												setPage((page) =>
													page > Num_Pages / 2 ? 1 : Num_Pages
												)
											}>
											{page > Num_Pages / 2 ? 1 : Num_Pages}
										</a>
									</li>
								</>
							)}
						</ul>

						<li>
							<a
								href='#tableStart'
								className={cn(
									"flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
									{ "pointer-events-none opacity-50": page === Num_Pages }
								)}
								aria-disabled={page === Num_Pages}
								onClick={() => {
									if (page === Num_Pages) return;
									setPage((page) => page + 1);
								}}>
								<span className='sr-only'>Next</span>
								<svg
									className='w-5 h-5'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
};

export default Table;