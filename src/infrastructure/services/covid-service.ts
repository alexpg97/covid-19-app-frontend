import { ContinentItem } from '@/types/continent-item';
import { COVID_API, VUE_APP_API_URL } from '@/config';
import { Continent } from '@/types/continent';
import httpClient from './http-client';

const BASE_URL = `${VUE_APP_API_URL}/${COVID_API}`;

const getInfo = () => httpClient.get<Continent[]>(`${BASE_URL}`);

const getContinents = () => httpClient.get<ContinentItem[]>(`${BASE_URL}/getContinents`);

const covidService = { getInfo, getContinents };

export default covidService;
