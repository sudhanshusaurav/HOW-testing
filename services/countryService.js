import { adminClient } from "@/service.config";

export function AddCountry(data) {
  return adminClient.post(`/country`, data);
}

export function GetAllCountries() {
  return adminClient.get(`/country`);
}

export function GetCountryById(countryId) {
  return adminClient.get(`/country/${countryId}`);
}

export function GetCountryDestinationCount(countryId) {
  return adminClient.get(`/country/${countryId}/destinationCount`);
}

export function GetCountryPackageCount(countryId) {
  return adminClient.get(`/country/${countryId}/packageCount`);
}

export function UpdateCountry(data) {
  return adminClient.put(`/country`, data);
}

export function DeleteCountry(id) {
  return adminClient.delete(`/country?_id=${id}`);
}
