"use server";

import type { Condition } from "@/components/Filter";
import { ROW_PER_PAGE } from "@/config";
import type { DocumentData } from "@/types";
import { filterMatch } from "./utils";

async function applyFilters(data: Object[], filters: Record<string, Condition[]>) {
  let filteredData = [...data];
  
  for (const field in filters) {
    const conditions = filters[field];
    if (conditions.length === 0) continue;
    
    filteredData = filteredData.filter((row) => {
      return conditions.some(condition => filterMatch(field, row, condition));
    });
  }

  return filteredData;
}

async function paginateData(data: DocumentData[], page: number) {
	const start = (page - 1) * ROW_PER_PAGE;
	const end = start + ROW_PER_PAGE;
	data = data.slice(start, end);
	return data;
}

export async function getProteinData(page: number = 1, filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/protein.json")).default;
	const filteredData = await applyFilters(data, filters);
	const pageData = await paginateData(filteredData, page);
	return pageData;
}

export async function getProteinDataLength(filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/protein.json")).default;
	const filteredData = await applyFilters(data, filters);
	return filteredData.length;
}

export async function getCarbohydrateData(page: number = 1, filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/carbohydrate.json")).default;
	const filteredData = await applyFilters(data, filters);
	const pageData = await paginateData(filteredData, page);
	return pageData;
}

export async function getCarbohydrateDataLength(filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/carbohydrate.json")).default;
	const filteredData = await applyFilters(data, filters);
	return filteredData.length;
}

export async function getCancerData(page: number = 1, filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/cancer.json")).default;
	const filteredData = await applyFilters(data, filters);
	const pageData = await paginateData(filteredData, page);
	return pageData;
}

export async function getCancerDataLength(filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/cancer.json")).default;
	const filteredData = await applyFilters(data, filters);
	return filteredData.length;
}

export async function getDiabetesData(page: number = 1, filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/diabetes.json")).default;
	const filteredData = await applyFilters(data, filters);
	const pageData = await paginateData(filteredData, page);
	return pageData;
}
export async function getDiabetesDataLength(filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/diabetes.json")).default;
	const filteredData = await applyFilters(data, filters);
	return filteredData.length;
}

export async function getCardiovascularDataLength(filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/cardiovascular.json")).default;
	const filteredData = await applyFilters(data, filters);
	return filteredData.length;
}

export async function getCardiovascularData(page: number = 1, filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/cardiovascular.json")).default;
	const filteredData = await applyFilters(data, filters);
	const pageData = await paginateData(filteredData, page);
	return pageData;
}

export async function getInfectiousDataLength(filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/infectious.json")).default;
	const filteredData = await applyFilters(data, filters);
	return filteredData.length;
}

export async function getInfectiousData(page: number = 1, filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/infectious.json")).default;
	const filteredData = await applyFilters(data, filters);
	const pageData = await paginateData(filteredData, page);
	return pageData;
}

export async function getInflammatoryDataLength(filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/inflammatory.json")).default;
	const filteredData = await applyFilters(data, filters);
	return filteredData.length;
}

export async function getInflammatoryData(page: number = 1, filters: Record<string, Condition[]> = {}) {
	const data = (await import("../data/inflammatory.json")).default;
	const filteredData = await applyFilters(data, filters);
	const pageData = await paginateData(filteredData, page);
	return pageData;
}

